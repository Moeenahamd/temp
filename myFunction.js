const axios = require('axios');

async function callApi() {
  try {
    const response = await axios.get('https://api.github.com/users/Moeenahamd/repos');
    if (response.status === 200) {
      const data = JSON.stringify(response.data);
      const repos = data.map(element => element.full_name);
      
      console.log(repos);
      return repos;
    } else {
      throw new Error(`API request failed with status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}

module.exports = callApi;
