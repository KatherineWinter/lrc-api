import { padZero } from "./pad-zero.ts";

export function timestampString(timestamp: number): string {
  const wtf = padZero(Math.floor(timestamp / 60).toString());
  const wtf2 = padZero((timestamp % 60).toFixed(2));
  return `${wtf}:${wtf2}`;
}
