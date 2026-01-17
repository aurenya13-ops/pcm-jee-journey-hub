// ==================== PURE AUDIO MUSIC PLAYER (AD-FREE) ====================

// Music Library - Royalty-Free MP3s from Pixabay, Chosic, Bensound
// NOTE: These are placeholder URLs. To add your own music:
// 1. Download royalty-free MP3s from: Pixabay, Chosic, Bensound, Free Music Archive
// 2. Upload to GitHub repo or use a free hosting service
// 3. Replace URLs below with your hosted MP3 links

const musicLibrary = {
  lofi: [
    { 
      title: "Lofi Study Session", 
      url: "https://www.bensound.com/bensound-music/bensound-slowmotion.mp3",
      artist: "Bensound"
    },
    { 
      title: "Chill Lofi Beats", 
      url: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3",
      artist: "Bensound"
    },
    { 
      title: "Relaxing Lofi", 
      url: "https://www.bensound.com/bensound-music/bensound-sunny.mp3",
      artist: "Bensound"
    },
    { 
      title: "Lofi Hip Hop", 
      url: "https://www.bensound.com/bensound-music/bensound-littleidea.mp3",
      artist: "Bensound"
    },
    { 
      title: "Study Lofi", 
      url: "https://www.bensound.com/bensound-music/bensound-ukulele.mp3",
      artist: "Bensound"
    },
  ],
  
  focus: [
    { 
      title: "Deep Focus", 
      url: "https://www.bensound.com/bensound-music/bensound-deepblue.mp3",
      artist: "Bensound"
    },
    { 
      title: "Concentration Music", 
      url: "https://www.bensound.com/bensound-music/bensound-memories.mp3",
      artist: "Bensound"
    },
    { 
      title: "Study Focus", 
      url: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
      artist: "Bensound"
    },
    { 
      title: "Brain Power", 
      url: "https://www.bensound.com/bensound-music/bensound-energy.mp3",
      artist: "Bensound"
    },
    { 
      title: "Focus Flow", 
      url: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3",
      artist: "Bensound"
    },
  ],
  
  classical: [
    { 
      title: "Classical Piano", 
      url: "https://www.bensound.com/bensound-music/bensound-pianomoment.mp3",
      artist: "Bensound"
    },
    { 
      title: "Peaceful Classical", 
      url: "https://www.bensound.com/bensound-music/bensound-clearday.mp3",
      artist: "Bensound"
    },
    { 
      title: "Classical Study", 
      url: "https://www.bensound.com/bensound-music/bensound-relaxing.mp3",
      artist: "Bensound"
    },
    { 
      title: "Elegant Classical", 
      url: "https://www.bensound.com/bensound-music/bensound-sweet.mp3",
      artist: "Bensound"
    },
    { 
      title: "Classical Harmony", 
      url: "https://www.bensound.com/bensound-music/bensound-love.mp3",
      artist: "Bensound"
    },
  ],
  
  ambient: [
    { 
      title: "Ambient Space", 
      url: "https://www.bensound.com/bensound-music/bensound-scifi.mp3",
      artist: "Bensound"
    },
    { 
      title: "Calm Ambient", 
      url: "https://www.bensound.com/bensound-music/bensound-dreams.mp3",
      artist: "Bensound"
    },
    { 
      title: "Peaceful Ambient", 
      url: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3",
      artist: "Bensound"
    },
    { 
      title: "Dreamy Ambient", 
      url: "https://www.bensound.com/bensound-music/bensound-tomorrow.mp3",
      artist: "Bensound"
    },
    { 
      title: "Serene Ambient", 
      url: "https://www.bensound.com/bensound-music/bensound-anewbeginning.mp3",
      artist: "Bensound"
    },
  ],
  
  motivation: [
    { 
      title: "Epic Motivation", 
      url: "https://www.bensound.com/bensound-music/bensound-epic.mp3",
      artist: "Bensound"
    },
    { 
      title: "Inspiring Music", 
      url: "https://www.bensound.com/bensound-music/bensound-inspire.mp3",
      artist: "Bensound"
    },
    { 
      title: "Powerful Motivation", 
      url: "https://www.bensound.com/bensound-music/bensound-actionable.mp3",
      artist: "Bensound"
    },
    { 
      title: "Victory Music", 
      url: "https://www.bensound.com/bensound-music/bensound-happyrock.mp3",
      artist: "Bensound"
    },
    { 
      title: "Success Theme", 
      url: "https://www.bensound.com/bensound-music/bensound-betterdays.mp3",
      artist: "Bensound"
    },
  ],
  
  edm: [
    { 
      title: "EDM Study", 
      url: "https://www.bensound.com/bensound-music/bensound-dubstep.mp3",
      artist: "Bensound"
    },
    { 
      title: "Electronic Focus", 
      url: "https://www.bensound.com/bensound-music/bensound-electronicrock.mp3",
      artist: "Bensound"
    },
    { 
      title: "Upbeat EDM", 
      url: "https://www.bensound.com/bensound-music/bensound-dance.mp3",
      artist: "Bensound"
    },
    { 
      title: "Energy Boost", 
      url: "https://www.bensound.com/bensound-music/bensound-extremeaction.mp3",
      artist: "Bensound"
    },
    { 
      title: "EDM Vibes", 
      url: "https://www.bensound.com/bensound-music/bensound-house.mp3",
      artist: "Bensound"
    },
  ]
};

