function calculateSGPA(semesterData: any) {
  const gradePointMapping = {
    O: 10,
    A: 9,
    B: 8,
    C: 7,
    D: 6,
    F: 0,
  } as { [key: string]: number };

  let totalCredits = 0;
  let totalWeightedGradePoints = 0;

  for (const subjectCode in semesterData) {
    const subject = semesterData[subjectCode];
    const grade = subject.subject_grade;
    if (grade === "F") {
      return "AALU";
    }
    const credit = parseInt(subject.subject_credits);

    totalCredits += credit;
    totalWeightedGradePoints += gradePointMapping[grade] * credit;
  }

  // Calculate SGPA for the semester
  let sgpa = totalWeightedGradePoints / totalCredits;

  // Round SGPA to two decimal places
  return sgpa.toFixed(2);
}

export default calculateSGPA;
