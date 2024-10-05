export function generateHTnos(baseht: string, s: string): string {
  const insertAtPos = 4;
  const htreg = baseht.slice(0, insertAtPos) + "1" + baseht.slice(insertAtPos);

  const rollno = [];

  for (let i = 0; i <= 99; i++) {
    rollno.push(i.toString().padStart(2, "0"));
  }
  const letters = "abcdefghijkl";
  for (const letter of letters) {
    for (let i = 0; i <= 9; i++) {
      rollno.push(letter + i);
    }
  }

  const htnos = rollno.map((roll) => htreg.toLowerCase() + roll);
  const year = Number(baseht.slice(0, 2));
  const yearle = year + 1;
  const htle =
    yearle.toString() +
    baseht.slice(2, insertAtPos) +
    "5" +
    baseht.slice(insertAtPos);

  {
    s == "1-1" || s == "1-2" || baseht[4] == "R"
      ? ""
      : htnos.push(...rollno.map((roll) => htle.toLowerCase() + roll));
  }

  return htnos.join(",");
}
