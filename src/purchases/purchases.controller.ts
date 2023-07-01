import { Controller, Get, Post, Body } from '@nestjs/common';
import { Request } from 'express';

import { CreatePurchaseDto } from './dto/create.purchase.dto';

@Controller('purchases')
export class PurchaseController {
  @Get('all')
  getAllPurchases(): string[] {
    return ['coffee', 'bananas'];
  }

  @Get('to-do')
  getTodoPurchase(): string[] {
    return [
      'Сделать ServicePurchase',
      'Настроить валидацю запроса в PurchaseController',
    ];
  }

  @Post('create')
  async createPurchase(@Body() createPurchase: CreatePurchaseDto) {
    console.log(createPurchase);
  }
}
