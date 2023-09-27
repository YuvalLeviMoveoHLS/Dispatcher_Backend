import { Module } from '@nestjs/common';
import { FiltersService } from './filters.service';
import { FiltersController } from './filters.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { sourceSchema } from './source.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Source', schema: sourceSchema }]),
  ],

  providers: [FiltersService],
  controllers: [FiltersController],
})
export class FiltersModule {}
