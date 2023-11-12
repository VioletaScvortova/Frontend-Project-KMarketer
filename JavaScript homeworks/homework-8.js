
// Task 1

  const student = () => ({
    name: 'John',
    lastName: 'Doe',
    faculty: 'history',
    year: 3
  });
  
  const { name, lastName, faculty, year } = student();
  
  const studentArray = [`${name} ${lastName}`, faculty, year];
  
  console.log(studentArray); // Output: ['John Doe', 'history', 3]


