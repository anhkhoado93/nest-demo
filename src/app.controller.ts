import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Item } from './schemas/item.schema';
import { CreateItemDto } from './dto/item.dto';

@Controller('item')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllItems(@Query('exclude') query: string): Promise<Item[]> {
    // if (query) {
    //   return this.appService.getAllExclude(query);
    // }
    return this.appService.getAll();
  }

  @Post()
  addItem(@Body() body: CreateItemDto): Promise<Item> {
    return this.appService.createItem(body);
  }
}
