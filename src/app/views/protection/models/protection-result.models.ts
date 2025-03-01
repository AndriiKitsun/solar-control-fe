import { ProtectionRuleId } from '../enums/protection.enums';

export interface ProtectionResultModel {
  triggered: boolean;
  rules: Record<ProtectionRuleId, boolean>;
}
