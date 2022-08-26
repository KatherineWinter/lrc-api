import { Tags } from "./tags.ts";

export class TagFileInfo {
  tags: Tags | undefined;
  // The line number the tags finished on. Used for optimizing
  // parsing through the lrc file.
  endOnLine: number = -1;
}

export function parseLrcHeader(rawLrc: string): TagFileInfo {
  const tagRegex = /\[([a-z]+):(.*)\].*/;
  const rawLrcLines = rawLrc.split(/[\r\n]/);
  let iLrcLine = 0;
  let tags = new Tags();

  for (; iLrcLine < rawLrcLines.length; ++iLrcLine) {
    const tag = tagRegex.exec(rawLrcLines[iLrcLine]);
    console.log("tag", tag);
    if (tag && tag[0]) {
      tags[tag[1]] = tag[2];
    } else {
      break;
    }
  }

  return { tags, endOnLine: iLrcLine };
}