// Player State
let currentPlaylist = 'lofi';
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let audioPlayer = null;

// Initialize Audio Player
function initAudioPlayer() {
  audioPlayer = new Audio();
  audioPlayer.volume = 0.7;
  audioPlayer.crossOrigin = "anonymous"; // For CORS
  
  // Event listeners
  audioPlayer.addEventListener('ended', handleTrackEnd);
  audioPlayer.addEventListener('play', () => {
    isPlaying = true;
    updatePlayButton();
  });
  audioPlayer.addEventListener('pause', () => {
    isPlaying = false;
    updatePlayButton();
  });
  audioPlayer.addEventListener('timeupdate', updateProgress);
  audioPlayer.addEventListener('loadedmetadata', updateDuration);
  audioPlayer.addEventListener('error', (e) => {
    console.error('Audio error:', e);
    showNotification('Failed to load track. Trying next...', 'error');
    nextTrack();
  });
  
  // Load first track
  loadTrack(0);
}

// Load Track
function loadTrack(index) {
  const playlist = musicLibrary[currentPlaylist];
  if (!playlist || index >= playlist.length) return;
  
  currentTrackIndex = index;
  const track = playlist[index];
  
  audioPlayer.src = track.url;
  document.getElementById('current-track-title').textContent = track.title;
  
  // Update player UI
  updatePlayerUI();
}

// Play/Pause Toggle
function togglePlay() {
  if (isPlaying) {
    audioPlayer.pause();
  } else {
    audioPlayer.play().catch(err => {
      console.log('Playback failed:', err);
      showNotification('Click play again to start music', 'info');
    });
  }
}

// Next Track
function nextTrack() {
  const playlist = musicLibrary[currentPlaylist];
  
  if (isShuffle) {
    currentTrackIndex = Math.floor(Math.random() * playlist.length);
  } else {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  }
  
  loadTrack(currentTrackIndex);
  if (isPlaying) audioPlayer.play();
}

// Previous Track
function prevTrack() {
  const playlist = musicLibrary[currentPlaylist];
  
  if (isShuffle) {
    currentTrackIndex = Math.floor(Math.random() * playlist.length);
  } else {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  }
  
  loadTrack(currentTrackIndex);
  if (isPlaying) audioPlayer.play();
}

// Handle Track End
function handleTrackEnd() {
  if (isRepeat) {
    audioPlayer.currentTime = 0;
    audioPlayer.play();
  } else {
    nextTrack();
  }
}

// Toggle Shuffle
function toggleShuffle() {
  isShuffle = !isShuffle;
  const btn = document.getElementById('shuffle-btn');
  btn.classList.toggle('active', isShuffle);
  if (typeof showNotification === 'function') {
    showNotification(`Shuffle ${isShuffle ? 'ON' : 'OFF'}`, 'info');
  }
}

// Toggle Repeat
function toggleRepeat() {
  isRepeat = !isRepeat;
  const btn = document.getElementById('repeat-btn');
  btn.classList.toggle('active', isRepeat);
  if (typeof showNotification === 'function') {
    showNotification(`Repeat ${isRepeat ? 'ON' : 'OFF'}`, 'info');
  }
}

