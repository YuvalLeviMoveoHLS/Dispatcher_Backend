import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseConnectionModule } from './mongoose.module';
import { HealthModule } from './health/health.module';
export const AppModules = [HealthModule];
@Module({
  imports: [...AppModules],
  controllers: [],
  providers: [],
})
export class AppModule {}
