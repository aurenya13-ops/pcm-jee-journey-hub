// ==================== MUSIC PLAYER - 150+ SONGS ====================

let currentPlaylist = 'chill';
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let audioPlayer = null;

// Initialize audio player
function initMusicPlayer() {
  if (!audioPlayer) {
    audioPlayer = new Audio();
    audioPlayer.addEventListener('ended', handleSongEnd);
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('loadedmetadata', updateDuration);
  }
}

// Render music player in main content
function renderMusicPlayer() {
  const container = document.getElementById('music-player-content');
  if (!container) return;
  
  initMusicPlayer();
  
  const playlist = MUSIC_DATA.playlists[currentPlaylist];
  const currentSong = playlist.songs[currentSongIndex];
  
  container.innerHTML = `
    <div class="music-player-page">
      <div class="music-header">
        <h1><i class="fas fa-music"></i> Music Player</h1>
        <p>150+ songs to keep you motivated and peaceful during study</p>
      </div>

      <!-- Playlist Selector -->
      <div class="playlist-selector">
        ${Object.keys(MUSIC_DATA.playlists).map(key => {
          const pl = MUSIC_DATA.playlists[key];
          return `
            <button class="playlist-btn ${currentPlaylist === key ? 'active' : ''}" 
                    onclick="switchPlaylist('${key}')">
              ${pl.name}
              <span class="playlist-count">${pl.songs.length} songs</span>
            </button>
          `;
        }).join('')}
      </div>

      <!-- Now Playing -->
      <div class="now-playing-card">
        <div class="album-art">
          <i class="fas fa-music"></i>
        </div>
        <div class="song-info">
          <h2 id="current-song-title">${currentSong.title}</h2>
          <p id="current-song-artist">${currentSong.artist}</p>
        </div>
        
        <!-- Progress Bar -->
        <div class="progress-container" onclick="seekSong(event)">
          <div class="progress-bar-music" id="progress-bar">
            <div class="progress-fill" id="progress-fill"></div>
          </div>
          <div class="time-display">
            <span id="current-time">0:00</span>
            <span id="total-time">${currentSong.duration}</span>
          </div>
        </div>

        <!-- Controls -->
        <div class="player-controls-main">
          <button class="control-btn" onclick="toggleShuffle()" id="shuffle-btn">
            <i class="fas fa-random"></i>
          </button>
          <button class="control-btn" onclick="previousSong()">
            <i class="fas fa-step-backward"></i>
          </button>
          <button class="control-btn play-btn" onclick="togglePlayPause()" id="play-pause-btn">
            <i class="fas fa-play"></i>
          </button>
          <button class="control-btn" onclick="nextSong()">
            <i class="fas fa-step-forward"></i>
          </button>
          <button class="control-btn" onclick="toggleRepeat()" id="repeat-btn">
            <i class="fas fa-redo"></i>
          </button>
        </div>

        <!-- Volume Control -->
        <div class="volume-control">
          <i class="fas fa-volume-up"></i>
          <input type="range" min="0" max="100" value="70" 
                 onchange="setVolume(this.value)" class="volume-slider">
        </div>
      </div>

      <!-- Song List -->
      <div class="song-list-container">
        <h3><i class="fas fa-list"></i> ${playlist.name} - ${playlist.description}</h3>
        <div class="song-list">
          ${playlist.songs.map((song, index) => `
            <div class="song-item ${index === currentSongIndex ? 'active' : ''}" 
                 onclick="playSongAtIndex(${index})">
              <div class="song-number">${index + 1}</div>
              <div class="song-details">
                <div class="song-title">${song.title}</div>
                <div class="song-artist">${song.artist}</div>
              </div>
              <div class="song-duration">${song.duration}</div>
              ${index === currentSongIndex && isPlaying ? 
                '<i class="fas fa-volume-up playing-icon"></i>' : 
                '<i class="fas fa-play play-icon"></i>'}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Info Note -->
      <div class="music-info-note">
        <i class="fas fa-info-circle"></i>
        <p><strong>Note:</strong> This is a demo player with song metadata. 
        To play actual audio, you'll need to add audio file URLs or integrate with a music API.</p>
      </div>
    </div>
  `;
  
  // Set initial volume
  if (audioPlayer) {
    audioPlayer.volume = 0.7;
  }
}

// Switch playlist
function switchPlaylist(playlistKey) {
  currentPlaylist = playlistKey;
  currentSongIndex = 0;
  isPlaying = false;
  if (audioPlayer) {
    audioPlayer.pause();
  }
  renderMusicPlayer();
  showNotification(`📻 Switched to ${MUSIC_DATA.playlists[playlistKey].name}`, 'success');
}

// Play song at specific index
function playSongAtIndex(index) {
  currentSongIndex = index;
  const playlist = MUSIC_DATA.playlists[currentPlaylist];
  const song = playlist.songs[index];
  
  // Update UI
  document.getElementById('current-song-title').textContent = song.title;
  document.getElementById('current-song-artist').textContent = song.artist;
  
  // Update active state in list
  document.querySelectorAll('.song-item').forEach((item, idx) => {
    if (idx === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  
  // Demo: Show notification (in real app, would load audio)
  showNotification(`🎵 Now Playing: ${song.title} - ${song.artist}`, 'info');
  
  // Simulate playing
  isPlaying = true;
  document.getElementById('play-pause-btn').innerHTML = '<i class="fas fa-pause"></i>';
  
  // In real implementation, would do:
  // audioPlayer.src = song.url;
  // audioPlayer.play();
}

// Toggle play/pause
function togglePlayPause() {
  if (isPlaying) {
    isPlaying = false;
    document.getElementById('play-pause-btn').innerHTML = '<i class="fas fa-play"></i>';
    if (audioPlayer && audioPlayer.src) {
      audioPlayer.pause();
    }
    showNotification('⏸️ Paused', 'info');
  } else {
    isPlaying = true;
    document.getElementById('play-pause-btn').innerHTML = '<i class="fas fa-pause"></i>';
    if (audioPlayer && audioPlayer.src) {
      audioPlayer.play();
    } else {
      playSongAtIndex(currentSongIndex);
    }
  }
}

// Next song
function nextSong() {
  const playlist = MUSIC_DATA.playlists[currentPlaylist];
  
  if (isShuffle) {
    currentSongIndex = Math.floor(Math.random() * playlist.songs.length);
  } else {
    currentSongIndex = (currentSongIndex + 1) % playlist.songs.length;
  }
  
  playSongAtIndex(currentSongIndex);
}

// Previous song
function previousSong() {
  const playlist = MUSIC_DATA.playlists[currentPlaylist];
  
  if (isShuffle) {
    currentSongIndex = Math.floor(Math.random() * playlist.songs.length);
  } else {
    currentSongIndex = (currentSongIndex - 1 + playlist.songs.length) % playlist.songs.length;
  }
  
  playSongAtIndex(currentSongIndex);
}

// Toggle shuffle
function toggleShuffle() {
  isShuffle = !isShuffle;
  const btn = document.getElementById('shuffle-btn');
  if (isShuffle) {
    btn.classList.add('active');
    showNotification('🔀 Shuffle ON', 'success');
  } else {
    btn.classList.remove('active');
    showNotification('🔀 Shuffle OFF', 'info');
  }
}

// Toggle repeat
function toggleRepeat() {
  isRepeat = !isRepeat;
  const btn = document.getElementById('repeat-btn');
  if (isRepeat) {
    btn.classList.add('active');
    showNotification('🔁 Repeat ON', 'success');
  } else {
    btn.classList.remove('active');
    showNotification('🔁 Repeat OFF', 'info');
  }
}

// Set volume
function setVolume(value) {
  if (audioPlayer) {
    audioPlayer.volume = value / 100;
  }
}

// Seek song
function seekSong(event) {
  if (!audioPlayer || !audioPlayer.duration) return;
  
  const progressBar = document.getElementById('progress-bar');
  const rect = progressBar.getBoundingClientRect();
  const percent = (event.clientX - rect.left) / rect.width;
  audioPlayer.currentTime = percent * audioPlayer.duration;
}

// Update progress
function updateProgress() {
  if (!audioPlayer || !audioPlayer.duration) return;
  
  const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  const fill = document.getElementById('progress-fill');
  if (fill) {
    fill.style.width = percent + '%';
  }
  
  const currentTime = document.getElementById('current-time');
  if (currentTime) {
    currentTime.textContent = formatTime(audioPlayer.currentTime);
  }
}

// Update duration
function updateDuration() {
  if (!audioPlayer) return;
  
  const totalTime = document.getElementById('total-time');
  if (totalTime) {
    totalTime.textContent = formatTime(audioPlayer.duration);
  }
}

// Format time
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Handle song end
function handleSongEnd() {
  if (isRepeat) {
    audioPlayer.currentTime = 0;
    audioPlayer.play();
  } else {
    nextSong();
  }
}

console.log('✅ Music Player loaded - 150+ songs ready!');
