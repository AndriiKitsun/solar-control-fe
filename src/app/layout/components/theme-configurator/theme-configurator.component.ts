import { Component, OnInit } from '@angular/core';
import { NgForOf, NgStyle, NgClass } from '@angular/common';
import { ColorModel } from './theme-configurator.models';
import {
  PrimaryColor,
  SurfaceColor,
  LayoutService,
  ColorScheme,
} from '../../services';

@Component({
  selector: 'app-theme-configurator',
  standalone: true,
  imports: [NgForOf, NgStyle, NgClass],
  templateUrl: './theme-configurator.component.html',
  styleUrl: './theme-configurator.component.scss',
})
export class ThemeConfiguratorComponent implements OnInit {
  primaryColors: ColorModel<PrimaryColor>[] = [];
  surfaceColors: ColorModel<SurfaceColor>[] = [];

  constructor(private readonly layoutService: LayoutService) {}

  get selectedPrimaryColor(): PrimaryColor {
    return this.layoutService.primaryColor;
  }

  get selectedLightSurfaceColor(): SurfaceColor {
    return this.layoutService.surfaceColorConfig[ColorScheme.LIGHT];
  }

  get selectedDarkSurfaceColor(): SurfaceColor {
    return this.layoutService.surfaceColorConfig[ColorScheme.DARK];
  }

  ngOnInit(): void {
    this.primaryColors = Object.values(PrimaryColor).map((color) => ({
      color,
      bgColor: `var(--p-${color}-500)`,
    }));

    this.surfaceColors = Object.values(SurfaceColor).map((color) => ({
      color,
      bgColor: `var(--p-${color}-500)`,
    }));
  }

  updatePrimaryColor(color: PrimaryColor): void {
    this.layoutService.updatePrimaryColor(color);
  }

  updateLightSurfaceColor(color: SurfaceColor): void {
    this.layoutService.updateSurfaceColor(ColorScheme.LIGHT, color);
  }

  updateDarkSurfaceColor(color: SurfaceColor): void {
    this.layoutService.updateSurfaceColor(ColorScheme.DARK, color);
  }
}
