export function secondToMinuteString(second: number): string {
  return Math.floor(second / 60) + ":" + (second % 60).toFixed(2);
}
