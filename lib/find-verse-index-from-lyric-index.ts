import { Verse } from "./verse.ts";

export function findVerseIndexFromLyricIndex(
  verses: Array<Verse>,
  index: number,
) {
  return verses.findIndex((verse: Verse) => {
    for (
      let iLyric = 0, lyricCount = verse.lyrics.length;
      iLyric < lyricCount;
      ++iLyric
    ) {
      if (verse.lyrics[iLyric].originalIndex === index) {
        return true;
      }
    }

    return false;
  });
}
