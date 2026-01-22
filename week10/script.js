let students = [
    { name: "Олег", age: 18, grade: 86 },
    { name: "Марія", age: 20, grade: 68 },
    { name: "Софія", age: 17, grade: 74 },
    { name: "Костя", age: 18, grade: 56 },
    { name: "Михайло", age: 21, grade: 96 }
];

for (let s of students) {
    console.log(`${s.name} (${s.age} років) - ${s.grade}`);
}

let bestStudent = students.reduce((max, s) => s.grade > max.grade ? s : max);
console.log(`\Найвища оцінка: ${bestStudent.name} (${bestStudent.grade})`);

let avgGrade = students.reduce((sum, s) => sum + s.grade, 0) / students.length;
console.log(`\Середня оцінка: ${avgGrade.toFixed(1)}`);