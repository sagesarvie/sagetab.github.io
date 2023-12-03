const backgroundContainer = document.getElementById('background-container');

async function fetchMedia() {
  try {
    const response = await fetch('https://github.com/sagesarvie/sagetab/blob/main/media.json');


    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const mediaData = await response.json();

    // Manually choose an image from the list
    const randomImageIndex = Math.floor(Math.random() * mediaData.images.length);
    const imageUrl = mediaData.images[randomImageIndex];

    // Manually choose a video from the list
    const randomVideoIndex = Math.floor(Math.random() * mediaData.videos.length);
    const videoUrl = mediaData.videos[randomVideoIndex];

    // Display the chosen media
    backgroundContainer.innerHTML = `
      <img src="${imageUrl}" alt="user-chosen image">
      <video autoplay muted loop playsinline src="${videoUrl}"></video>
    `;
  } catch (error) {
    console.error('Error fetching or processing media:', error);
  }
}

fetchMedia();

// Reload new media on every new tab opening
chrome.tabs.onCreated.addListener(fetchMedia);
