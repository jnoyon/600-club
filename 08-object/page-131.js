// Chapter Eight (Object) : Page No 131
// Total Practice: (This File: 8, Total: 184 + 8 = 182)

const player = {
    name: 'Kohli',
    sports: 'Cricket',
    team: 'India',
    age: 36
}
console.log(player.team)

const laptop = {
    brand: 'HP',
    hardDisk: '128GB',
    ram: '8GB',
    price: 32000,
    screenSize: 14.1
}
console.log(laptop.screenSize)

const favPlace = {
    name : "Cox's Bazar",
    distance: '400km',
    popularity: "high"
}
console.log(favPlace['popularity'])

const phone = {
    brand: 'Nokia',
    color: 'Black',
    price: 5000,
}
console.log(phone['price'])

const library = {
    name : 'Public Library',
    location: 'Dhaka',
    books: 5000
}
console.log(library.location)

const movie = {
    title : 'Inception',
    director: 'Nolan',
    rating: 9
}
console.log(movie.rating)

const college = {
    name: 'ndc',
    established: 1979,
    group: ['Science', 'Arts', 'Commerce']
}
console.log(college.group[1])

const family = {
    father: {
        name : 'Anowar Hosen',
        occupation: 'Died 2012',
        age: 60
    },
    mother: {
        name: 'Fatema',
        age: 54,
        occupation: 'Homemaker'
    }
}
console.log(family.father.age + family.mother.age)