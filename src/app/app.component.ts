import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LangService } from '@layout/services/lang/lang.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private readonly langService: LangService) {}

  ngOnInit(): void {
    document.documentElement.lang = LangService.getLang();

    void this.langService.getLangLoadEvent();
  }
}
