import { Lyric } from "./lyric.ts";

// Takes raw lyrics and returns an array of lyric objects
export function stringToLyrics(str: string): Array<Lyric> {
  const words = str.replace(/(\r\n|\n|\r)/gm, " \n").split(" ");
  let newLyrics: Array<Lyric> = [];
  let originalIndex = 0;
  newLyrics.push({
    word: "",
    time: 0,
    duration: 0,
    newVerse: true,
    originalIndex,
  });

  for (let i = 0; i < words.length; ++i) {
    const word = words[i];
    if (word.includes("\n")) {
      originalIndex += 1;
      newLyrics.push({
        word: "",
        time: 0,
        duration: 0,
        newVerse: true,
        originalIndex,
      });
    }

    originalIndex += 1;
    newLyrics.push({
      word: word.replace("\n", ""),
      time: 0,
      duration: 0,
      newVerse: false,
      originalIndex,
    });
  }

  return newLyrics;
}
