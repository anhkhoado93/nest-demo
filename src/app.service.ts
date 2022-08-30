import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './entity/item.entity';
import { Repository } from 'typeorm';
// import { CreateItemDto } from './dto/item.dto';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class AppService {
  constructor(@InjectRepository(Item) private itemRepo: Repository<Item>) {}

  createItem(newItem: Item): Item {
    return this.itemRepo.create(newItem);
  }

  getAll(): Promise<Item[]> {
    return this.itemRepo.find();
  }
  getAllExclude(exclude: string): Promise<Item[]> {
    return this.itemRepo
      .createQueryBuilder('i')
      .where('i.name != :exclude', { exclude })
      .execute();
  }
}
