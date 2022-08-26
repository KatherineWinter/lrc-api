import { lyricsToStringArray } from "./lyrics-to-string-array.ts";
import { assertEquals } from "./deps.ts";

const lyrics = [
  { word: " ", time: 0.0, newVerse: true, originalIndex: 0, duration: 1 },
  { word: "This", time: 0.2, newVerse: false, originalIndex: 1, duration: 1 },
  { word: "was", time: 0.5, newVerse: false, originalIndex: 2, duration: 1 },
  { word: "a", time: 0.7, newVerse: false, originalIndex: 3, duration: 1 },
];

Deno.test("lyricsToStringArray", () => {
  assertEquals(lyricsToStringArray(lyrics), [
    "\n[00:00.00] ",
    "<00:00.20> This ",
    "<00:00.50> was ",
    "<00:00.70> a ",
  ]);
});
