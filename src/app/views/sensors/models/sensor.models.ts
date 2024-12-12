export interface SensorModel {
  id: string;
  createdAtGmt: string;
  pzems: PzemModel[];
}

export interface PzemModel {
  id: string;
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
