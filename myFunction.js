function getData() {
    const apiUrl = `https://api.github.com/repos/ARK-Builders/arklib-android/issues`;
    try {
        const response = await fetch(apiUrl, {
        });
        return response;
    }
    catch (error) {
        console.error('Error fetching repositories:', error);
        return [];
  }
}

module.exports = getData;
