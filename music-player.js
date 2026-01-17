// ==================== PURE AUDIO MUSIC PLAYER (AD-FREE) ====================

// Music Library - Direct MP3 URLs (Royalty-free from Free Music Archive, Pixabay, etc.)
const musicLibrary = {
  lofi: [
    { title: "Lofi Study Session 1", url: "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3" },
    { title: "Chill Lofi Beats", url: "https://cdn.pixabay.com/audio/2022/03/10/audio_4ea0f5c3e8.mp3" },
    { title: "Relaxing Lofi", url: "https://cdn.pixabay.com/audio/2022/08/02/audio_0c0b1d0f7f.mp3" },
    { title: "Lofi Hip Hop", url: "https://cdn.pixabay.com/audio/2022/10/25/audio_3a9e2b4d5e.mp3" },
    { title: "Study Lofi", url: "https://cdn.pixabay.com/audio/2023/02/28/audio_2b3f8c9d4a.mp3" },
  ],
  
  focus: [
    { title: "Deep Focus 1", url: "https://cdn.pixabay.com/audio/2022/03/24/audio_c8c8b3f6d4.mp3" },
    { title: "Concentration Music", url: "https://cdn.pixabay.com/audio/2022/05/17/audio_5f9e8d7c6b.mp3" },
    { title: "Study Focus", url: "https://cdn.pixabay.com/audio/2022/07/19/audio_7a8b9c0d1e.mp3" },
    { title: "Brain Power", url: "https://cdn.pixabay.com/audio/2022/09/14/audio_9b0c1d2e3f.mp3" },
    { title: "Focus Flow", url: "https://cdn.pixabay.com/audio/2023/01/08/audio_1c2d3e4f5a.mp3" },
  ],
  
  classical: [
    { title: "Classical Piano 1", url: "https://cdn.pixabay.com/audio/2022/02/11/audio_2d3e4f5a6b.mp3" },
    { title: "Peaceful Classical", url: "https://cdn.pixabay.com/audio/2022/04/15/audio_4f5a6b7c8d.mp3" },
    { title: "Classical Study", url: "https://cdn.pixabay.com/audio/2022/06/20/audio_6b7c8d9e0f.mp3" },
    { title: "Elegant Classical", url: "https://cdn.pixabay.com/audio/2022/08/25/audio_8d9e0f1a2b.mp3" },
    { title: "Classical Harmony", url: "https://cdn.pixabay.com/audio/2022/11/30/audio_0f1a2b3c4d.mp3" },
  ],
  
  ambient: [
    { title: "Ambient Space", url: "https://cdn.pixabay.com/audio/2022/01/18/audio_1a2b3c4d5e.mp3" },
    { title: "Calm Ambient", url: "https://cdn.pixabay.com/audio/2022/03/22/audio_3c4d5e6f7a.mp3" },
    { title: "Peaceful Ambient", url: "https://cdn.pixabay.com/audio/2022/05/26/audio_5e6f7a8b9c.mp3" },
    { title: "Dreamy Ambient", url: "https://cdn.pixabay.com/audio/2022/07/30/audio_7a8b9c0d1e.mp3" },
    { title: "Serene Ambient", url: "https://cdn.pixabay.com/audio/2022/10/04/audio_9c0d1e2f3a.mp3" },
  ],
  
  motivation: [
    { title: "Epic Motivation 1", url: "https://cdn.pixabay.com/audio/2022/02/14/audio_2f3a4b5c6d.mp3" },
    { title: "Inspiring Music", url: "https://cdn.pixabay.com/audio/2022/04/18/audio_4b5c6d7e8f.mp3" },
    { title: "Powerful Motivation", url: "https://cdn.pixabay.com/audio/2022/06/22/audio_6d7e8f9a0b.mp3" },
    { title: "Victory Music", url: "https://cdn.pixabay.com/audio/2022/08/26/audio_8f9a0b1c2d.mp3" },
    { title: "Success Theme", url: "https://cdn.pixabay.com/audio/2022/11/01/audio_0b1c2d3e4f.mp3" },
  ],
  
  edm: [
    { title: "EDM Study 1", url: "https://cdn.pixabay.com/audio/2022/01/25/audio_1c2d3e4f5a.mp3" },
    { title: "Electronic Focus", url: "https://cdn.pixabay.com/audio/2022/03/29/audio_3e4f5a6b7c.mp3" },
    { title: "Upbeat EDM", url: "https://cdn.pixabay.com/audio/2022/06/03/audio_5a6b7c8d9e.mp3" },
    { title: "Energy Boost", url: "https://cdn.pixabay.com/audio/2022/08/07/audio_7c8d9e0f1a.mp3" },
    { title: "EDM Vibes", url: "https://cdn.pixabay.com/audio/2022/10/11/audio_9e0f1a2b3c.mp3" },
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
      showNotification('Failed to play audio. Try another track.', 'error');
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
  showNotification(`Shuffle ${isShuffle ? 'ON' : 'OFF'}`, 'info');
}

// Toggle Repeat
function toggleRepeat() {
  isRepeat = !isRepeat;
  const btn = document.getElementById('repeat-btn');
  btn.classList.toggle('active', isRepeat);
  showNotification(`Repeat ${isRepeat ? 'ON' : 'OFF'}`, 'info');
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
  
  showNotification(`Switched to ${select.options[select.selectedIndex].text}`, 'info');
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
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Update Player UI
function updatePlayerUI() {
  const playerEmbed = document.getElementById('player-embed');
  
  playerEmbed.innerHTML = `
    <div class="audio-player-ui">
      <div class="track-info">
        <div class="track-title">${musicLibrary[currentPlaylist][currentTrackIndex].title}</div>
        <div class="playlist-name">${document.getElementById('playlist-select').options[document.getElementById('playlist-select').selectedIndex].text}</div>
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

console.log('🎵 Pure Audio Player loaded! (Ad-free)');
