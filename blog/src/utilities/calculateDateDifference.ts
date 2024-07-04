export const calculateDateDifference = (date: string) => {
  const now = new Date();
  const then = new Date(date);

  const diff = now.getTime() - then.getTime();

  const days = diff / (1000 * 60 * 60 * 24);

  return Math.round(days);
};