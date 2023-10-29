const axios = require('axios');

async function callApi() {
  var issuesList = [];
  try {
    var repositories = await axios.get('https://api.github.com/users/ARK-Builders/repos');
    if (repositories.status === 200) {
       repositories = repositories.data.map(element => element.full_name);
      for (const repo of repositories) {
        
        const issues = await axios.get('https://api.github.com/repos/'+repo+'/issues');
        
        if (issues.status === 200) {
          if(issues.data.length > 0){
           for (const issue of issues.data) {
              issuesList.push({
                title: issue.title,
                state: issue.state,
                labels: issue.labels,
                assignees: issue.assignees,
                user: issue.user,
                date: new Date(issue.created_at)
              })
            }
          }
        }
        else {
          throw new Error(`API request failed with status ${response.status}`);
        }
      }
      
      const res = JSON.stringify(issuesList);
      console.log(issuesList);
      return res;
    } else {
      throw new Error(`API request failed with status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}

module.exports = callApi;
