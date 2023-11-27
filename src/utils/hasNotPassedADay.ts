export default function hasNotPassedADay(inputDate: Date): boolean {
  const now = new Date();
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

  const timeDifference = now.getTime() - inputDate.getTime();

  const hasPassedADay = timeDifference > oneDayInMilliseconds;

  return hasPassedADay;
}
