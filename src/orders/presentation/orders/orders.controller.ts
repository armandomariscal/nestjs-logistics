import { Controller, Post, Body } from '@nestjs/common';

@Controller('orders')
export class OrdersController {

  @Post()
  createOrder(@Body() body: any) {

    return {
      id: 1,
      status: 'CREATED',
      customer_name: body.customer_name
    };

  }

}
