export function splitHt(ht: string): string[] {
  const htnosArray = ht.split(",");
  const chunks: string[] = [];
  const chunksize = 10;
  for (let i = 0; i < htnosArray.length; i += chunksize) {
    chunks.push(htnosArray.slice(i, i + chunksize).join(","));
  }
  return chunks;
}
