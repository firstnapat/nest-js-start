import { Order, OrderSchema } from './schemas/order.schema';
import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { ProductsModule } from './../products/products.module';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Order.name,
        schema: OrderSchema 
      },
    ]),
    ProductsModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
