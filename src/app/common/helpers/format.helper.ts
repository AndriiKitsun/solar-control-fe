import { formatNumber } from '@angular/common';

export const NEAREST_INT = '1.0-0';
export const ONE_DIGIT = '1.1-1';
export const TWO_DIGIT = '1.2-2';
export const THREE_DIGITS = '1.3-3';

/**
 *
 * @param value The number to format.
 * @param digitsInfo Decimal representation options, specified by a string in the following format:
 * `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}`.
 *
 * @returns The formatted text string.
 * @see [Angular source](https://github.com/angular/angular/blob/main/packages/common/src/i18n/format_number.ts)
 */
export function formatNum(
  value: number | undefined | null,
  digitsInfo: string,
): string {
  if (value === null || value === undefined) {
    return '';
  }

  return formatNumber(value, 'en-US', digitsInfo);
}
