// ==================== WORKING MUSIC PLAYER - YOUTUBE API ====================

// Music playlists with real YouTube videos
const musicPlaylists = {
  lofi: {
    name: "☕ Lofi Beats",
    songs: [
      { id: "jfKfPfyJRdk", title: "Lofi Hip Hop Radio - Beats to Study/Relax" },
      { id: "5qap5aO4i9A", title: "Lofi Hip Hop Mix - Beats to Relax/Study" },
      { id: "lTRiuFIWV54", title: "Chill Lofi Study Beats" },
      { id: "DWcJFNfaw9c", title: "Lofi Hip Hop Radio 24/7" }
    ]
  },
  focus: {
    name: "🎯 Deep Focus",
    songs: [
      { id: "5yx6BWlEVcY", title: "Deep Focus Music - Study Music" },
      { id: "2OEL4P1Rz04", title: "Concentration Music for Studying" },
      { id: "WPni755-Krg", title: "Focus Music for Work" },
      { id: "1ZYbU82GVz4", title: "Deep Focus Playlist" }
    ]
  },
  classical: {
    name: "🎹 Classical",
    songs: [
      { id: "jgpJVI3tDbY", title: "Classical Music for Studying & Brain Power" },
      { id: "PJL_mVgT0Ao", title: "Mozart for Studying and Concentration" },
      { id: "Rb0UmrCXxVA", title: "Bach Study Music" },
      { id: "O6txOvK-mAk", title: "Beethoven Classical Music" }
    ]
  },
  ambient: {
    name: "🌙 Ambient",
    songs: [
      { id: "lP26UCnoH9s", title: "Relaxing Ambient Music" },
      { id: "kJQP7kiw5Fk", title: "Ambient Music for Studying" },
      { id: "hHW1oY26kxQ", title: "Space Ambient Music" },
      { id: "UfcAVejslrU", title: "Calm Ambient Soundscape" }
    ]
  }
};

// Player state
let currentPlaylist = 'lofi';
let currentSongIndex = 0;
let player = null;
let isPlayerReady = false;

// Load YouTube IFrame API
function loadYouTubeAPI() {
  if (window.YT) {
    initPlayer();
    return;
  }
  
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// YouTube API ready callback
window.onYouTubeIframeAPIReady = function() {
  console.log('✅ YouTube API Ready');
  initPlayer();
};

// Initialize player
function initPlayer() {
  const currentSong = getCurrentSong();
  
  player = new YT.Player('youtube-player', {
    height: '200',
    width: '100%',
    videoId: currentSong.id,
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

// Player ready
function onPlayerReady(event) {
  isPlayerReady = true;
  console.log('✅ Music Player Ready');
  updateSongDisplay();
}

// Player state change
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    nextSong();
  }
  updatePlayButton();
}

// Get current song
function getCurrentSong() {
  const playlist = musicPlaylists[currentPlaylist];
  return playlist.songs[currentSongIndex];
}

// Update song display
function updateSongDisplay() {
  const song = getCurrentSong();
  const display = document.getElementById('current-song');
  if (display) {
    display.textContent = song.title;
  }
}

// Update play button
function updatePlayButton() {
  const playBtn = document.getElementById('play-btn');
  if (!playBtn || !player) return;
  
  try {
    const state = player.getPlayerState();
    const icon = playBtn.querySelector('i');
    if (icon) {
      icon.className = state === YT.PlayerState.PLAYING ? 'fas fa-pause' : 'fas fa-play';
    }
  } catch (e) {
    console.log('Player not ready');
  }
}

// Toggle play/pause
function togglePlay() {
  if (!player || !isPlayerReady) {
    console.log('Player not ready yet');
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
    console.log('Error toggling play:', e);
  }
}

// Next song
function nextSong() {
  const playlist = musicPlaylists[currentPlaylist];
  currentSongIndex = (currentSongIndex + 1) % playlist.songs.length;
  
  if (player && isPlayerReady) {
    const song = getCurrentSong();
    player.loadVideoById(song.id);
    updateSongDisplay();
  }
}

// Previous song
function prevSong() {
  const playlist = musicPlaylists[currentPlaylist];
  currentSongIndex = (currentSongIndex - 1 + playlist.songs.length) % playlist.songs.length;
  
  if (player && isPlayerReady) {
    const song = getCurrentSong();
    player.loadVideoById(song.id);
    updateSongDisplay();
  }
}

// Change playlist
function changePlaylist() {
  const select = document.getElementById('playlist-select');
  currentPlaylist = select.value;
  currentSongIndex = 0;
  
  if (player && isPlayerReady) {
    const song = getCurrentSong();
    player.loadVideoById(song.id);
    updateSongDisplay();
  }
}

// Toggle player visibility
function togglePlayer() {
  const playerDiv = document.getElementById('music-player');
  const body = playerDiv.querySelector('.player-body');
  
  if (body.style.display === 'none') {
    body.style.display = 'block';
  } else {
    body.style.display = 'none';
  }
}

// Initialize on load
window.addEventListener('load', () => {
  loadYouTubeAPI();
  console.log('✅ Music player initialized');
});

console.log('✅ Music player script loaded');
