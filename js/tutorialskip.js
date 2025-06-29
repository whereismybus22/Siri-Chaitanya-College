document.addEventListener('DOMContentLoaded', () => {
  const videoTrigger = document.getElementById('videoTrigger');
  const openVideoBtn = document.getElementById('openVideoBtn');
  const youtubeLink = "https://youtu.be/bhtDIswoDvo?si=0SIyQroD3Su_fo-8";

  function openYouTubeVideo() {
    localStorage.setItem("isTutorialSeen", JSON.stringify(true));
    window.open(youtubeLink, '_blank');
  }

  if (videoTrigger) {
    videoTrigger.addEventListener('click', openYouTubeVideo);
  }

  if (openVideoBtn) {
    openVideoBtn.addEventListener('click', openYouTubeVideo);
  }
});

window.addEventListener('focus', () => {
  if (localStorage.getItem('isTutorialSeen')) {
    window.location = '/index.html';
  }
});
document.getElementById('skiptobusesButton').addEventListener('click', function() {
  sessionStorage.setItem('tutorialPageSkip', true);
  window.location.href = '/index.html'; 
});