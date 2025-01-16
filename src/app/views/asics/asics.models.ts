export interface AsicModel {
  id: string;
  ip: string;
  address: string;
  hostname: string;
}

export interface AddAsicModel extends Partial<AsicModel> {
  password: string;
}
