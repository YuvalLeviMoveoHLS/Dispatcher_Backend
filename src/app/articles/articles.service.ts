import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from './article.interface';
@Injectable()
export class ArticlesService {
  constructor(@InjectModel('Article') private articleModel: Model<Article>) {}

  async findArticles(
    pageSize: number,
    page: number,
  ): Promise<{ articles: Article[]; totalResults: number }> {
    // Convert to number and apply defaults if necessary
    pageSize = Number(pageSize) || 10;
    page = Number(page) || 1;

    const skip = (page - 1) * pageSize;
    const articlesRes = await this.articleModel
      .find()
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
