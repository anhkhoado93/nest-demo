import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './entity/item.entity';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/item.dto';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class AppService {
  constructor(@InjectRepository(Item) private itemModel: Repository<Item>) {}

  createItem(newItem: CreateItemDto): Promise<Item> {
    const item = this.itemModel.create(newItem);
    return item.save();
  }

  getAll(): Promise<Item[]> {
    return this.itemModel.find();
  }
}
