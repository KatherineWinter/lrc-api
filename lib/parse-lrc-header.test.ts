import { parseLrcHeader } from "./parse-lrc-header.ts";
import { assertEquals } from "./deps.ts";

let rawLrc = "";

// describe('', () => {
//   // beforeAll((done) => {

//   //   // fs.readFile(path.join(__dirname, 'Mr_Brightside.lrc'), 'utf8', function (err,data) {
//   //   //   if (err) {
//   //   //     return console.error(err);
//   //   //   }
//   //   //   rawLrc = data
//   //   //   done()
//   //   // });
//   // })

// })

Deno.test("parseLrcHeader: default success", () => {
  assertEquals(parseLrcHeader(rawLrc), {});
});
