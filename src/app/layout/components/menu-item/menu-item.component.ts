import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [NgTemplateOutlet, RouterLink],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent implements OnInit {
  @Input({ required: true })
  item!: MenuItem;

  @Input()
  isTopLevel = true;

  ngOnInit(): void {
    console.log(`this.item -->`, this.item.label);
  }

  itemClicked(item: MenuItem): void {
    console.log(`item -->`, item);
  }
}
