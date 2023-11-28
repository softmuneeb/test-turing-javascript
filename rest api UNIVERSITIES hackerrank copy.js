const axios = require('axios')
const { log } = require('console')

async function getUniversities(page) {
  const url = `https://jsonmock.hackerrank.com/api/universities?page=${page}`
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error.message)
    throw error
  }
}

async function highestInternationalStudents(city1, city2) {
  let page = 1
  let universitiesCity1 = [] // Universities in city1
  let universitiesCity2 = [] // Universities in city2

  while (true) {
    try {
      const result = await getUniversities(page)

      result.data.forEach(u => {
        const internationalStudents = Number(u?.international_students?.replaceAll(',', ''))
        // log(result.page, u?.university, u?.location?.city, Number(u?.international_students?.replaceAll(',', '')))

        if (u?.location?.city === city1) {
          universitiesCity1.push({ name: u?.university, internationalStudents })
        } else if (u?.location?.city === city2) {
          universitiesCity2.push({ name: u?.university, internationalStudents })
        }
      })

      // Check if there are more pages
      if (page < result.total_pages) {
        page++
      } else {
        break
      }
    } catch (error) {
      // Handle errors as needed
      console.error('Error processing data:', error.message)
      break
    }
  }

  // Find the university with the highest international students in city1 or city2
  const highestInCity1 = universitiesCity1.reduce(
    (max, u) => (u.internationalStudents > max.internationalStudents ? u : max),
    { internationalStudents: 0 },
  )
  const highestInCity2 = universitiesCity2.reduce(
    (max, u) => (u.internationalStudents > max.internationalStudents ? u : max),
    { internationalStudents: 0 },
  )

  if (highestInCity1.internationalStudents > 0) {
    // logData(`Highest international students in ${city1}: ${highestInCity1.name}`)
    return highestInCity1.name
  } else {
    // logData(`No universities found in ${city1}. Highest international students in ${city2}: ${highestInCity2.name}`)
    return highestInCity2.name
  }
}

// Execute the query with your desired cities
// highestInternationalStudents('Singapore', 'New York City')
highestInternationalStudents('Pune', 'New Delhi')
