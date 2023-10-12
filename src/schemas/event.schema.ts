import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EventDocuemt = HydratedDocument<Event>

@Schema()
export class Event {
  @Prop({required: true})
  title: string;

  @Prop({required: true})
  description: string;

  @Prop({required: true})
  location: string;

  @Prop({required: true})
  start: Date;

  @Prop()
  end: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);