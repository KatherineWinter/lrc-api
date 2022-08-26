export function time(regex: any, target: string): number | null {
  const timeStr = regex.exec(target);
  if (!timeStr) {
    return null;
  }
  return (
    (parseInt(timeStr[1]) * 60 * 1000 +
      parseInt(timeStr[2]) * 1000 +
      (parseInt(timeStr[3]) * 10 || 0)) *
    0.001
  );
}
