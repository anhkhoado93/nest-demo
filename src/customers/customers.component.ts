import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomerController {
  public customers = [
    {
      id: '1',
      name: 'Son',
    },
  ];
  constructor() {}

  @Get()
  getAllCustomer() {
    return this.customers;
  }
}
