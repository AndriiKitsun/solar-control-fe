import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LangService } from '@layout/services/lang/lang.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    document.documentElement.lang = LangService.getLang();
  }
}
