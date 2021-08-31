import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UrlDocument = Url & Document;

@Schema({ timestamps: true })
export class Url {
  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  target: string;

  @Prop({ default: 0 })
  visits: number;
}

export const UrlSchema = SchemaFactory.createForClass(Url);
