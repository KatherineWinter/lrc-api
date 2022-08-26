import { parseLrcHeader } from "./parse-lrc-header.ts";
import { Lrc } from "./lrc.ts";
import { time } from "./time.ts";

export function parseLrc(rawLrc: string): Lrc {
  const headers = parseLrcHeader(rawLrc);
  const rawLrcLines = rawLrc.split(/[\r\n]/);
  let iLrcLine = headers.endOnLine;

  const RegexResultIndex = {
    Original: 0,
    Key: 1,
    Value: 2,
  };

  // eslint-disable-next-line
  const verseRegex = /(\[[0-9.:\[\]]*\])+(.*)/;
  // eslint-disable-next-line
  const verseTimeRegex = /\[(\d{2,})\:(\d{2})(?:\.(\d{2,3}))?\]/;
  // eslint-disable-next-line
  const wordTimeRegex = /\<(\d{2,})\:(\d{2})(?:\.(\d{2,3}))?\>/;
  let lyrics = [];
  let originalIndex = 0;

  for (; iLrcLine < rawLrcLines.length; ++iLrcLine) {
    // handle lrc
    const lrcVerse = verseRegex.exec(rawLrcLines[iLrcLine]);
    if (lrcVerse && lrcVerse[RegexResultIndex.Original]) {
      const verseTimes = time(verseTimeRegex, lrcVerse[RegexResultIndex.Key]);
      if (verseTimes === null) {
        continue;
      }

      originalIndex += 1;
      lyrics.push({
        newVerse: true,
        word: " ",
        time: verseTimes,
        duration: 0,
        originalIndex,
      });

      const words = lrcVerse[RegexResultIndex.Value].split(" ");
      for (let iWord = 0; iWord < words.length; ++iWord) {
        const wordTime = time(wordTimeRegex, words[iWord]);
        if (!wordTime) {
          continue;
        }

        originalIndex += 1;
        lyrics.push({
          newVerse: false,
          word: words[iWord + 1],
          time: wordTime,
          duration: 0,
          originalIndex,
        });

        ++iWord;
      }
    }
  }

  return {
    lyrics,
    tags: headers.tags,
  };
}
