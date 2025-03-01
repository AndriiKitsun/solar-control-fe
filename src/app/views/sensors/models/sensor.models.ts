export interface SensorDataModel {
  createdAt: string;
  sensors: SensorModel[];
}

export interface SensorModel {
  name: string;
  voltage?: number;
  current?: number;
  power?: number;
  energy?: number;
  frequency?: number;
  powerFactor?: number;
  t1Energy?: number;
  t2Energy?: number;
  avgVoltage?: number;
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
