export interface PzemDataModel {
  createdAtGmt: string;
  pzems: PzemModel[];
}

export interface PzemModel {
  name: string;
  voltageV?: number;
  currentA?: number;
  powerKw?: number;
  energyKwh?: number;
  frequencyHz?: number;
  powerFactor?: number;
  t1EnergyKwh?: number;
  t2EnergyKwh?: number;
  avgVoltageV?: number;
}

export interface PzemCounter {
  name: string;
  isReset: boolean;
}

export interface PzemPowerModel {
  status: boolean;
}
