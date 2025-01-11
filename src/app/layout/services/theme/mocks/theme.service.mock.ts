import { ClassMock } from '@common/types/test.types';
import { ThemeService } from '../theme.service';
import {
  ThemePresetName,
  PrimaryColor,
  ColorScheme,
  SurfaceColor,
} from '../theme.types';

export class ThemeServiceMock implements ClassMock<ThemeService> {
  colorScheme: ColorScheme = ColorScheme.LIGHT;
  darkSurfaceColor: SurfaceColor = SurfaceColor.NEUTRAL;
  lightSurfaceColor: SurfaceColor = SurfaceColor.GRAY;
  presetName: ThemePresetName = ThemePresetName.LARA;
  primaryColor: PrimaryColor = PrimaryColor.AMBER;

  restoreThemeState(): void {}

  toggleDarkMode(): void {}

  updatePrimaryColor(color: PrimaryColor): void {}

  updateSurfaceColor(scheme: ColorScheme, color: SurfaceColor): void {}

  updatePreset(name: ThemePresetName): void {}
}
