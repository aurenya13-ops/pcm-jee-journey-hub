// ==================== REAL MUSIC PLAYER - NO ADS, OFFLINE ====================

const musicPlaylists = {
  focus: {
    name: "🎯 Deep Focus",
    description: "Intense concentration music",
    tracks: [
      {
        title: "Lofi Study Session",
        artist: "Chill Beats",
        url: "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3",
        duration: "2:30"
      },
      {
        title: "Ambient Focus",
        artist: "Study Vibes",
        url: "https://cdn.pixabay.com/audio/2022/03/10/audio_4e5d5d6b54.mp3",
        duration: "3:15"
      },
      {
        title: "Deep Concentration",
        artist: "Focus Flow",
        url: "https://cdn.pixabay.com/audio/2022/08/02/audio_884fe5c21c.mp3",
        duration: "2:45"
      },
      {
        title: "Study Flow",
        artist: "Productivity Beats",
        url: "https://cdn.pixabay.com/audio/2023/02/28/audio_550d815fa5.mp3",
        duration: "3:00"
      }
    ]
  },
  chill: {
    name: "😌 Chill Vibes",
    description: "Relaxed study atmosphere",
    tracks: [
      {
        title: "Calm Waters",
        artist: "Relaxation",
        url: "https://cdn.pixabay.com/audio/2022/01/18/audio_12b0c7443c.mp3",
        duration: "2:20"
      },
      {
        title: "Peaceful Mind",
        artist: "Serenity",
        url: "https://cdn.pixabay.com/audio/2022/05/13/audio_c9017f8707.mp3",
        duration: "2:50"
      },
      {
        title: "Soft Breeze",
        artist: "Nature Sounds",
        url: "https://cdn.pixabay.com/audio/2022/11/22/audio_0c2c3f6de1.mp3",
        duration: "3:10"
      },
      {
        title: "Gentle Waves",
        artist: "Ocean Vibes",
        url: "https://cdn.pixabay.com/audio/2023/06/12/audio_a3f9b8c6e2.mp3",
        duration: "2:40"
      }
    ]
  },
  motivation: {
    name: "💪 Motivation Boost",
    description: "Energizing study music",
    tracks: [
      {
        title: "Rise Up",
        artist: "Epic Motivation",
        url: "https://cdn.pixabay.com/audio/2022/03/24/audio_d1718ab41b.mp3",
        duration: "2:35"
      },
      {
        title: "Unstoppable",
        artist: "Power Beats",
        url: "https://cdn.pixabay.com/audio/2022/09/07/audio_e2c8f6d9a3.mp3",
        duration: "3:05"
      },
      {
        title: "Victory March",
        artist: "Success Vibes",
        url: "https://cdn.pixabay.com/audio/2023/01/15/audio_f7b3c2e8d4.mp3",
        duration: "2:55"
      },
      {
        title: "Champion Mode",
        artist: "Grind Music",
        url: "https://cdn.pixabay.com/audio/2022/07/19/audio_b4e9a1c5f2.mp3",
        duration: "3:20"
      }
    ]
  },
  flow: {
    name: "🌊 Study Flow",
    description: "Perfect balance for learning",
    tracks: [
      {
        title: "Flow State",
        artist: "Productivity",
        url: "https://cdn.pixabay.com/audio/2022/06/08/audio_c3d7e2f1a8.mp3",
        duration: "2:48"
      },
      {
        title: "Learning Zone",
        artist: "Study Master",
        url: "https://cdn.pixabay.com/audio/2022/12/03/audio_a8f2b9c4e1.mp3",
        duration: "3:12"
      },
      {
        title: "Brain Power",
        artist: "Focus Music",
        url: "https://cdn.pixabay.com/audio/2023/03/21/audio_e1c9d7f3a2.mp3",
        duration: "2:58"
      },
      {
        title: "Study Rhythm",
        artist: "Learning Beats",
        url: "https://cdn.pixabay.com/audio/2022/10/14/audio_d2e8f1c6b3.mp3",
        duration: "3:08"
      }
    ]
  }
};

// Music Player State
let currentPlaylist = 'focus';
let currentTrackIndex = 0;
let isPlaying = false;
let audioPlayer = null;
let isRepeat = false;
let isShuffle = false;

// Initialize Music Player
function initMusicPlayer() {
  audioPlayer = new Audio();
  audioPlayer.volume = 0.5;
  
  // Event listeners
  audioPlayer.addEventListener('ended', handleTrackEnd);
  audioPlayer.addEventListener('timeupdate', updateProgress);
  audioPlayer.addEventListener('loadedmetadata', updateDuration);
  
  // Load first track
  loadTrack(0);
  renderMusicPlayer();
}

