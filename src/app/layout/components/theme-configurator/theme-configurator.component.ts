import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgForOf, NgStyle, NgClass } from '@angular/common';
import { ColorModel } from './theme-configurator.models';
import { SelectButton } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { TranslocoDirective } from '@jsverse/transloco';
import {
  PrimaryColor,
  SurfaceColor,
  ThemePresetName,
  ColorScheme,
} from '../../services/theme/theme.types';
import {
  SimpleSelectOption,
  SelectButtonChangeTypedEvent,
} from '@common/types/select.types';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-theme-configurator',
  imports: [
    NgForOf,
    NgStyle,
    NgClass,
    SelectButton,
    FormsModule,
    TranslocoDirective,
  ],
  templateUrl: './theme-configurator.component.html',
  styleUrl: './theme-configurator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeConfiguratorComponent implements OnInit {
  primaryColors!: ColorModel<PrimaryColor>[];
  surfaceColors!: ColorModel<SurfaceColor>[];

  presetOptions!: SimpleSelectOption<ThemePresetName>[];
  selectedPreset!: SimpleSelectOption<ThemePresetName>;

  constructor(private readonly layoutService: ThemeService) {}

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

    this.presetOptions = Object.values(ThemePresetName).map((name) => ({
      label: name,
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

  updatePreset(
    event: SelectButtonChangeTypedEvent<SimpleSelectOption<ThemePresetName>>,
  ): void {
    this.layoutService.updatePreset(event.value!.label);
  }
}
