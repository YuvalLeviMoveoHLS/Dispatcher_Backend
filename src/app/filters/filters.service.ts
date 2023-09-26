import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { mapLanguageCodeToName } from '../helpers';

@Injectable()
export class FiltersService {
  constructor(
    @InjectModel('Source') private readonly sourceModel: Model<any>,
  ) {}

  async getSources(): Promise<any[]> {
    return await this.sourceModel.find().exec();
  }

  async getLanguages(): Promise<{ value: string; title: string }[]> {
    const languages = await this.sourceModel.distinct('language').exec();
    return languages.map((lang) => ({
      value: lang,
      title: mapLanguageCodeToName(lang),
    }));
  }
  //   async getCategories(): Promise<string[]> {
  //     return await this.sourceModel.distinct('category').exec();
  //   }
}
