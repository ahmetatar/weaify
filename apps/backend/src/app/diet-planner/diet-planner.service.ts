import { Injectable } from '@nestjs/common';
import { UserInputContract } from '@weaify/shared-types';
import { GoogleGenAI } from '@google/genai';
import { generatePrompt, normalizeResponse } from './diet-planner.helpers';

@Injectable()
export class DietPlannerService {
  private readonly ai: GoogleGenAI = new GoogleGenAI({});

  /**
   * Generate a diet plan based on user input
   *
   * @param userInput UserInputContract
   * @returns DietPlanContract
   */
  async generateDietPlan(userInput: UserInputContract) {
    const content = generatePrompt(userInput);

    const response = await this.ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [content],
      config: {
        systemInstruction: 'You are a professional dietitian',
        responseMimeType: 'application/json',
      },
    });

    const objResponse = JSON.parse(response.text);
    return normalizeResponse(objResponse);
  }
}
