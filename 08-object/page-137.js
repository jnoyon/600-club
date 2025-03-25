// Chapter Eight (Object) : Page No 137
// Total Practice: (This File: 9, Total: 184 + 9 = 193)

const book = {
    name: 'Mission Islam',
    author: 'Shamsul Arefin Shakti',
    price: 140
}
for(let key in book){
    const value = book[key];
    console.log(key, value);
}

const article = {
    title : 'Learning JavaScript',
    category : 'Programming'
}