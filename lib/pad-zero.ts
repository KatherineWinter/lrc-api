export function padZero(numAsStr: string, size: number = 2): string {
  while (numAsStr.split(".")[0].length < size) {
    numAsStr = "0" + numAsStr;
  }

  return numAsStr;
}
