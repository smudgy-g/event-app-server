import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Event } from 'src/schemas/event.schema'; 
import { CreateEventDto } from 'src/dto/create-event.dto';


@Injectable()
export class EventService {
  constructor(@InjectModel(Event.name) private readonly eventModel: Model<Event>) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    const createEvent = new this.eventModel(createEventDto);
    return createEvent.save();
  }

  async findAll(): Promise<Event[]> {
    return await this.eventModel.find().exec()
  }

  async findOne(id: string): Promise<Event> {
    return await this.eventModel.findOne({ _id: id }).exec();
  }

  async updateOne(id: string, details: CreateEventDto): Promise<Event> {
    return await this.eventModel.findByIdAndUpdate(
      {  _id: id },
      { ...details }, 
      { new: true });
  }

  async delete(id: string) {
    const deletedEvent = await this.eventModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedEvent;
  }
}
