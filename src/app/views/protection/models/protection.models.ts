import { ProtectionGroupId } from '../components/protection/protection.constants';

export interface ProtectionGroupModel {
  id: ProtectionGroupId;
  minInputId: string;
  maxInputId: string;
  label: string;
  input: ProtectionInputModel;
}

export interface ProtectionInputModel {
  min: number;
  max: number;
  step: number;
  suffix: string;
  fractionDigits: number;
}
