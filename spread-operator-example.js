//Ex1
const cars1 = ['AUDI', 'BMW', 'TOYOTA'];
const cars2 = [...cars1];
const cars3 = [...cars1, 'NISSAN', 'ROLLROYCE'];
console.log(cars1);
console.log(cars2);
console.log(cars3);
//Ex2
const car1 = ['AUDI', 'BMW', 'TOYOTA'];
const car2 = ['NISSAN', 'ROLROYCE'];
const car3 = [...car1, ...car2];
console.log(car1);
console.log(car2);
console.log(car3);
//Ex3
const carss1 = {
    Brand: 'NEWSEVEN',
    Style: 'Hoodie'
}
const carss2 = {...carss1};
console.log(carss1);
console.log(carss2);
//Ex4
const car01 = {
    Name: 'KIA',
    Color: 'Black'
}
const car02 = {
    Name: 'HONDA',
    Color: 'Grey',
    Version: 'Luxuly'
}
const car03 = {...car01, ...car02};
console.log(car01);
console.log(car02);
console.log(car03);
//Ex5
const car11 = 'AUDI';
const car22 = [...car11];
console.log(...car22);
//Ex6
const number = [1, 2, 3, 4, 5];
const [a, b, c, ...others] = number;
console.log(a);
console.log(b);
console.log(c);
console.log(others);