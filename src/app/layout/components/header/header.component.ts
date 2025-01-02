import { Component, OnInit } from '@angular/core';
import { Ripple } from 'primeng/ripple';
import { ThemeConfiguratorComponent } from '../theme-configurator/theme-configurator.component';
import { StyleClass } from 'primeng/styleclass';
import { RouterLink } from '@angular/router';
import { PrimeIcons } from 'primeng/api';
import { Select } from 'primeng/select';
import {
  SelectChangeTypedEvent,
  SelectOption,
} from '@common/types/select.types';
import { LANG_SELECT_OPTIONS } from './header.constants';
import { FormsModule } from '@angular/forms';
import { ColorScheme } from '../../services/theme/theme.types';
import { Lang } from '@common/types/lang.types';
import { ThemeService } from '../../services/theme/theme.service';
import { LangService } from '../../services/lang/lang.service';

@Component({
  selector: 'app-header',
  imports: [
    Ripple,
    RouterLink,
    ThemeConfiguratorComponent,
    StyleClass,
    Select,
    FormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  themeIcons: Record<ColorScheme, PrimeIcons> = {
    [ColorScheme.LIGHT]: PrimeIcons.SUN,
    [ColorScheme.DARK]: PrimeIcons.MOON,
  };

  langOptions!: SelectOption<Lang>[];
  selectedLang?: SelectOption<Lang>;

  constructor(
    private readonly themeService: ThemeService,
    private readonly langService: LangService,
  ) {}

  ngOnInit(): void {
    const savedLang = LangService.getLang();

    this.langOptions = LANG_SELECT_OPTIONS;
    this.selectedLang = LANG_SELECT_OPTIONS.find(
      (option) => option.value === savedLang,
    );
  }

  get colorScheme(): ColorScheme {
    return this.themeService.colorScheme;
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }

  switchLang(event: SelectChangeTypedEvent<SelectOption>): void {
    this.langService.switchLang(event.value.value);
  }
}
