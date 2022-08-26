import { addDuration } from "./add-duration.ts";
import { assertEquals } from "./deps.ts";

const placeholderLyrics = [
  {
    word: " ",
    time: 0.0,
    newVerse: true,
    duration: undefined,
    originalIndex: -1,
  },
  {
    word: "This",
    time: 0.2,
    newVerse: false,
    duration: undefined,
    originalIndex: -1,
  },
  {
    word: "was",
    time: 0.5,
    newVerse: false,
    duration: undefined,
    originalIndex: -1,
  },
  {
    word: "a",
    time: 0.7,
    newVerse: false,
    duration: undefined,
    originalIndex: -1,
  },
];

Deno.test("addDuration", () => {
  assertEquals(addDuration(placeholderLyrics).map((lyric) => lyric.duration), [
    0.2,
    0.3,
    0.19999999999999996,
    1,
  ]);
});
