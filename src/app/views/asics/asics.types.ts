import { MenuItem } from 'primeng/api';
import { AsicModel } from './asics.models';

export interface AsicMenuItem extends MenuItem {
  asic?: AsicModel;
}
