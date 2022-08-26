import { Lyric } from "./lyric.ts";

// Returns a remapped version of passed in array with durations filled out.
export function addDuration(lyrics: Array<Lyric>): Array<Lyric> {
  const DEFAULT_DURATION = 1;
  return lyrics.map((lyric, index) => {
    const isLastIndex = index === lyrics.length - 1;
    lyric.duration = isLastIndex
      ? DEFAULT_DURATION
      : lyrics[index + 1].time - lyrics[index].time;
    return lyric;
  });
}
