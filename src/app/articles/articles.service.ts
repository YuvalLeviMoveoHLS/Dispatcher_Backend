import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from './article.interface';
import { ArticleFront, articleFrontProjection } from '../helpers';
@Injectable()
export class ArticlesService {
  constructor(@InjectModel('Article') private articleModel: Model<Article>) {}

  async findTopHeadlines(
    pageSize: number,
    page: number,
    country: string,
    source: string,
    category: string,
    q: string,
  ): Promise<{ articles: ArticleFront[]; totalResults: number }> {
    pageSize = Number(pageSize) || 10;
    page = Number(page) || 1;

    let query: any = { isTopheadlines: true };

    if (country) query.country = country;
    if (source) {
      query['source.id'] = source;
    }
    if (category) query.category = category;
    const skip = (page - 1) * pageSize;
    if (q) {
      const regex = new RegExp(`\\b${q}\\b`, 'i'); // 'i' makes the search case-insensitive
      query.$or = [
        { title: regex },
        { description: regex },
        { content: regex },
      ];
    }

    console.log(query);
    const articlesRes = await this.articleModel
      .find(query)
      .select(articleFrontProjection)
      .sort({ publishedAt: -1 })
      .limit(pageSize)
      .skip(skip)
      .exec();
    const totalResults = articlesRes.length;

    return {
      articles: articlesRes,
      totalResults: totalResults,
    };
  }

  async findEverything(
    pageSize: number,
    page: number,
    source: string,
    from: Date,
    to: Date,
    date: Date,
    sortBy: string,
    language: string,
    q: string,
  ): Promise<{ articles: ArticleFront[]; totalResults: number }> {
    pageSize = Number(pageSize) || 10;
    page = Number(page) || 1;

    let query: any = {};

    if (source) {
      query['source.id'] = source;
    }
    if (from && to) {
      query.publishedAt = {
        $gte: new String(from),
        $lte: new String(to),
      };
    }
    if (q) {
      const regex = new RegExp(`\\b${q}\\b`, 'i'); // 'i' makes the search case-insensitive
      query.$or = [
        { title: regex },
        { description: regex },
        { content: regex },
      ];
    }
    if (language) query.language = language;
    const skip = (page - 1) * pageSize;

    let sortOption: any = { publishedAt: -1 }; // default sort
    if (sortBy === 'publishedAt') {
      sortOption = { publishedAt: 1 };
    } else if (sortBy === ('popularity' || 'relevancy')) {
      query.isTopheadlines = true;
      sortOption = { title: 1 };
    }
    console.log(query);

    const articlesRes = await this.articleModel
      .find(query)
      .select(articleFrontProjection)
      .sort(sortOption)
      .limit(pageSize)
      .skip(skip)
      .exec();
    const totalResults = articlesRes.length;

    return {
      articles: articlesRes,
      totalResults: totalResults,
    };
  }
}
