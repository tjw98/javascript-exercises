const findTheOldest = function(people) {
  // Get todays year for people still alive
  let currentYear = new Date().getFullYear();

  // Assigns current year to person if they are alive
  people.map((person) => {
    if (!person.hasOwnProperty("yearOfDeath")) {
      return person.yearOfDeath = currentYear
    }
  });
  
  people.sort((a, b) => {
    const aAge = a.yearOfDeath - a.yearOfBirth;
    const bAge = b.yearOfDeath - b.yearOfBirth;

    return aAge < bAge ? 1 : -1;
  });
  return people[0]
};

// Do not edit below this line
module.exports = findTheOldest;
