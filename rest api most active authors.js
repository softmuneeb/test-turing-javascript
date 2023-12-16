const { default: axios } = require('axios');
const { log } = require('console');

async function getUsernames(threshold) {
  const res2 = await axios.get(
    `https://jsonmock.hackerrank.com/api/article_users?page=1`,
  );
  let total_pages = res2.data.total_pages;
  log({ total_pages });
  const ans = [];
  for (let i = 1; i <= total_pages; i++) {
    const res = await axios.get(
      `https://jsonmock.hackerrank.com/api/article_users?page=${i}`,
    );

    res.data.data.forEach((o) => {
      log(o.username, o.submission_count, threshold);

      if (o.submission_count > threshold) ans.push(o.username);
    });
  }

  return ans;
}
