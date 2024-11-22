let people=[
    {
      name:"vinita",
      age:30
    },
    {
      name:"raj",
      age:38
    },
    {
      name:"vinit",
      age:12
    }
    ];
    
    function calculateAverageAge(people){
      let totalsum=0;
     people.forEach(function(person) {
       totalsum+=person.age
    })
    let averageage=totalsum/people.length;
    return averageage;
    
    }
    
    let b=[
      {
        name:"vinita",
        age:20
      },
      {
        name:"vini",
        age:65
      },
      {
        name:"sam",
        age:21
      }
      ];
      console.log(calculateAverageAge(b));