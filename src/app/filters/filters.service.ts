import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { mapLanguageCodeToName } from '../helpers';
import { Source } from './source.interface';

@Injectable()
export class FiltersService {
  constructor(
    @InjectModel('Source') private readonly sourceModel: Model<Source>,
  ) {}

  async getSources(): Promise<Source[]> {
    return await this.sourceModel.find().exec();
  }

  async getLanguages(): Promise<{ value: string; title: string }[]> {
    const languages = await this.sourceModel
      .distinct('language', { language: { $ne: 'ud' } })
      .exec();
    return languages.map((lang) => ({
      value: lang,
      title: mapLanguageCodeToName(lang),
    }));
  }
  async getCategories(): Promise<string[]> {
    return await this.sourceModel.distinct('category').exec();
  }
}
