function getLastNames(firstName, people) {

    return new Promise((resolve, reject) => {
        
        let newArr = people.filter(obj => obj.firstName == firstName);
        
        if(newArr.length == 0)
            reject("Invalid");
        else {
            resolve(newArr.map(obj => obj.lastName).sort());
        }
    })
}

firstName = 'David';
people = [
    {
        firstName: 'David',
        lastName: 'Dobrick'
    },
    {
        firstName: 'David',
        lastName: 'Beckham'
    },
    {
        firstName: 'Chris',
        lastName: 'Lee'
    },
    {
        firstName: 'James',
        lastName: 'Bond'
    },
];

console.log(getLastNames(firstName, people));
