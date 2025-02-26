import { ProtectionRuleId } from '../enums/protection.enums';

export interface ProtectionRuleModel {
  id: ProtectionRuleId;
  min: number;
  max: number;
  enabled: boolean;
}
