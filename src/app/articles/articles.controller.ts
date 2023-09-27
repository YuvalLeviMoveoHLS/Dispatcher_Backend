
import {
  BadRequestException,
  Controller,
  Get,
  Query,
  Res,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
@ApiTags('articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  //   @Get()
  //   @ApiResponse({
  //     isArray: true,
  //     status: 200,
  //     description: 'Get list of articles',
  //   })
  //   async articles(
  //     @Query('pageSize') pageSize: number,
  //     @Query('page') page: number,
  //     @Res() res: Response,
  //   ) {
  //     const result = await this.articlesService.findArticles(pageSize, page);
  //     return res.status(200).send(result);
  //   }

  @Get('top-headlines')
  async topHeadlines(
    @Query('pageSize') pageSize: number,
    @Query('page') page: number,
    @Query('country') country: string,
    @Query('source') source: string,
    @Query('category') category: string,
    @Res() res: Response,
  ) {
    if ((country || category) && source) {
      throw new BadRequestException(
        "You cannot use 'country' or 'category' and 'source' together.",
      );
    }
    const result = await this.articlesService.findTopHeadlines(
      pageSize,
      page,
      country,
      source,
      category,
    );
    return res.status(200).send(result);
  }
}

