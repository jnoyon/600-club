// Chapter Six (Array) : Page No 102
// Total Practice: (This File: 6, Total: 140 + 6 = 146)

const fruits = ['banana', 'mango', 'guava', 'orange']
if(fruits.includes('mango')){
    console.log('Mango Available')
}
else{
    console.log('Mango Not Available')
}

const names = ['babul', 'alif', 'choton']
console.log(names.indexOf('alif'));


const friends = ['rimon', 'rifat', 'rajib']
console.log(friends.indexOf('rifat'))

const cities = ['Dhaka', 'Chittagoan', 'Sylhet']
cities.push('rajshahi');
cities.includes('rajShahi')? console.log('Availabe') : console.log('Not Available')

const items = ['bristy', 'megh', 'dighi', 'barsha'];
items.includes('bristy')? console.log('I need Umbrealla') : console.log('No rain No pain');

const sports = ['football', 'cricket', 'ball']
sports.includes('badminton')? console.log('Badminton Available') : console.log('Badminton Not Available')