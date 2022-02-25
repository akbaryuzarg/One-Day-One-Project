// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
   { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
   { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
   { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
   { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
   { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
   { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
   { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
   { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
   { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
   'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
   'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
   'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
   'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
   'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// Jadi filter akan melakukan fungsi yang akan mem filter sesuai dengan syarat yg telah dibuat di dalam fungsi ke setiap elemen yg ada di array
   const bornFilter = inventors.filter((inventor) => {
      if (inventor.year >= 1500 && inventor.year < 1600) {
         return true;
      }
   })
   console.table(bornFilter);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
   const fullName = inventors.map((inventor) => {
      return `${inventor.first} ${inventor.last}`
   })
   console.table(fullName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
   const sortAges = inventors.sort((firstPerson, secondPerson) => {
      if (firstPerson.year > secondPerson.year) {
         return 1;
      } else {
         return -1;
      };
   })
   console.table(sortAges);
   // if it returns a negative value, the value in a will be ordered before b.
   // if it returns 0, the ordering of a and b won’t change.
   // if it returns a positive value, the value in b will be ordered before a.

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
   const totalAges = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year);
   }, 0)
   console.log(totalAges);

// 5. Sort the inventors by years lived
   const sortLived = inventors.sort((a, b) => {
      const firstPerson = a.passed - a.year;
      const secondPerson = b.passed - b.year;
      return firstPerson < secondPerson ? -1 : 1; 
   })
   console.table(sortLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 7. sort Exercise
// Sort the people alphabetically by last name
   const sortLastName = people.sort((lastOne, nextOne) => {
      // fungsi [x, y] = menyimpan array yg udh displit jadi punya variabel masing2
      const [aLast, aFirst] = lastOne.split(', ')
      const [bLast, bFirst] = nextOne.split(', ')
      return aFirst < bFirst ? -1 : 1;
   })
   console.table(sortLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
// parameter reduce = previousValue, currentValue, currentIndex, array
// reduce itu kaya sum foreach
// setiap pengulangan tiap isi array nya, reduce melakukan semua isi yg ada di function
// yg di akhir setelah function "{}" itu initial value, berarti kalua ini initial value nya berupa objek kosong yang akan di isi setiap pengulangannya
// pemanggilan object juga bisa pake bracket "[]"
// contoh:
// person.age
// person.name.first
// person['age']
// person['name']['first']
const transport = data.reduce((kendaraan, jenis) => {
   if (!kendaraan[jenis]) {
      kendaraan[jenis] = 0
   };
   kendaraan[jenis]++;
   return kendaraan;
}, {})
console.log(transport);