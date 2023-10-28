const axios = require('axios');

async function callApi() {
  try {
    const response = await axios.get('https://api.example.com/data');
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`API request failed with status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}

module.exports = { callApi };
