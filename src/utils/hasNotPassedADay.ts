export default function isWithinTwoDays(inputDate: Date): boolean {
  const now = new Date();
  const twoDaysInMilliseconds = 2 * 24 * 60 * 60 * 1000;

  const timeDifference = now.getTime() - inputDate.getTime();

  const isWithinTwoDays = Math.abs(timeDifference) <= twoDaysInMilliseconds;

  return isWithinTwoDays;
}
