import { Lyric } from "./lyric.ts";
import { lyricsToStringArray } from "./lyrics-to-string-array.ts";
import { Tags, tagsToString } from "./tags.ts";

export function lrcToString(lrc: Lrc): string {
  let verses = [];
  let verseWords = [];
  const stringLyrics = lyricsToStringArray(lrc.lyrics);
  for (const lyric of stringLyrics) {
    if (lyric.includes("\n")) {
      verses.push(verseWords);
      verseWords = [];
    }

    verseWords.push(lyric);
  }

  // Add remaining words
  verses.push(verseWords);

  return (
    lrc.tags ? tagsToString(lrc.tags) : "" +
      verses.map((verse) => `\n${verse.join("").replace("\n", "")}`).join("")
  );
}

export class Lrc {
  lyrics: Array<Lyric> = [];
  tags: Tags | undefined;
}
