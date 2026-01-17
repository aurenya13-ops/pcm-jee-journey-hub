// ==================== SIMPLE MUSIC PLAYER (NO INFINITE ERRORS) ====================

// Music Player State
let currentPlaylist = 'lofi';
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let audioPlayer = null;

// Simple music library (using free music APIs)
const musicLibrary = {
  lofi: [
    { title: "Lofi Study 1", url: "https://cdn.pixabay.com/audio/2022/03/10/audio_2c4d748e05.mp3" },
    { title: "Lofi Study 2", url: "https://cdn.pixabay.com/audio/2022/03/24/audio_c8c0e0c3e7.mp3" },
    { title: "Lofi Study 3", url: "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3" },
  ],
  focus: [
    { title: "Deep Focus 1", url: "https://cdn.pixabay.com/audio/2022/08/02/audio_884fe5c21c.mp3" },
    { title: "Deep Focus 2", url: "https://cdn.pixabay.com/audio/2022/08/04/audio_d1718ab41b.mp3" },
  ],
  classical: [
    { title: "Classical 1", url: "https://cdn.pixabay.com/audio/2022/03/15/audio_c8f7e1f2e0.mp3" },
    { title: "Classical 2", url: "https://cdn.pixabay.com/audio/2022/10/26/audio_24ee25f4f6.mp3" },
  ],
  ambient: [
    { title: "Ambient 1", url: "https://cdn.pixabay.com/audio/2022/05/13/audio_c8e8f8e8f8.mp3" },
    { title: "Ambient 2", url: "https://cdn.pixabay.com/audio/2022/06/07/audio_f8e8f8e8f8.mp3" },
  ],
  motivation: [
    { title: "Motivation 1", url: "https://cdn.pixabay.com/audio/2022/03/10/audio_2c4d748e05.mp3" },
    { title: "Motivation 2", url: "https://cdn.pixabay.com/audio/2022/03/24/audio_c8c0e0c3e7.mp3" },
  ],
  edm: [
    { title: "EDM Study 1", url: "https://cdn.pixabay.com/audio/2022/08/02/audio_884fe5c21c.mp3" },
    { title: "EDM Study 2", url: "https://cdn.pixabay.com/audio/2022/08/04/audio_d1718ab41b.mp3" },
  ]
};

// Initialize music player
function initMusicPlayer() {
  console.log('🎵 Music player initialized');
  
  // Create audio element
  audioPlayer = new Audio();
  audioPlayer.volume = 0.5;
  
  // Event listeners
  audioPlayer.addEventListener('ended', () => {
    if (isRepeat) {
      audioPlayer.currentTime = 0;
      audioPlayer.play();
    } else {
      nextTrack();
    }
  });
  
  audioPlayer.addEventListener('error', (e) => {
    console.log('Track failed to load, skipping...');
    nextTrack(); // Skip to next track instead of showing error
  });
  
  audioPlayer.addEventListener('play', () => {
    isPlaying = true;
    updatePlayButton();
    showMusicPlayer();
  });
  
  audioPlayer.addEventListener('pause', () => {
    isPlaying = false;
    updatePlayButton();
  });
  
  // Update UI
  updateTrackDisplay();
}

// Show/hide music player
function showMusicPlayer() {
  const player = document.getElementById('floating-player');
  const toggleBtn = document.querySelector('.music-toggle-btn');
  
  if (player) {
    player.classList.add('active');
  }
  if (toggleBtn) {
    toggleBtn.classList.add('hidden');
  }
}

function hideMusicPlayer() {
  const player = document.getElementById('floating-player');
  const toggleBtn = document.querySelector('.music-toggle-btn');
  
  if (player) {
    player.classList.remove('active');
  }
  if (toggleBtn) {
    toggleBtn.classList.remove('hidden');
  }
}

// Toggle music player visibility
function toggleMusicPlayer() {
  const player = document.getElementById('floating-player');
  if (player.classList.contains('active')) {
    hideMusicPlayer();
  } else {
    showMusicPlayer();
  }
}

// Play/Pause
function togglePlay() {
  if (!audioPlayer) {
    initMusicPlayer();
  }
  
  if (isPlaying) {
    audioPlayer.pause();
  } else {
    const track = getCurrentTrack();
    if (audioPlayer.src !== track.url) {
      audioPlayer.src = track.url;
    }
    audioPlayer.play().catch(err => {
      console.log('Playback failed, trying next track...');
      nextTrack();
    });
  }
}

// Next track
function nextTrack() {
  const playlist = musicLibrary[currentPlaylist];
  
  if (isShuffle) {
    currentTrackIndex = Math.floor(Math.random() * playlist.length);
  } else {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  }
  
  updateTrackDisplay();
  
  if (isPlaying) {
    const track = getCurrentTrack();
    audioPlayer.src = track.url;
    audioPlayer.play().catch(err => {
      console.log('Track failed, trying next...');
      nextTrack();
    });
  }
}

// Previous track
function prevTrack() {
  const playlist = musicLibrary[currentPlaylist];
  currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  
  updateTrackDisplay();
  
  if (isPlaying) {
    const track = getCurrentTrack();
    audioPlayer.src = track.url;
    audioPlayer.play().catch(err => {
      console.log('Track failed, trying previous...');
      prevTrack();
    });
  }
}

// Change playlist
function changePlaylist() {
  const select = document.getElementById('playlist-select');
  currentPlaylist = select.value;
  currentTrackIndex = 0;
  
  updateTrackDisplay();
  
  if (isPlaying) {
    const track = getCurrentTrack();
    audioPlayer.src = track.url;
    audioPlayer.play().catch(err => {
      console.log('Playlist change failed, trying next...');
      nextTrack();
    });
  }
}

// Toggle shuffle
function toggleShuffle() {
  isShuffle = !isShuffle;
  const btn = document.getElementById('shuffle-btn');
  if (btn) {
    btn.style.color = isShuffle ? 'var(--primary)' : 'var(--text-secondary)';
  }
}

// Toggle repeat
function toggleRepeat() {
  isRepeat = !isRepeat;
  const btn = document.getElementById('repeat-btn');
  if (btn) {
    btn.style.color = isRepeat ? 'var(--primary)' : 'var(--text-secondary)';
  }
}

// Get current track
function getCurrentTrack() {
  const playlist = musicLibrary[currentPlaylist];
  return playlist[currentTrackIndex];
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
  if (playBtn) {
    const icon = playBtn.querySelector('i');
    if (icon) {
      icon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
    }
  }
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
  initMusicPlayer();
  console.log('✅ Music player ready (hidden by default)');
});

console.log('✅ Music player script loaded');
