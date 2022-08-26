export function timestampStrToSeconds(timestampStr: string): number {
  // split time at the colons
  const a = timestampStr.split(":");
  // Hours are worth 60 minutes.
  // Minutes are worth 60 seconds.
  return +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
}
