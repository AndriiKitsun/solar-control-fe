import { MenuItem } from 'primeng/api';
import { AsicModel } from './asics.models';

export interface AsicMenuItem extends MenuItem {
  asic?: AsicModel;
}

export interface ModifyAsicDialogData {
  isEditMode: boolean;
  addresses: string[];
  asic?: AsicModel;
}

export interface AsicSummaryGridItem {
  ip: string;
  state: {
    value: string;
    severity: string;
  };
  time: {
    days: number;
    hours: number;
    minutes: number;
  };
  avgHashRate: string;
  maxChipTemp: string;
  powerConsumption: string;
  avgFanSpeed: string;
}
