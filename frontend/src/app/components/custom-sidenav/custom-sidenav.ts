import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export type ViewKey = 'dashboard' | 'charts' | 'tables';

export type MenuItem = {
  icon: string;
  label: string;
  key: ViewKey;
};

@Component({
  selector: 'app-custom-sidenav',
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './custom-sidenav.html',
  styleUrl: './custom-sidenav.scss',
})
export class CustomSidenav {
  sideNavCollapsed = signal(false);

  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  @Input({ required: true }) activeKey!: ViewKey;
  @Output() select = new EventEmitter<ViewKey>();

  iconMargin = computed(() => (this.sideNavCollapsed() ? '12px' : '16px'));

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      key: 'dashboard',
    },
    {
      icon: 'dashboard',
      label: 'charts',
      key: 'charts',
    },
    {
      icon: 'dashboard',
      label: 'tables',
      key: 'tables',
    },
  ]);
}
