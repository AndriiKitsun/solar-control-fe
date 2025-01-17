export interface AsicModel {
  id: string;
  ip: string;
  address: string;
  hostname: string;
}

export interface AddAsicModel extends Partial<AsicModel> {
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
  state: AsicState;
  avgHashRate: number;
  maxChipTemp: number;
  powerConsumption: number;
  avgFanSpeed: number;
}
