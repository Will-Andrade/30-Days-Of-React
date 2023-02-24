let emptyArr = [];
let array = [1, 2, 3, 4, 5, 15, 885, 221, 28, 14];
const mixedDataTypes = [
  0,
  'Hello World',
  () => {},
  {
    game: 'Resident Evil'
  },
  ['very nice', 'Global Industries'],
  {
    "[]": 22
  }
];

let itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
];

// console.log(`Array length: ${array.length}`);

// console.log (`First Item: ${array[0]}; Middle Item: ${array[Math.floor(array.length / 2)]}; Last Item: ${array[array.length - 1]}`);

// console.log(`mixedDataTypes arr and length: ${mixedDataTypes} - ${mixedDataTypes.length}`);

// console.log(`IT Companies: ${itCompanies}`);

// console.log(`Number of companies: ${itCompanies.length}`);

// console.log(`First company: ${itCompanies[0]}; Middle company: ${itCompanies[Math.floor(itCompanies.length / 2)]}; Last company: ${itCompanies[itCompanies.length - 1]}`);

// itCompanies.forEach((company, index) => console.log(`${index + 1}º company: ${company}`));

// for (let i = 0; i < itCompanies.length; i++) {
//   itCompanies[i] = itCompanies[i].toUpperCase();
// }

// console.log(itCompanies);

// console.log(itCompanies.join(', ').replace(', Amazon', ' and Amazon are big IT companies.'));

// let company = itCompanies.indexOf('Netflix');
// let companyExists = company < 0 ? 'Company not found' : itCompanies[company];
// console.log(companyExists);

// for (const company of itCompanies) {
//   const splitCompanyName = company.split('');
//   let repetition = 0;

//   for (const letter of splitCompanyName) {
//     if (letter === 'o') {
//       repetition += 1
//     }
//   }

//   if (company && repetition >= 2) itCompanies.splice(company, 1) 
// }
// console.log(itCompanies);

// console.log(itCompanies.sort());

// console.log(itCompanies.reverse());

// console.log(itCompanies.slice(0, 3));

// console.log(itCompanies.slice(-3));

// console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2) + 1));

// itCompanies.shift()
// console.log(itCompanies);

// itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
// console.log(itCompanies);

// itCompanies.pop();
// console.log(itCompanies);

// itCompanies.length = 0
// console.log(itCompanies);
