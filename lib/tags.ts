// Reference: https://en.wikipedia.org/wiki/LRC_(file_format)
function tag(attr: string, value: any): string {
  if (!value) {
    return "";
  }
  return `[${attr}:${value}]\n`;
}

export function tagsToString(tags: Tags): string {
  return (
    tag("ar", tags.ar) +
    tag("al", tags.al) +
    tag("au", tags.au) +
    tag("length", tags.length) +
    tag("by", tags.by) +
    tag("ti", tags.ti) +
    tag("ve", tags.ve)
  );
}

export class Tags {
  // Lyrics artist
  ar: string = "";
  // al: Album where the song is from
  al: string = "";
  // ti: Lyrics (song) title
  ti: string = "";
  // au: Creator of the Songtext
  au: string = "";
  // length: How long the song is
  length: string = "";
  // by: Creator of the LRC file
  by: string = "";
  // re: The player or editor that created the LRC file
  re: string = "";
  // ve: version of program
  ve: string = "";
  // offset: +/- Overall timestamp adjustment in milliseconds, + shifts time up, - shifts down
  offset: number = 0;
  // Allow property indexing
  [index: string]: any
}
