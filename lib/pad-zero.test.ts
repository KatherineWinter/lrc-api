import { padZero } from "./pad-zero.ts";
import { assertEquals } from "./deps.ts";

Deno.test("padZero", () => {
  assertEquals(padZero("4.2"), "04.2");
});
