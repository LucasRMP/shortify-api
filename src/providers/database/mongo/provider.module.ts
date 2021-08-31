import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:pass@db:27017/shortify')],
})
export class MongoDatabaseProviderModule {}
