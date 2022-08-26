import { stringToLyrics } from "./string-to-lyrics.ts";
import { assertEquals } from "./deps.ts";

export const placeholderLyrics = `This was a triumph
I'm making a note here, HUGE SUCCESS
It's hard to overstate my satisfaction
`;

Deno.test("stringToLyrics", () => {
  assertEquals(stringToLyrics(placeholderLyrics), [
    { duration: 0, newVerse: true, originalIndex: 0, time: 0, word: "" },
    { duration: 0, newVerse: false, originalIndex: 1, time: 0, word: "This" },
    { duration: 0, newVerse: false, originalIndex: 2, time: 0, word: "was" },
    { duration: 0, newVerse: false, originalIndex: 3, time: 0, word: "a" },
    {
      duration: 0,
      newVerse: false,
      originalIndex: 4,
      time: 0,
      word: "triumph",
    },
    { duration: 0, newVerse: true, originalIndex: 5, time: 0, word: "" },
    { duration: 0, newVerse: false, originalIndex: 6, time: 0, word: "I'm" },
    { duration: 0, newVerse: false, originalIndex: 7, time: 0, word: "making" },
    { duration: 0, newVerse: false, originalIndex: 8, time: 0, word: "a" },
    { duration: 0, newVerse: false, originalIndex: 9, time: 0, word: "note" },
    { duration: 0, newVerse: false, originalIndex: 10, time: 0, word: "here," },
    { duration: 0, newVerse: false, originalIndex: 11, time: 0, word: "HUGE" },
    {
      duration: 0,
      newVerse: false,
      originalIndex: 12,
      time: 0,
      word: "SUCCESS",
    },
    { duration: 0, newVerse: true, originalIndex: 13, time: 0, word: "" },
    { duration: 0, newVerse: false, originalIndex: 14, time: 0, word: "It's" },
    { duration: 0, newVerse: false, originalIndex: 15, time: 0, word: "hard" },
    { duration: 0, newVerse: false, originalIndex: 16, time: 0, word: "to" },
    {
      duration: 0,
      newVerse: false,
      originalIndex: 17,
      time: 0,
      word: "overstate",
    },
    { duration: 0, newVerse: false, originalIndex: 18, time: 0, word: "my" },
    {
      duration: 0,
      newVerse: false,
      originalIndex: 19,
      time: 0,
      word: "satisfaction",
    },
    { duration: 0, newVerse: true, originalIndex: 20, time: 0, word: "" },
    { duration: 0, newVerse: false, originalIndex: 21, time: 0, word: "" },
  ]);
});
