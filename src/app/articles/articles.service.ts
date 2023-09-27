import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from './article.interface';
import { ArticleFront, articleFrontProjection } from '../helpers';
@Injectable()
export class ArticlesService {
  constructor(@InjectModel('Article') private articleModel: Model<Article>) {}

  //   async findArticles(
  //     pageSize: number,
  //     page: number,
  //     country,
  //     source,
  //     type: 'top-headlines' | 'everything',
  //   ): Promise<{ articles: ArticleFront[]; totalResults: number }> {
  //     // Convert to number and apply defaults if necessary
  //     pageSize = Number(pageSize) || 10;
  //     page = Number(page) || 1;
  //     let query = {};
  //     const skip = (page - 1) * pageSize;
  //     const articlesRes = await this.articleModel
  //       .find()
  //       .select(articleFrontProjection)
  //       .limit(pageSize)
  //       .skip(skip)
  //       .exec();
  //     const totalResults = articlesRes.length;
  //     return {
  //       articles: articlesRes,
  //       totalResults: totalResults,
  //     };
  //   }
  // }
  async findTopHeadlines(
    pageSize: number,
    page: number,
    country: string,
    source: string,
    category: string,
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
    date: Date,
    sortBy: string,
    language: string,
  ): Promise<{ articles: ArticleFront[]; totalResults: number }> {
    pageSize = Number(pageSize) || 10;
    page = Number(page) || 1;

    let query: any = {};

    if (source) {
      query['source.id'] = source;
    }
    //if (date) query.date = date;
    if (language) query.language = language;
    if (sortBy) query.sortBy = sortBy;
    // q????
    const skip = (page - 1) * pageSize;
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
}
