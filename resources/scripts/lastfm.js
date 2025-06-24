fetch('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=cabin&api_key=94a7d1da6bc864d4e8d21905c8693442&format=json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    let artist = data['recenttracks']['track'][0]['artist']['#text'];
    let name = data['recenttracks']['track'][0]['name'];
    let cover = data['recenttracks']['track'][0]['image'][1]['#text'];
    document.getElementById("artist"). innerText = artist;
    document.getElementById("track"). innerText = name;
    document.getElementById("cover")['src'] = cover;
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });