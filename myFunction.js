const axios = require('axios');

async function callApi() {
  var issuesList = [];
  try {
    const response = await axios.get('https://api.github.com/users/Moeenahamd/repos');
    if (response.status === 200) {
      const data = JSON.stringify(response.data);
      const repos = response.data.map(element => element.full_name);
      for (const repo of repos) {
        issuesList.push(repo)
      }
      console.log(issuesList);
      return JSON.stringify(issuesList);
    } else {
      throw new Error(`API request failed with status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}

module.exports = callApi;
