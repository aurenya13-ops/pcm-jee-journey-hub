// ==================== MUSIC PLAYER WITH REAL EMBEDDED PLAYBACK ====================

const musicPlaylists = {
  lofi: [
    { title: 'Lofi Hip Hop Radio - Beats to Study/Relax', id: 'jfKfPfyJRdk', type: 'youtube' },
    { title: 'Chill Lofi Study Beats', id: '5qap5aO4i9A', type: 'youtube' },
    { title: 'Peaceful Piano Lofi', id: 'lTRiuFIWV54', type: 'youtube' },
    { title: 'Japanese Lofi Mix', id: 'FjHGZj2IjBk', type: 'youtube' },
    { title: 'Rainy Day Lofi', id: 'lP26UCnoH9s', type: 'youtube' }
  ],
  focus: [
    { title: 'Deep Focus - Intense Studying Music', id: 'DWcJFNfaw9c', type: 'youtube' },
    { title: 'Concentration Music for Work', id: 'WPni755-Krg', type: 'youtube' },
    { title: 'Study Music - Brain Power', id: '5yx6BWlEVcY', type: 'youtube' },
    { title: 'Alpha Waves for Focus', id: 'WPni755-Krg', type: 'youtube' },
    { title: 'Binaural Beats Study Music', id: 'n61ULEU7CO0', type: 'youtube' }
  ],
  classical: [
    { title: 'Mozart for Studying and Brain Power', id: 'Rb0UmrCXxVA', type: 'youtube' },
    { title: 'Bach - Classical Music for Studying', id: '6JQm5aSjX6g', type: 'youtube' },
    { title: 'Beethoven - Symphony Collection', id: 't3217H8JppI', type: 'youtube' },
    { title: 'Chopin - Nocturnes', id: 'liTSRH4fix4', type: 'youtube' },
    { title: 'Vivaldi - Four Seasons', id: 'GRxofEmo3HA', type: 'youtube' }
  ],
  ambient: [
    { title: 'Space Ambient Music - Deep Relaxation', id: '1-RW82JF1lY', type: 'youtube' },
    { title: 'Nature Sounds - Forest Ambience', id: 'eKFTSSKCzWA', type: 'youtube' },
    { title: 'Rain Sounds for Sleeping', id: 'q76bMs-NwRk', type: 'youtube' },
    { title: 'Ocean Waves - Calming Sounds', id: 'WHPEKLQID4U', type: 'youtube' },
    { title: 'Thunderstorm Sounds', id: 'nDq6TstdEi8', type: 'youtube' }
  ],
  motivation: [
    { title: 'Epic Motivational Music Mix', id: 'g6zSbfPG0Sc', type: 'youtube' },
    { title: 'Workout Motivation Music', id: 'IdTMDpizis8', type: 'youtube' },
    { title: 'Study Motivation - You Can Do It', id: 'VEe_yIbW64w', type: 'youtube' },
    { title: 'Powerful Motivational Speeches', id: 'ZXsQAXx_ao0', type: 'youtube' },
    { title: 'Success Motivation Mix', id: 'tYzMYcUty6s', type: 'youtube' }
  ],
  edm: [
    { title: 'EDM Study Music - Electronic Focus', id: 'bJmWyZRHGNc', type: 'youtube' },
    { title: 'Chill EDM Gaming Mix', id: 'yAz1cNbkfZ8', type: 'youtube' },
    { title: 'Progressive House Study Mix', id: 'VEe_yIbW64w', type: 'youtube' },
    { title: 'Melodic Dubstep Mix', id: 'n4tK7LYFxI0', type: 'youtube' },
    { title: 'Future Bass Study Music', id: 'VEe_yIbW64w', type: 'youtube' }
  ]
};

let currentPlaylist = 'lofi';
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;
let player = null;

// Initialize YouTube Player API
function initYouTubePlayer() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// YouTube API Ready Callback
window.onYouTubeIframeAPIReady = function() {
  loadTrack(currentTrackIndex);
};

