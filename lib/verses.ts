import { Lyric } from "./lyric.ts";

export function verses(lyrics: Array<Lyric>, isNewVerseFirst: boolean = true) {
  let allVerses = [];
  let currentVerse = [];
  for (let i = 0; i < lyrics.length; ++i) {
    if (isNewVerseFirst && i > 0 && lyrics[i].newVerse) {
      allVerses.push(currentVerse);
      currentVerse = [];
    }

    currentVerse.push({
      ...lyrics[i],
      ...{
        originalIndex: i,
      },
    });

    if (!isNewVerseFirst && i > 0 && lyrics[i].newVerse) {
      allVerses.push(currentVerse);
      currentVerse = [];
    }
  }

  // Add the remaining song
  if (currentVerse.length) {
    allVerses.push(currentVerse);
  }

  return allVerses;
}
