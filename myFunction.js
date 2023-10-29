const axios = require('axios');

async function callApi() {
  var issuesList = [];
  try {
    var repositories = await axios.get('https://api.github.com/users/Moeenahamd/repos');
    if (repositories.status === 200) {
       repositories = repositories.data.map(element => element.full_name);
      for (const repo of repositories) {
        
        const issues = await axios.get('https://api.github.com/repos/'+repo+'/issues');
        
        if (issues.status === 200) {
          for (const issue of issues.data) {
            issuesList.push(issue);
          }
        }
        else {
          throw new Error(`API request failed with status ${response.status}`);
        }
      }
      
      const res = JSON.stringify(issuesList);
      console.log(res);
      return res;
    } else {
      throw new Error(`API request failed with status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}

module.exports = callApi;
