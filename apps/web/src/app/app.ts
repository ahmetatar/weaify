import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingScreen } from '@weaify/web-shared-components';
import { DietPlannerStore } from './diet-feature';

@Component({
  imports: [RouterOutlet, LoadingScreen],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class App {
  //TODO: create a more centralized loading service
  isLoading = inject(DietPlannerStore).isLoading;
}
