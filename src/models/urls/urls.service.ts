import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

import { Url } from 'src/models/urls/schemas/url.schema';
import { CreateUrlDto } from './dto/create-url.dto';

@Injectable()
export class UrlsService {
  constructor(@InjectModel(Url.name) private urlModel: Model<Url>) {}

  async create(createUrlDto: CreateUrlDto, options: { plain?: boolean } = {}) {
    const url = new this.urlModel(createUrlDto);
    await url.save();
    return options.plain ? url.toJSON({ versionKey: false }) : url;
  }

  async findBySlug(slug: string) {
    return this.urlModel
      .findOneAndUpdate({ slug }, { $inc: { visits: 1 } }, { new: true })
      .lean();
  }

  findOne(conditions: FilterQuery<Url>) {
    return this.urlModel.findOne(conditions);
  }
}
