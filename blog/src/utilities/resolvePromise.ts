export const resolvePromises = async <T>(promises: Promise<T>[]) => {
  const resolved = await Promise.allSettled(promises);

  return resolved.filter((r) => r.status === "fulfilled").map((r) => r.value);
}