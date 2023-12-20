const { default: axios } = require('axios')
const { log } = require('console')

async function finestFoodOutlet(city, minVotes) {
  const res2 = await axios.get(`https://jsonmock.hackerrank.com/api/food_outlets?city=${city}&page=1`)
  let total_pages = res2.data.total_pages
  log({ total_pages })

  let ho = { user_rating: { average_rating: 0, votes: 0 } }

  for (let i = 1; i <= total_pages; i++) {
    const res = await axios.get(`https://jsonmock.hackerrank.com/api/food_outlets?city=${city}&page=${i}`)
    "".loca
    res.data.data.forEach(o => {
      log(o.name, o.user_rating.average_rating, o.user_rating.votes, minVotes)

      if (o.user_rating.votes < minVotes) return

      if (o.user_rating.average_rating > ho.user_rating.average_rating) {
        ho = o
        return
      }

      if (
        o.user_rating.average_rating === ho.user_rating.average_rating &&
        o.user_rating.votes >= ho.user_rating.votes
      ) {
        ho = o
        return
      }

      //
    })
  }

  return ho.name
}

// finestFoodOutlet('Seattle', 1)
// finestFoodOutlet('Miami', 1000)
finestFoodOutlet('Omaha', 9000)
