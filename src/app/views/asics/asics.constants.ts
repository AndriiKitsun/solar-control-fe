const IPv4SegmentFormat =
  '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
const IPv4AddressFormat = `(${IPv4SegmentFormat}[.]){3}${IPv4SegmentFormat}`;
export const IPv4AddressRegExpPattern = `^${IPv4AddressFormat}$`;

export const ASIC_SUMMARY_UPDATE_INTERVAL = 5_000;
