import { Body, Controller, Post } from '@nestjs/common';
import { DietPlannerService } from './diet-planner.service';
import { UserInputDTO } from './diet-planner.dtos';

@Controller('diet-planner')
export class DietPlannerController {
  constructor(private readonly dietPlannerService: DietPlannerService) {}

  /**
   * Generate a diet plan based on user input
   *
   * @param userInput UserInputContract
   * @returns DietPlanContract
   */
  @Post()
  getDietPlan(@Body() userInput: UserInputDTO) {
    return this.dietPlannerService.generateDietPlan(userInput);
  }
}
