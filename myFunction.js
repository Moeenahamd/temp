const axios = require('axios');

async function callApi() {
  try {
    const response = await axios.get('https://api.github.com/users/Moeenahamd/repos');
    if (response.status === 200) {
      const jsonData = JSON.stringify(response.data);
      console.log(jsonData);
      return jsonData;
    } else {
      throw new Error(`API request failed with status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}

module.exports = callApi;
