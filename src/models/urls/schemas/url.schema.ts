import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { generate } from 'shortid';

export type UrlDocument = Url & Document;

@Schema({ timestamps: true })
export class Url {
  @Prop({ required: true, default: generate })
  slug: string;

  @Prop({ required: true })
  target: string;

  @Prop({ default: 0 })
  visits: number;
}

export const UrlSchema = SchemaFactory.createForClass(Url);
