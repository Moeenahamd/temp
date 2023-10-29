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
              const user = issue.user.map(element => element.login);
              const assignees = issue.assignees.map(element => element.login);
              const labels = issue.labels.map(element => element.name);
              issuesList.push({
                title: issue.title,
                state: issue.state,
                labels: labels,
                assignees: assignees,
                user: user,
                date: new Date(issue.created_at)
              })
            }
          }
        }
        else {
          throw new Error(`API request failed with status ${response.status}`);
        }
      }
      return issuesList;
    } else {
      throw new Error(`API request failed with status ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}

module.exports = callApi;
