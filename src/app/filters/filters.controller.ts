import { Controller, Get } from '@nestjs/common';
import { FiltersService } from './filters.service';

@Controller('filters')
export class FiltersController {
  constructor(private readonly filtersService: FiltersService) {}

  @Get('sources')
  getSources() {
    return this.filtersService.getSources();
  }

  @Get('languages')
  getLanguages() {
    return this.filtersService.getLanguages();
  }

  //   @Get('categories')
  //   getCategories() {
  //     return this.filtersService.getCategories();
  //   }
}