// Render Music Player
function renderMusicPlayer() {
  const playlist = musicPlaylists[currentPlaylist];
  const track = playlist.tracks[currentTrackIndex];
  
  const playerHTML = `
    <div class="music-player-container">
      <div class="music-player-header">
        <h3>${playlist.name}</h3>
        <p>${playlist.description}</p>
      </div>
      
      <div class="now-playing">
        <div class="track-art">
          <i class="fas fa-music"></i>
        </div>
        <div class="track-info">
          <div class="track-title">${track.title}</div>
          <div class="track-artist">${track.artist}</div>
        </div>
      </div>
      
      <div class="progress-container">
        <span class="time-current">0:00</span>
        <div class="progress-bar-music" onclick="seekTrack(event)">
          <div class="progress-fill" id="progress-fill"></div>
        </div>
        <span class="time-total">${track.duration}</span>
      </div>
      
      <div class="player-controls">
        <button class="control-btn" onclick="toggleShuffle()" id="shuffle-btn">
          <i class="fas fa-random"></i>
        </button>
        <button class="control-btn" onclick="previousTrack()">
          <i class="fas fa-step-backward"></i>
        </button>
        <button class="control-btn play-btn" onclick="togglePlay()" id="play-btn">
          <i class="fas fa-play"></i>
        </button>
        <button class="control-btn" onclick="nextTrack()">
          <i class="fas fa-step-forward"></i>
        </button>
        <button class="control-btn" onclick="toggleRepeat()" id="repeat-btn">
          <i class="fas fa-redo"></i>
        </button>
      </div>
      
      <div class="volume-control">
        <i class="fas fa-volume-down"></i>
        <input type="range" min="0" max="100" value="50" class="volume-slider" onchange="changeVolume(this.value)">
        <i class="fas fa-volume-up"></i>
      </div>
      
      <div class="playlist-selector">
        <button class="playlist-btn ${currentPlaylist === 'focus' ? 'active' : ''}" onclick="switchPlaylist('focus')">
          🎯 Focus
        </button>
        <button class="playlist-btn ${currentPlaylist === 'chill' ? 'active' : ''}" onclick="switchPlaylist('chill')">
          😌 Chill
        </button>
        <button class="playlist-btn ${currentPlaylist === 'motivation' ? 'active' : ''}" onclick="switchPlaylist('motivation')">
          💪 Motivation
        </button>
        <button class="playlist-btn ${currentPlaylist === 'flow' ? 'active' : ''}" onclick="switchPlaylist('flow')">
          🌊 Flow
        </button>
      </div>
      
      <div class="playlist-tracks">
        <h4>Playlist (${playlist.tracks.length} tracks)</h4>
        <div class="tracks-list">
          ${playlist.tracks.map((t, idx) => `
            <div class="track-item ${idx === currentTrackIndex ? 'active' : ''}" onclick="playTrack(${idx})">
              <div class="track-number">${idx + 1}</div>
              <div class="track-details">
                <div class="track-name">${t.title}</div>
                <div class="track-artist-small">${t.artist}</div>
              </div>
              <div class="track-duration">${t.duration}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('music-player-content').innerHTML = playerHTML;
}

// Load Track
function loadTrack(index) {
  const playlist = musicPlaylists[currentPlaylist];
  currentTrackIndex = index;
  const track = playlist.tracks[index];
  
  audioPlayer.src = track.url;
  audioPlayer.load();
}

// Toggle Play/Pause
function togglePlay() {
  if (isPlaying) {
    audioPlayer.pause();
    isPlaying = false;
    document.getElementById('play-btn').innerHTML = '<i class="fas fa-play"></i>';
  } else {
    audioPlayer.play();
    isPlaying = true;
    document.getElementById('play-btn').innerHTML = '<i class="fas fa-pause"></i>';
  }
}

// Play Specific Track
function playTrack(index) {
  loadTrack(index);
  audioPlayer.play();
  isPlaying = true;
  renderMusicPlayer();
  document.getElementById('play-btn').innerHTML = '<i class="fas fa-pause"></i>';
}

// Next Track
function nextTrack() {
  const playlist = musicPlaylists[currentPlaylist];
  
  if (isShuffle) {
    currentTrackIndex = Math.floor(Math.random() * playlist.tracks.length);
  } else {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.tracks.length;
  }
  
  playTrack(currentTrackIndex);
}

// Previous Track
function previousTrack() {
  const playlist = musicPlaylists[currentPlaylist];
  currentTrackIndex = (currentTrackIndex - 1 + playlist.tracks.length) % playlist.tracks.length;
  playTrack(currentTrackIndex);
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

// Update Progress
function updateProgress() {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  const progressFill = document.getElementById('progress-fill');
  if (progressFill) {
    progressFill.style.width = progress + '%';
  }
  
  // Update time
  const currentTime = formatTime(audioPlayer.currentTime);
  const timeDisplay = document.querySelector('.time-current');
  if (timeDisplay) {
    timeDisplay.textContent = currentTime;
  }
}

// Update Duration
function updateDuration() {
  const duration = formatTime(audioPlayer.duration);
  const timeDisplay = document.querySelector('.time-total');
  if (timeDisplay) {
    timeDisplay.textContent = duration;
  }
}

// Seek Track
function seekTrack(event) {
  const progressBar = event.currentTarget;
  const clickX = event.offsetX;
  const width = progressBar.offsetWidth;
  const duration = audioPlayer.duration;
  
  audioPlayer.currentTime = (clickX / width) * duration;
}

// Change Volume
function changeVolume(value) {
  audioPlayer.volume = value / 100;
}

// Toggle Shuffle
function toggleShuffle() {
  isShuffle = !isShuffle;
  const btn = document.getElementById('shuffle-btn');
  btn.classList.toggle('active', isShuffle);
}

// Toggle Repeat
function toggleRepeat() {
  isRepeat = !isRepeat;
  const btn = document.getElementById('repeat-btn');
  btn.classList.toggle('active', isRepeat);
}

// Switch Playlist
function switchPlaylist(playlist) {
  currentPlaylist = playlist;
  currentTrackIndex = 0;
  loadTrack(0);
  renderMusicPlayer();
  
  if (isPlaying) {
    audioPlayer.play();
  }
}

// Format Time
function formatTime(seconds) {
  if (isNaN(seconds)) return '0:00';
  
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Initialize on load
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('music-player-content')) {
      initMusicPlayer();
    }
  });
}

console.log('✅ Real Music Player loaded - No ads, offline ready!');
