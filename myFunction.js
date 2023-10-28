const axios = require('axios');

async function callApi() {
  try {
    const response = await axios.get('https://api.github.com/repos/ARK-Builders/website/issues');
    if (response.status === 200) {
      console.log(response.data)
      return response.data;
    } else {
      throw new Error(`API request failed with status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}

module.exports = callApi;
