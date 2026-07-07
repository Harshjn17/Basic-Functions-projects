let student = {
  name: "Rahul",
  marks: [78, 85, 92, 66, 88]
};

function totalMarks(student) {
  let total = 0;
  for(let i = 0; i <= student.marks.length-1; i++){
    total += student.marks[i];
  }
  return total;
}

function average(student){;
  let length = student.marks.length;
  let avg = totalMarks(student) / length;
  
  return avg;
}

function highestMarks(student){
  let max = student.marks[0];
  
  for(let i = 1; i < student.marks.length; i++){
    if(student.marks[i] > max) max = student.marks[i];
    // 85 > 78
  }
  return max
}

function lowestMarks(student){
  let min = student.marks[0];
  
  for(let i = 1; i < student.marks.length; i++){
    if(student.marks[i] < min) min = student.marks[i];
  }
  return min;
}

function grade(student){
  let avg = average(student);
  if(avg >= 90) return "A";
  else if(avg >= 80 && avg <= 89) return "B";
  else if(avg >= 70 && avg <= 79) return "C";
  else if(avg >= 60 && avg <= 69) return "D";
  else if(avg < 60) return "F";
  else return "Invalid";
}

function printReport(student){
  console.log("----- Student Report -----");
  console.log(`Name: ${student.name}`);
  console.log(`Total Marks: ${totalMarks(student)}`);
  console.log(`Average Marks: ${average(student)}`);
  console.log(`Highest Marks: ${highestMarks(student)}`);
  console.log(`Lowest Marks: ${lowestMarks(student)}`);
  console.log(`Grade Obtained: ${grade(student)}`);
}

printReport(student);

// Output

// ----- Student Report -----
// Name: Rahul
// Total Marks: 409
// Average Marks: 81.8
// Highest Marks: 92
// Lowest Marks: 66
// Grade Obtained: B