// Change Playlist
function changePlaylist() {
  const select = document.getElementById('playlist-select');
  currentPlaylist = select.value;
  currentTrackIndex = 0;
  loadTrack(0);
  
  if (isPlaying) {
    audioPlayer.play();
  }
  
  if (typeof showNotification === 'function') {
    showNotification(`Switched to ${select.options[select.selectedIndex].text}`, 'info');
  }
}

// Toggle Music Player
function toggleMusicPlayer() {
  const playerBody = document.getElementById('player-body');
  const icon = document.getElementById('player-toggle-icon');
  
  playerBody.classList.toggle('collapsed');
  
  if (playerBody.classList.contains('collapsed')) {
    icon.className = 'fas fa-chevron-up';
  } else {
    icon.className = 'fas fa-chevron-down';
  }
}

// Update Play Button
function updatePlayButton() {
  const btn = document.getElementById('play-btn');
  const icon = btn.querySelector('i');
  
  if (isPlaying) {
    icon.className = 'fas fa-pause';
  } else {
    icon.className = 'fas fa-play';
  }
}

// Update Progress Bar
function updateProgress() {
  const progressBar = document.getElementById('progress-bar');
  const currentTimeEl = document.getElementById('current-time');
  
  if (!progressBar || !audioPlayer.duration) return;
  
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.style.width = `${progress}%`;
  
  if (currentTimeEl) {
    currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
  }
}

// Update Duration
function updateDuration() {
  const durationEl = document.getElementById('duration');
  if (durationEl && audioPlayer.duration) {
    durationEl.textContent = formatTime(audioPlayer.duration);
  }
}

// Format Time (seconds to MM:SS)
function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Update Player UI
function updatePlayerUI() {
  const playerEmbed = document.getElementById('player-embed');
  const track = musicLibrary[currentPlaylist][currentTrackIndex];
  
  playerEmbed.innerHTML = `
    <div class="audio-player-ui">
      <div class="track-info">
        <div class="track-title">${track.title}</div>
        <div class="playlist-name">${track.artist || 'Unknown Artist'}</div>
      </div>
      
      <div class="progress-container">
        <span class="time" id="current-time">0:00</span>
        <div class="progress-bar-container" onclick="seekTrack(event)">
          <div class="progress-bar" id="progress-bar"></div>
        </div>
        <span class="time" id="duration">0:00</span>
      </div>
      
      <div class="volume-control">
        <i class="fas fa-volume-up"></i>
        <input type="range" min="0" max="100" value="70" class="volume-slider" oninput="changeVolume(this.value)">
      </div>
      
      <div class="music-note">
        <small style="color: var(--text-secondary); font-size: 0.75rem;">
          🎵 Royalty-free music from Bensound.com
        </small>
      </div>
    </div>
  `;
}

// Seek Track
function seekTrack(event) {
  const progressContainer = event.currentTarget;
  const clickX = event.offsetX;
  const width = progressContainer.offsetWidth;
  const percentage = clickX / width;
  
  audioPlayer.currentTime = percentage * audioPlayer.duration;
}

// Change Volume
function changeVolume(value) {
  audioPlayer.volume = value / 100;
}

// Initialize on page load
window.addEventListener('load', () => {
  initAudioPlayer();
  updatePlayerUI();
});

// Make functions globally accessible
window.togglePlay = togglePlay;
window.nextTrack = nextTrack;
window.prevTrack = prevTrack;
window.toggleShuffle = toggleShuffle;
window.toggleRepeat = toggleRepeat;
window.changePlaylist = changePlaylist;
window.toggleMusicPlayer = toggleMusicPlayer;
window.seekTrack = seekTrack;
window.changeVolume = changeVolume;

console.log('🎵 Pure Audio Player loaded! (Ad-free, Royalty-free music from Bensound)');
console.log('📝 To add your own music:');
console.log('   1. Download MP3s from Pixabay, Chosic, or Free Music Archive');
console.log('   2. Upload to GitHub repo or hosting service');
console.log('   3. Update URLs in music-player.js');
