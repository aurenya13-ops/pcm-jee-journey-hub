// ==================== YOUTUBE MUSIC PLAYER - WORKING ====================

class YouTubeMusicPlayer {
  constructor() {
    this.currentPlaylist = 'lofi_chill';
    this.currentSongIndex = 0;
    this.player = null;
    this.isPlaying = false;
    this.isShuffle = false;
    this.isRepeat = false;
    
    this.loadYouTubeAPI();
  }

  loadYouTubeAPI() {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
      window.onYouTubeIframeAPIReady = () => {
        console.log('✅ YouTube API Ready!');
        this.initPlayer();
      };
    } else {
      this.initPlayer();
    }
  }

  initPlayer() {
    const song = this.getCurrentSong();
    
    this.player = new YT.Player('youtube-player', {
      height: '0',
      width: '0',
      videoId: song.youtubeId,
      playerVars: {
        autoplay: 0,
        controls: 0,
        modestbranding: 1,
        rel: 0
      },
      events: {
        onReady: () => console.log('🎵 Player Ready!'),
        onStateChange: (event) => this.onPlayerStateChange(event),
        onError: (event) => this.onPlayerError(event)
      }
    });
  }

  onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
      this.handleSongEnd();
    } else if (event.data === YT.PlayerState.PLAYING) {
      this.isPlaying = true;
      this.updatePlayButton();
      this.startProgressUpdate();
    } else if (event.data === YT.PlayerState.PAUSED) {
      this.isPlaying = false;
      this.updatePlayButton();
    }
  }

  onPlayerError(event) {
    console.error('Player error:', event.data);
    alert('Error playing song. Skipping to next...');
    this.next();
  }

  getCurrentSong() {
    const playlist = COMPLETE_MUSIC_LIBRARY.playlists[this.currentPlaylist];
    return playlist.songs[this.currentSongIndex];
  }

  play() {
    if (this.player && this.player.playVideo) {
      this.player.playVideo();
    }
  }

  pause() {
    if (this.player && this.player.pauseVideo) {
      this.player.pauseVideo();
    }
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  next() {
    const playlist = COMPLETE_MUSIC_LIBRARY.playlists[this.currentPlaylist];
    
    if (this.isShuffle) {
      this.currentSongIndex = Math.floor(Math.random() * playlist.songs.length);
    } else {
      this.currentSongIndex = (this.currentSongIndex + 1) % playlist.songs.length;
    }
    
    this.loadSong();
  }

  previous() {
    const playlist = COMPLETE_MUSIC_LIBRARY.playlists[this.currentPlaylist];
    this.currentSongIndex = (this.currentSongIndex - 1 + playlist.songs.length) % playlist.songs.length;
    this.loadSong();
  }

  loadSong() {
    const song = this.getCurrentSong();
    if (this.player && this.player.loadVideoById) {
      this.player.loadVideoById(song.youtubeId);
      this.updateNowPlaying();
      if (this.isPlaying) {
        this.play();
      }
    }
  }

  handleSongEnd() {
    if (this.isRepeat) {
      this.play();
    } else {
      this.next();
    }
  }

  toggleShuffle() {
    this.isShuffle = !this.isShuffle;
    this.updateShuffleButton();
  }

  toggleRepeat() {
    this.isRepeat = !this.isRepeat;
    this.updateRepeatButton();
  }

  switchPlaylist(playlistKey) {
    this.currentPlaylist = playlistKey;
    this.currentSongIndex = 0;
    this.loadSong();
    this.renderSongList();
  }

  setVolume(value) {
    if (this.player && this.player.setVolume) {
      this.player.setVolume(value);
    }
  }

  startProgressUpdate() {
    if (this.progressInterval) clearInterval(this.progressInterval);
    
    this.progressInterval = setInterval(() => {
      if (this.player && this.player.getCurrentTime) {
        const current = this.player.getCurrentTime();
        const duration = this.player.getDuration();
        this.updateProgress(current, duration);
      }
    }, 1000);
  }

  updateProgress(current, duration) {
    const progressBar = document.getElementById('progress-bar');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    
    if (progressBar && duration) {
      const percentage = (current / duration) * 100;
      progressBar.style.width = percentage + '%';
    }
    
    if (currentTimeEl) {
      currentTimeEl.textContent = this.formatTime(current);
    }
    
    if (durationEl) {
      durationEl.textContent = this.formatTime(duration);
    }
  }

  formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  updateNowPlaying() {
    const song = this.getCurrentSong();
    const nowPlayingEl = document.getElementById('now-playing');
    
    if (nowPlayingEl) {
      nowPlayingEl.innerHTML = `
        <div class="now-playing-info">
          <div class="song-title">${song.title}</div>
          <div class="song-artist">${song.artist}</div>
        </div>
      `;
    }
    
    // Update active song in list
    document.querySelectorAll('.song-item').forEach((item, index) => {
      if (index === this.currentSongIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  updatePlayButton() {
    const playBtn = document.getElementById('play-btn');
    if (playBtn) {
      playBtn.innerHTML = this.isPlaying 
        ? '<i class="fas fa-pause"></i>' 
        : '<i class="fas fa-play"></i>';
    }
  }

  updateShuffleButton() {
    const shuffleBtn = document.getElementById('shuffle-btn');
    if (shuffleBtn) {
      shuffleBtn.classList.toggle('active', this.isShuffle);
    }
  }

  updateRepeatButton() {
    const repeatBtn = document.getElementById('repeat-btn');
    if (repeatBtn) {
      repeatBtn.classList.toggle('active', this.isRepeat);
    }
  }

  renderSongList() {
    const container = document.querySelector('.song-list .songs');
    if (!container) return;

    const playlist = COMPLETE_MUSIC_LIBRARY.playlists[this.currentPlaylist];
    container.innerHTML = playlist.songs.map((song, index) => `
      <div class="song-item ${index === this.currentSongIndex ? 'active' : ''}"
           onclick="youtubeMusicPlayer.playSongAtIndex(${index})">
        <div class="song-number">${index + 1}</div>
        <div class="song-info">
          <div class="song-title">${song.title}</div>
          <div class="song-artist">${song.artist}</div>
        </div>
        <div class="song-duration">${song.duration}</div>
      </div>
    `).join('');
  }

  playSongAtIndex(index) {
    this.currentSongIndex = index;
    this.loadSong();
    this.play();
  }

  render() {
    const playlist = COMPLETE_MUSIC_LIBRARY.playlists[this.currentPlaylist];
    const currentSong = this.getCurrentSong();

    return `
      <div class="music-player-page">
        <!-- Header -->
        <div class="music-header">
          <h1><i class="fas fa-music"></i> Music Player</h1>
          <p>150+ songs across 8 playlists - Lofi, Motivation, Bollywood, English, Anime, Pokemon & more!</p>
        </div>

        <!-- Playlist Selector -->
        <div class="playlist-selector">
          ${Object.entries(COMPLETE_MUSIC_LIBRARY.playlists).map(([key, pl]) => `
            <button 
              class="playlist-btn ${this.currentPlaylist === key ? 'active' : ''}"
              style="background: ${this.currentPlaylist === key ? pl.color : 'var(--bg-card)'}"
              onclick="youtubeMusicPlayer.switchPlaylist('${key}')"
            >
              ${pl.name}
              <span class="playlist-count">${pl.songs.length} songs</span>
            </button>
          `).join('')}
        </div>

        <!-- Now Playing -->
        <div class="now-playing-card">
          <div class="album-art" style="background: ${playlist.color};">
            <i class="fas fa-music"></i>
          </div>
          <div id="now-playing">
            <div class="now-playing-info">
              <div class="song-title">${currentSong.title}</div>
              <div class="song-artist">${currentSong.artist}</div>
            </div>
          </div>
        </div>

        <!-- Hidden YouTube Player -->
        <div id="youtube-player" style="display: none;"></div>

        <!-- Player Controls -->
        <div class="player-controls">
          <!-- Progress Bar -->
          <div class="progress-container">
            <div class="progress-bg">
              <div id="progress-bar" class="progress-bar"></div>
            </div>
            <div class="time-display">
              <span id="current-time">0:00</span>
              <span id="duration">${currentSong.duration}</span>
            </div>
          </div>

          <!-- Control Buttons -->
          <div class="control-buttons">
            <button id="shuffle-btn" class="control-btn ${this.isShuffle ? 'active' : ''}" 
                    onclick="youtubeMusicPlayer.toggleShuffle()">
              <i class="fas fa-random"></i>
            </button>
            
            <button class="control-btn" onclick="youtubeMusicPlayer.previous()">
              <i class="fas fa-step-backward"></i>
            </button>
            
            <button id="play-btn" class="control-btn play-btn" onclick="youtubeMusicPlayer.togglePlay()">
              <i class="fas fa-${this.isPlaying ? 'pause' : 'play'}"></i>
            </button>
            
            <button class="control-btn" onclick="youtubeMusicPlayer.next()">
              <i class="fas fa-step-forward"></i>
            </button>
            
            <button id="repeat-btn" class="control-btn ${this.isRepeat ? 'active' : ''}" 
                    onclick="youtubeMusicPlayer.toggleRepeat()">
              <i class="fas fa-redo"></i>
            </button>
          </div>

          <!-- Volume Control -->
          <div class="volume-control">
            <i class="fas fa-volume-up"></i>
            <div class="volume-slider">
              <input type="range" min="0" max="100" value="70" 
                     onchange="youtubeMusicPlayer.setVolume(this.value)">
            </div>
          </div>
        </div>

        <!-- Song List -->
        <div class="song-list">
          <h3>${playlist.name} - ${playlist.description}</h3>
          <div class="songs">
            ${playlist.songs.map((song, index) => `
              <div class="song-item ${index === this.currentSongIndex ? 'active' : ''}"
                   onclick="youtubeMusicPlayer.playSongAtIndex(${index})">
                <div class="song-number">${index + 1}</div>
                <div class="song-info">
                  <div class="song-title">${song.title}</div>
                  <div class="song-artist">${song.artist}</div>
                </div>
                <div class="song-duration">${song.duration}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }
}

// Initialize YouTube Music Player
let youtubeMusicPlayer;

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    youtubeMusicPlayer = new YouTubeMusicPlayer();
  });
} else {
  youtubeMusicPlayer = new YouTubeMusicPlayer();
}

console.log('✅ YouTube Music Player Loaded!');
console.log('🎵 150+ Songs Ready to Play!');
