import { Module } from '@nestjs/common';
import { CustomerController } from './customers.component';
@Module({
  controllers: [CustomerController],
})
export class CustomersModule {}
