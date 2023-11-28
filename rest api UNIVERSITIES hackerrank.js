const axios = require('axios');

async function getUniversities(page) {
  const url = `https://jsonmock.hackerrank.com/api/universities?page=${page}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}

async function bestUniversityByCountry(country) {
  let page = 1;
  let universitiesCity1 = []; // Universities in city1

  while (true) {
    try {
      const result = await getUniversities(page);

      result.data.forEach((u) => {
        const score = u?.score;
        // log(result.page, u?.university, u?.location?.city, Number(u?.international_students?.replaceAll(',', '')))

        if (u?.location?.country === country) {
          universitiesCity1.push({
            name: u?.university,
            score,
          });
        }
      });

      if (page < result.total_pages) {
        page++;
      } else {
        break;
      }
    } catch (error) {
      console.error('Error processing data:', error.message);
      break;
    }
  }

  const highestInCountry = universitiesCity1.reduce(
    (max, u) => (u.score > max.score ? u : max),
    { score: 0 },
  );

  if (highestInCountry.score > 0) {
    return highestInCountry.name;
  } else {
    return '';
  }
}

// Execute the query with your desired cities
bestUniversityByCountry('Pune', 'New Delhi');


first check all pairs exist by
2 2 2 2
4 4 1 1

2 count => 4
4 count => 2
1 count => 2

all obj values divisible by 2 so its okay good to go else ret -1

I know
arr1 should have
2 count = 2
4 count = 1
1 count = 1

now check actual counts in arr1
2 count = 4 compare 2 => 2
4 count = 0 compare 1 => 1
1 count = 0 compare 1 => 1

total misplacements = 4 so swaps = 2




// hash (in an object mapAll {}) all values of arr1 and arr2 as arr item maps to arr item count
// check all Object.values of arr1 and arr2. if all are divisible by 2 then okay else return -1
// hash (in an object mapArr1 {}) all values of arr1 as arr item maps to arr item count
// compare all object.values of mapArr1 and mapAll, take a difference of each key's value of mapAll with each keys's value of mapArr1, if diff is negative make it positive, then return ((sum of all differences) / 2)


4 2 2 2
1 4 1 2

// hash (in an object mapAll {}) all values of arr1 and arr2 as arr item maps to arr item count
2 count => 4
4 count => 2
1 count => 2

// check all Object.values of arr1 and arr2. if all are divisible by 2 then okay else return -1
all obj values divisible by 2 so its okay good to go else ret -1

// hash (in an object mapArr1 {}) all values of arr1 as arr item maps to arr item count
I know arr1 should have
2 count = 2
4 count = 1
1 count = 1

// compare all object.values of mapArr1 and mapAll, take a difference of each key's value of mapAll with each keys's value of mapArr1, if diff is negative make it positive, then return ((sum of all differences) / 2)
now check actual counts in arr1
2 count = 3 compare with should have 2 => 1
4 count = 1 compare with should have 1 => 0
1 count = 0 compare with should have 1 => 1

total misplacements = 2 so swaps = 1



// =================================================



arr1 = [1, 1, 3];
arr2 = [2, 2, 3];

// hash (in an object mapAll {}) all values of arr1 and arr2 as arr item maps to arr item count
1 count => 2
2 count => 2
3 count => 2

// check all Object.values of arr1 and arr2. if all are divisible by 2 then okay else return -1
all obj values divisible by 2 so its okay good to go else ret -1




// hash (in an object mapArr1 {}) all values of arr1 as arr item maps to arr item count
I know arr1 should have half the counts for each of mapAll

// hash arr 1
1 count => 2
2 count => 0
3 count => 1

// hash arr 2
1 count => 0
2 count => 2
3 count => 1

// compare all object.values of mapArr1 and mapArr2, take a difference of each key's value of mapAll with each keys's value of mapArr1, if diff is negative make it positive by *= -1, then return ((sum of all differences) / 2)
now compare counts of arr1 and arr2
          arr1     arr2
1 count => 2,        0 => 2/2  = 1 
2 count => 0,        2 => 2/2 = 1
3 count => 1,        1 => 0 


[1] [2]


total misplacements = 2 so swaps = 1