import { MongooseModule } from '@nestjs/mongoose';

export const MongooseConnectionModule = MongooseModule.forRootAsync({
  useFactory: async () => {
    const connection = {
      dbName: process.env.DATABASE_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    connection['uri'] = process.env.DATABASE_URI || 'mongodb://localhost:27017';
    console.log(process.env.DATABASE_URI);
    console.log(connection);
    return connection;
  },
});
