import { Module } from '@nestjs/common';
import { PurchaseController } from './purchases/purchases.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, PurchaseController],
  providers: [AppService],
})
export class AppModule {}
