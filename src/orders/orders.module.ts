import { Module } from '@nestjs/common';
import { OrdersController } from './presentation/orders/orders.controller';
import { OrderService } from './application/order/order.service';

@Module({
  controllers: [OrdersController],
  providers: [OrderService]
})
export class OrdersModule {}
