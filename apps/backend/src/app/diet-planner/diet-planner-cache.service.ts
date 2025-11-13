import { CachedContent, GoogleGenAI } from '@google/genai';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DietPlannerAICacheService {
  private cache: CachedContent;
  private readonly ai: GoogleGenAI = new GoogleGenAI({});

  async initialize() {
    this.cache = await this.ai.caches.create({
      model: 'gemini-2.5-flash-001',
      config: {
        contents: [],
        systemInstruction: 'You are a professional dietitian',
        ttl: '3600s',
      },
    });
  }

  get cacheName() {
    return this.cache ? this.cache.name : '';
  }
}
