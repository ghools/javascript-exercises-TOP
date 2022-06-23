const findTheOldest = function(people) {
    function addAge(people){
        if(people.yearOfDeath === undefined || null){
          people.yearOfDeath = 2022;
        }
        people.age = people.yearOfDeath - people.yearOfBirth;
      }
      
      people.forEach(addAge);
      people.sort(function(a, b){
        return b.age - a.age; 
      })
      return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
