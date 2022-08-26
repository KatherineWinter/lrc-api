import { timestampString } from "./timestamp-string.ts";
import { Lyric } from "./lyric.ts";

export function lyricsToStringArray(lyrics: Array<Lyric>): string[] {
  return lyrics.map((lyric: Lyric) => {
    const timestampStr = timestampString(lyric.time);
    return lyric.newVerse
      ? `\n[${timestampStr}] `
      : `<${timestampStr}> ${lyric.word} `;
  });
}
