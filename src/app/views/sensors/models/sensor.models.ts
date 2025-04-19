export interface SensorDataModel {
  createdAt: string;
  power: boolean;
  sensors: SensorModel[];
  pTriggered: boolean;
}

export interface SensorModel {
  name: string;
  voltage?: number;
  avgVoltage?: number;
  current?: number;
  power?: number;
  energy?: number;
  frequency?: number;
  avgFrequency?: number;
  powerFactor?: number;
  t1Energy?: number;
  t2Energy?: number;
}

export interface PzemCounter {
  name: string;
  isReset: boolean;
}

export interface PowerStatus {
  status: boolean;
}

export const enum SensorName {
  AC_INPUT = 'acInput',
  AC_OUTPUT = 'acOutput',
  DC_BATTERY = 'dcBattery',
}
