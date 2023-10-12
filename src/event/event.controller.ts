import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from 'src/dto/create-event.dto';
import { Event } from 'src/schemas/event.schema';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    await this.eventService.create(createEventDto);
  }

  @Get()
  async findAll(): Promise<Event[]> {
    return this.eventService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Event> {
    return this.eventService.findOne(id);
  }

  @Put(':id')
  async updateOne(@Param('id') id: string, @Body() details: CreateEventDto) {
    return this.eventService.updateOne(id, details)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.eventService.delete(id);
  }
}
