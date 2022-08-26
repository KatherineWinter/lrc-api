import { Verse } from "./verse.ts";

export function findVerseFromLyricIndex(
  verses: Array<Verse>,
  lyricIndex: number,
) {
  return verses.find((verseElement: Verse) => {
    for (
      let iLyric = 0, lyricCount = verseElement.lyrics.length;
      iLyric < lyricCount;
      ++iLyric
    ) {
      if (verseElement.lyrics[iLyric].originalIndex === lyricIndex) return true;
    }

    return false;
  });
}
