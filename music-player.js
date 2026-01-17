// ==================== ACTUALLY WORKING MUSIC PLAYER (YOUTUBE EMBED) ====================

// Music playlists with REAL YouTube embeds
const musicPlaylists = {
  lofi: {
    name: "☕ Lofi Beats",
    videos: [
      { id: "jfKfPfyJRdk", title: "Lofi Hip Hop Radio - Beats to Study/Relax" },
      { id: "5qap5aO4i9A", title: "Lofi Hip Hop Mix" },
      { id: "lTRiuFIWV54", title: "Chill Lofi Study Beats" }
    ]
  },
  focus: {
    name: "🎯 Deep Focus",
    videos: [
      { id: "DWcJFNfaw9c", title: "Deep Focus Music" },
      { id: "5yx6BWlEVcY", title: "Study Music - Focus" },
      { id: "2OEL4P1Rz04", title: "Concentration Music" }
    ]
  },
  classical: {
    name: "🎹 Classical",
    videos: [
      { id: "jgpJVI3tDbY", title: "Classical Music for Studying" },
      { id: "PJL_mVgT0Ao", title: "Mozart for Studying" },
      { id: "Rb0UmrCXxVA", title: "Bach Study Music" }
    ]
  },
  ambient: {
    name: "🌙 Ambient",
    videos: [
      { id: "1ZYbU82GVz4", title: "Ambient Study Music" },
      { id: "lP26UCnoH9s", title: "Relaxing Ambient Music" },
      { id: "kJQP7kiw5Fk", title: "Ambient Music for Studying" }
    ]
  },
  motivation: {
    name: "🔥 Motivation",
    videos: [
      { id: "09839DpTctU", title: "Epic Motivational Music" },
      { id: "g6zN2kqh1vc", title: "Workout Motivation Music" },
      { id: "fEvM-OUbaKs", title: "Study Motivation Mix" }
    ]
  },
  edm: {
    name: "⚡ EDM Study",
    videos: [
      { id: "bM7SZ5SBzyY", title: "EDM Study Music" },
      { id: "yJg-Y5byMMw", title: "Electronic Study Mix" },
      { id: "n61ULEU7CO0", title: "Gaming Music Mix" }
    ]
  }
};

// Player state
let currentPlaylist = 'lofi';
let currentTrackIndex = 0;
let player = null;
let playerReady = false;

// Initialize YouTube API
function initYouTubePlayer() {
  // Load YouTube IFrame API
  if (!window.YT) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
  
  // Wait for API to load
  window.onYouTubeIframeAPIReady = function() {
    playerReady = true;
    console.log('✅ YouTube player API ready');
  };
}

// Show music player
function showMusicPlayer() {
  const playerDiv = document.getElementById('floating-player');
  const toggleBtn = document.querySelector('.music-toggle-btn');
  
  if (playerDiv) {
    playerDiv.classList.add('active');
  }
  if (toggleBtn) {
    toggleBtn.classList.add('hidden');
  }
}

// Hide music player
function hideMusicPlayer() {
  const playerDiv = document.getElementById('floating-player');
  const toggleBtn = document.querySelector('.music-toggle-btn');
  
  if (playerDiv) {
    playerDiv.classList.remove('active');
  }
  if (toggleBtn) {
    toggleBtn.classList.remove('hidden');
  }
}

// Toggle music player
function toggleMusicPlayer() {
  const playerDiv = document.getElementById('floating-player');
  if (playerDiv.classList.contains('active')) {
    hideMusicPlayer();
  } else {
    showMusicPlayer();
    if (!player) {
      loadPlayer();
    }
  }
}

// Load YouTube player
function loadPlayer() {
  const track = getCurrentTrack();
  const embedDiv = document.getElementById('player-embed');
  
  if (!embedDiv) return;
  
  // Create player container if doesn't exist
  if (!document.getElementById('youtube-player')) {
    embedDiv.innerHTML = '<div id="youtube-player"></div>';
  }
  
  // Wait for API
  if (!window.YT || !window.YT.Player) {
    setTimeout(loadPlayer, 500);
    return;
  }
  
  // Create player
  player = new YT.Player('youtube-player', {
    height: '200',
    width: '100%',
    videoId: track.id,
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
  
  updateTrackDisplay();
}

// Player ready
function onPlayerReady(event) {
  console.log('✅ YouTube player ready');
  updatePlayButton();
}

// Player state change
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    nextTrack();
  }
  updatePlayButton();
}

// Get current track
function getCurrentTrack() {
  const playlist = musicPlaylists[currentPlaylist];
  return playlist.videos[currentTrackIndex];
}

// Update track display
function updateTrackDisplay() {
  const track = getCurrentTrack();
  const titleElement = document.getElementById('current-track-title');
  
  if (titleElement) {
    titleElement.textContent = track.title;
  }
}

// Update play button
function updatePlayButton() {
  const playBtn = document.getElementById('play-btn');
  if (!playBtn || !player) return;
  
  const icon = playBtn.querySelector('i');
  if (!icon) return;
  
  try {
    const state = player.getPlayerState();
    icon.className = state === YT.PlayerState.PLAYING ? 'fas fa-pause' : 'fas fa-play';
  } catch (e) {
    icon.className = 'fas fa-play';
  }
}

// Toggle play/pause
function togglePlay() {
  if (!player) {
    showMusicPlayer();
    loadPlayer();
    return;
  }
  
  try {
    const state = player.getPlayerState();
    if (state === YT.PlayerState.PLAYING) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  } catch (e) {
    console.log('Player not ready yet');
  }
}

// Next track
function nextTrack() {
  const playlist = musicPlaylists[currentPlaylist];
  currentTrackIndex = (currentTrackIndex + 1) % playlist.videos.length;
  
  if (player) {
    const track = getCurrentTrack();
    player.loadVideoById(track.id);
    updateTrackDisplay();
  }
}

// Previous track
function prevTrack() {
  const playlist = musicPlaylists[currentPlaylist];
  currentTrackIndex = (currentTrackIndex - 1 + playlist.videos.length) % playlist.videos.length;
  
  if (player) {
    const track = getCurrentTrack();
    player.loadVideoById(track.id);
    updateTrackDisplay();
  }
}

// Change playlist
function changePlaylist() {
  const select = document.getElementById('playlist-select');
  currentPlaylist = select.value;
  currentTrackIndex = 0;
  
  if (player) {
    const track = getCurrentTrack();
    player.loadVideoById(track.id);
    updateTrackDisplay();
  }
}

// Shuffle (just go to random track)
function toggleShuffle() {
  const playlist = musicPlaylists[currentPlaylist];
  currentTrackIndex = Math.floor(Math.random() * playlist.videos.length);
  
  if (player) {
    const track = getCurrentTrack();
    player.loadVideoById(track.id);
    updateTrackDisplay();
  }
  
  showNotification('🔀 Shuffled to random track', 'success');
}

// Repeat (replay current)
function toggleRepeat() {
  if (player) {
    player.seekTo(0);
    player.playVideo();
  }
  
  showNotification('🔁 Replaying current track', 'success');
}

// Show notification
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => notification.classList.add('show'), 100);
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Make functions global
window.toggleMusicPlayer = toggleMusicPlayer;
window.togglePlay = togglePlay;
window.nextTrack = nextTrack;
window.prevTrack = prevTrack;
window.changePlaylist = changePlaylist;
window.toggleShuffle = toggleShuffle;
window.toggleRepeat = toggleRepeat;

// Initialize on load
window.addEventListener('load', () => {
  initYouTubePlayer();
  console.log('✅ Music player initialized (YouTube embed)');
});

console.log('✅ Music player script loaded');
