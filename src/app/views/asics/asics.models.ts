export enum MinerType {
  CARD = 'card',
  ASIC = 'asic',
}

export interface AsicModel {
  id: string;
  name: string;
  type: MinerType;
  ipAddress?: string;
  address?: string;
}
