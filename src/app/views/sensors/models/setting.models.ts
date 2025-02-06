export interface SettingsModel {
  id: string;
  t1EnergyCcyPrice: number;
  t2EnergyCcyPrice: number;
}

export type UpdateSettingsModel = Partial<Omit<SettingsModel, 'id'>>;
