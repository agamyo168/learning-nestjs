import { Module } from '@nestjs/common';
import { UsersModule } from './users/user.module';
import { OrdersModule } from './orders/orders.module';
@Module({
  imports: [UsersModule, OrdersModule],
})
export class AppModule {}
