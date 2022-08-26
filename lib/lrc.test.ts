import { lrcToString } from "./lrc.ts";
import { assertEquals } from "./deps.ts";

const lrc = {
  lyrics: [
    { word: " ", time: 0.0, newVerse: true, originalIndex: 0, duration: 1 },
    { word: "This", time: 0.2, newVerse: false, originalIndex: 1, duration: 1 },
    { word: "was", time: 0.5, newVerse: false, originalIndex: 2, duration: 1 },
    { word: "a", time: 0.7, newVerse: false, originalIndex: 3, duration: 1 },
  ],
  tags: {
    ar: "Jonathan Coulton",
    al: "The Orange Box",
    ti: "Still Alive",
    au: "Jonathan Coulton",
    length: "3:04",
    by: "Katherine Winter",
    re: "LRC API",
    ve: "1",
    offset: 0,
  },
};

Deno.test("createLrc", () => {
  assertEquals(
    lrcToString(lrc),
    `[ar:Jonathan Coulton]
[al:The Orange Box]
[au:Jonathan Coulton]
[length:3:04]
[by:Katherine Winter]
[ti:Still Alive]
[ve:1]
`,
  );
});
