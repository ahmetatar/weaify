import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DietPlannerController } from './diet-planner.controller';
import { DietPlannerService } from './diet-planner.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [DietPlannerController],
  providers: [DietPlannerService],
})
export class DietPlannerModule {}
