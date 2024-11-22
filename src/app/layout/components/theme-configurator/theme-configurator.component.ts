import { Component, OnInit } from '@angular/core';
import { NgForOf, NgStyle, NgClass } from '@angular/common';
import { ColorModel } from './theme-configurator.models';
import {
  PrimaryColor,
  SurfaceColor,
  LayoutService,
  ColorScheme,
  ThemePresetName,
} from '../../services';
import { SelectButton } from 'primeng/selectbutton';
import {
  SelectButtonOption,
  SelectButtonChangeTypedEvent,
} from '@common/types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-theme-configurator',
  standalone: true,
  imports: [NgForOf, NgStyle, NgClass, SelectButton, FormsModule],
  templateUrl: './theme-configurator.component.html',
  styleUrl: './theme-configurator.component.scss',
})
export class ThemeConfiguratorComponent implements OnInit {
  primaryColors!: ColorModel<PrimaryColor>[];
  surfaceColors!: ColorModel<SurfaceColor>[];

  presetOptions!: SelectButtonOption[];
  selectedPreset!: SelectButtonOption;

  constructor(private readonly layoutService: LayoutService) {}

  get selectedPrimaryColor(): PrimaryColor {
    return this.layoutService.primaryColor;
  }

  get selectedLightSurfaceColor(): SurfaceColor {
    return this.layoutService.lightSurfaceColor;
  }

  get selectedDarkSurfaceColor(): SurfaceColor {
    return this.layoutService.darkSurfaceColor;
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

    this.presetOptions = Object.values(ThemePresetName).map((label) => ({
      label,
    }));
    this.selectedPreset = {
      label: this.layoutService.presetName,
    };
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

  updatePreset(event: SelectButtonChangeTypedEvent<ThemePresetName>): void {
    if (event.value?.label) {
      this.layoutService.updatePreset(event.value.label);
    }
  }
}
