import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseConnectionModule } from './mongoose.module';
import { HealthModule } from './health/health.module';
import { ConfigModule } from '@nestjs/config';
import { ArticlesModule } from './articles/articles.module';
export const AppModules = [HealthModule, ArticlesModule];
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseConnectionModule,
    ...AppModules,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
