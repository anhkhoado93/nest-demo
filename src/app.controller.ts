import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Item } from './entity/item.entity';
// import { CreateItemDto } from './dto/item.dto';

@Controller('item')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllItems(@Query('exclude') query: string): Promise<Item[]> {
    if (query) {
      return this.appService.getAllExclude(query);
    }
    return this.appService.getAll();
  }

  @Post()
  addItem(@Body() body: Item): Item {
    return this.appService.createItem(body);
  }
}