function loadTrack(index) {
  const track = musicPlaylists[currentPlaylist][index];
  const playerEmbed = document.getElementById('player-embed');
  
  // Update track title
  document.getElementById('current-track-title').textContent = track.title;
  
  // Create or update YouTube player
  if (!player) {
    playerEmbed.innerHTML = '<div id="youtube-player"></div>';
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
        onStateChange: onPlayerStateChange
      }
    });
  } else {
    player.loadVideoById(track.id);
  }
  
  currentTrackIndex = index;
  savePlayerState();
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    if (isRepeat) {
      player.playVideo();
    } else {
      nextTrack();
    }
  } else if (event.data === YT.PlayerState.PLAYING) {
    isPlaying = true;
    updatePlayButton();
  } else if (event.data === YT.PlayerState.PAUSED) {
    isPlaying = false;
    updatePlayButton();
  }
}

function togglePlay() {
  if (!player) {
    initYouTubePlayer();
    return;
  }
  
  if (isPlaying) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
}

function nextTrack() {
  if (isShuffle) {
    const randomIndex = Math.floor(Math.random() * musicPlaylists[currentPlaylist].length);
    loadTrack(randomIndex);
  } else {
    const nextIndex = (currentTrackIndex + 1) % musicPlaylists[currentPlaylist].length;
    loadTrack(nextIndex);
  }
  if (isPlaying && player) {
    player.playVideo();
  }
}

function prevTrack() {
  const prevIndex = (currentTrackIndex - 1 + musicPlaylists[currentPlaylist].length) % musicPlaylists[currentPlaylist].length;
  loadTrack(prevIndex);
  if (isPlaying && player) {
    player.playVideo();
  }
}

function changePlaylist() {
  const select = document.getElementById('playlist-select');
  currentPlaylist = select.value;
  currentTrackIndex = 0;
  loadTrack(0);
  savePlayerState();
}

function toggleShuffle() {
  isShuffle = !isShuffle;
  const btn = document.getElementById('shuffle-btn');
  if (isShuffle) {
    btn.style.color = 'var(--primary)';
  } else {
    btn.style.color = 'var(--text-primary)';
  }
  savePlayerState();
}

function toggleRepeat() {
  isRepeat = !isRepeat;
  const btn = document.getElementById('repeat-btn');
  if (isRepeat) {
    btn.style.color = 'var(--primary)';
  } else {
    btn.style.color = 'var(--text-primary)';
  }
  savePlayerState();
}

function toggleMusicPlayer() {
  const playerBody = document.getElementById('player-body');
  const icon = document.getElementById('player-toggle-icon');
  
  if (playerBody.classList.contains('collapsed')) {
    playerBody.classList.remove('collapsed');
    icon.className = 'fas fa-chevron-down';
  } else {
    playerBody.classList.add('collapsed');
    icon.className = 'fas fa-chevron-up';
  }
}

function updatePlayButton() {
  const playBtn = document.getElementById('play-btn');
  const icon = playBtn.querySelector('i');
  
  if (isPlaying) {
    icon.className = 'fas fa-pause';
  } else {
    icon.className = 'fas fa-play';
  }
}

function savePlayerState() {
  const state = {
    playlist: currentPlaylist,
    trackIndex: currentTrackIndex,
    shuffle: isShuffle,
    repeat: isRepeat
  };
  localStorage.setItem('musicPlayerState', JSON.stringify(state));
}

function loadPlayerState() {
  const saved = localStorage.getItem('musicPlayerState');
  if (saved) {
    const state = JSON.parse(saved);
    currentPlaylist = state.playlist || 'lofi';
    currentTrackIndex = state.trackIndex || 0;
    isShuffle = state.shuffle || false;
    isRepeat = state.repeat || false;
    
    document.getElementById('playlist-select').value = currentPlaylist;
    if (isShuffle) document.getElementById('shuffle-btn').style.color = 'var(--primary)';
    if (isRepeat) document.getElementById('repeat-btn').style.color = 'var(--primary)';
  }
}

// Make functions globally accessible
window.togglePlay = togglePlay;
window.nextTrack = nextTrack;
window.prevTrack = prevTrack;
window.changePlaylist = changePlaylist;
window.toggleShuffle = toggleShuffle;
window.toggleRepeat = toggleRepeat;
window.toggleMusicPlayer = toggleMusicPlayer;

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  loadPlayerState();
  initYouTubePlayer();
});
