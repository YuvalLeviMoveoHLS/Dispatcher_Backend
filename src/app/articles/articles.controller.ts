import { Controller, Get, Query, Res } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
@ApiTags('articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  @ApiResponse({
    isArray: true,
    status: 200,
    description: 'Get list of articles',
  })
  async articles(
    @Query('pageSize') pageSize: number,
    @Query('page') page: number,
    @Res() res: Response,
  ) {
    const articles = await this.articlesService.findPaginated(pageSize, page);
    return res.status(200).send(articles);
  }

  //   @Get()
  //   async findAll() {
  //     return this.articlesService.findAll();
  //   }
  //   @Get()
  //   @ApiResponse({
  //     isArray: true,
  //     status: 200,
  //     description: 'Health check',
  //   })
  //   async articles(@Res() res: Response) {
  //     return res.sendStatus(200);
  //   }
}
