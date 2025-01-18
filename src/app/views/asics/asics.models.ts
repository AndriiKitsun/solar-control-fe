export interface AsicModel {
  id: string;
  ip: string;
  address: string;
  hostname: string;
}

export interface AddAsicModel {
  ip: string;
  address: string;
  password: string;
}

export type AsicState =
  | 'mining'
  | 'initializing'
  | 'starting'
  | 'auto-tuning'
  | 'restarting'
  | 'shutting-down'
  | 'stopped'
  | 'failure';

export interface AsicSummaryModel {
  hostname: string;
  ip: string;
  status: {
    state: AsicState;
    stateTimeDays: number;
    stateTimeHours: number;
    stateTimeMinutes: number;
  };
  avgHashRate: number;
  maxChipTemp: number;
  powerConsumption: number;
  avgFanSpeed: number;
  currentPreset?: string;
}
