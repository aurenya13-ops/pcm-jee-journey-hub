// ==================== REAL AUDIO PLAYER - ACTUAL MP3 FILES ====================
// Using royalty-free MP3 files from various sources

const REAL_AUDIO_LIBRARY = {
  playlists: {
    lofi_chill: {
      name: "🎧 Lofi Chill Beats",
      description: "Relaxing lofi hip hop for study",
      color: "linear-gradient(135deg, #667eea, #764ba2)",
      cover: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=500&q=80",
      songs: [
        {
          title: "Lofi Study",
          artist: "Chill Beats",
          duration: "3:24",
          url: "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3",
          cover: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=300&q=80"
        },
        {
          title: "Calm Piano",
          artist: "Peaceful Music",
          duration: "2:45",
          url: "https://cdn.pixabay.com/audio/2022/03/10/audio_4e3f3d5a27.mp3",
          cover: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&q=80"
        },
        {
          title: "Coffee Shop",
          artist: "Ambient Sounds",
          duration: "4:12",
          url: "https://cdn.pixabay.com/audio/2022/08/02/audio_884fe25c21.mp3",
          cover: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&q=80"
        },
        {
          title: "Night City",
          artist: "Urban Beats",
          duration: "3:56",
          url: "https://cdn.pixabay.com/audio/2023/02/28/audio_c91e16c9c7.mp3",
          cover: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=300&q=80"
        },
        {
          title: "Rainy Day",
          artist: "Nature Sounds",
          duration: "5:20",
          url: "https://cdn.pixabay.com/audio/2022/05/13/audio_c2eb9eb3ff.mp3",
          cover: "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=300&q=80"
        }
      ]
    },
    
    motivation: {
      name: "💪 Motivation Beats",
      description: "High energy motivation music",
      color: "linear-gradient(135deg, #f093fb, #f5576c)",
      cover: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&q=80",
      songs: [
        {
          title: "Epic Motivation",
          artist: "Power Music",
          duration: "3:45",
          url: "https://cdn.pixabay.com/audio/2022/03/15/audio_c8a891c14c.mp3",
          cover: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=300&q=80"
        },
        {
          title: "Workout Energy",
          artist: "Gym Beats",
          duration: "4:20",
          url: "https://cdn.pixabay.com/audio/2022/10/25/audio_3836c5a8f1.mp3",
          cover: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&q=80"
        },
        {
          title: "Rise Up",
          artist: "Inspiring Sounds",
          duration: "3:30",
          url: "https://cdn.pixabay.com/audio/2023/06/12/audio_1f9c9f6ff1.mp3",
          cover: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=300&q=80"
        }
      ]
    },
    
    nature: {
      name: "🌊 Nature Sounds",
      description: "Calming nature ambience",
      color: "linear-gradient(135deg, #4facfe, #00f2fe)",
      cover: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80",
      songs: [
        {
          title: "Ocean Waves",
          artist: "Nature",
          duration: "10:00",
          url: "https://cdn.pixabay.com/audio/2022/06/07/audio_c2c0d0b3f0.mp3",
          cover: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=300&q=80"
        },
        {
          title: "Forest Birds",
          artist: "Wildlife",
          duration: "8:30",
          url: "https://cdn.pixabay.com/audio/2022/03/24/audio_d1718ab41b.mp3",
          cover: "https://images.unsplash.com/photo-1511497584788-876760111969?w=300&q=80"
        },
        {
          title: "Rain Thunder",
          artist: "Storm Sounds",
          duration: "12:00",
          url: "https://cdn.pixabay.com/audio/2021/08/04/audio_12b0c7443c.mp3",
          cover: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=300&q=80"
        }
      ]
    },
    
    focus: {
      name: "🎯 Deep Focus",
      description: "Concentration and productivity",
      color: "linear-gradient(135deg, #43e97b, #38f9d7)",
      cover: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&q=80",
      songs: [
        {
          title: "Focus Flow",
          artist: "Productivity",
          duration: "4:15",
          url: "https://cdn.pixabay.com/audio/2022/11/22/audio_0c2dd8dc52.mp3",
          cover: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=300&q=80"
        },
        {
          title: "Study Mode",
          artist: "Concentration",
          duration: "5:00",
          url: "https://cdn.pixabay.com/audio/2023/01/10/audio_1fb18be4f6.mp3",
          cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&q=80"
        },
        {
          title: "Deep Work",
          artist: "Focus Music",
          duration: "6:30",
          url: "https://cdn.pixabay.com/audio/2022/09/05/audio_49f6cfaa8f.mp3",
          cover: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=300&q=80"
        }
      ]
    }
  }
};

class RealAudioPlayer {
  constructor() {
    this.audio = new Audio();
    this.currentPlaylist = 'lofi_chill';
    this.currentSongIndex = 0;
    this.isPlaying = false;
    this.isShuffle = false;
    this.isRepeat = false;
    this.volume = 0.7;
    
    this.setupAudio();
  }

  setupAudio() {
    this.audio.volume = this.volume;
    
    this.audio.addEventListener('ended', () => {
      if (this.isRepeat) {
        this.play();
      } else {
        this.next();
      }
    });
    
    this.audio.addEventListener('timeupdate', () => {
      this.updateProgress();
    });
    
    this.audio.addEventListener('loadedmetadata', () => {
      this.updateDuration();
    });
  }

  getCurrentSong() {
    const playlist = REAL_AUDIO_LIBRARY.playlists[this.currentPlaylist];
    return playlist.songs[this.currentSongIndex];
  }

  loadSong() {
    const song = this.getCurrentSong();
    this.audio.src = song.url;
    this.updateNowPlaying();
  }

  play() {
    this.audio.play();
    this.isPlaying = true;
    this.updatePlayButton();
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
    this.updatePlayButton();
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  next() {
    const playlist = REAL_AUDIO_LIBRARY.playlists[this.currentPlaylist];
    
    if (this.isShuffle) {
      this.currentSongIndex = Math.floor(Math.random() * playlist.songs.length);
    } else {
      this.currentSongIndex = (this.currentSongIndex + 1) % playlist.songs.length;
    }
    
    this.loadSong();
    if (this.isPlaying) this.play();
  }

  previous() {
    const playlist = REAL_AUDIO_LIBRARY.playlists[this.currentPlaylist];
    this.currentSongIndex = (this.currentSongIndex - 1 + playlist.songs.length) % playlist.songs.length;
    this.loadSong();
    if (this.isPlaying) this.play();
  }

  switchPlaylist(playlistKey) {
    this.currentPlaylist = playlistKey;
    this.currentSongIndex = 0;
    this.loadSong();
    this.renderSongList();
  }

  playSong(index) {
    this.currentSongIndex = index;
    this.loadSong();
    this.play();
  }

  setVolume(value) {
    this.volume = value / 100;
    this.audio.volume = this.volume;
  }

  toggleShuffle() {
    this.isShuffle = !this.isShuffle;
    document.getElementById('shuffle-btn')?.classList.toggle('active', this.isShuffle);
  }

  toggleRepeat() {
    this.isRepeat = !this.isRepeat;
    document.getElementById('repeat-btn')?.classList.toggle('active', this.isRepeat);
  }

  updateNowPlaying() {
    const song = this.getCurrentSong();
    const nowPlaying = document.getElementById('now-playing-real');
    
    if (nowPlaying) {
      nowPlaying.innerHTML = `
        <img src="${song.cover}" alt="${song.title}">
        <div class="song-details">
          <h3>${song.title}</h3>
          <p>${song.artist}</p>
        </div>
      `;
    }
    
    this.renderSongList();
  }

  updatePlayButton() {
    const playBtn = document.getElementById('play-btn-real');
    if (playBtn) {
      playBtn.innerHTML = this.isPlaying 
        ? '<i class="fas fa-pause"></i>' 
        : '<i class="fas fa-play"></i>';
    }
  }

  updateProgress() {
    const current = this.audio.currentTime;
    const duration = this.audio.duration;
    
    const progressBar = document.getElementById('progress-fill');
    const currentTime = document.getElementById('current-time-real');
    
    if (progressBar && duration) {
      const percentage = (current / duration) * 100;
      progressBar.style.width = percentage + '%';
    }
    
    if (currentTime) {
      currentTime.textContent = this.formatTime(current);
    }
  }

  updateDuration() {
    const durationEl = document.getElementById('duration-real');
    if (durationEl) {
      durationEl.textContent = this.formatTime(this.audio.duration);
    }
  }

  formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  renderSongList() {
    const container = document.getElementById('song-list-real');
    if (!container) return;

    const playlist = REAL_AUDIO_LIBRARY.playlists[this.currentPlaylist];
    container.innerHTML = playlist.songs.map((song, index) => `
      <div class="song-item-real ${index === this.currentSongIndex ? 'active' : ''}"
           onclick="realAudioPlayer.playSong(${index})">
        <img src="${song.cover}" alt="${song.title}">
        <div class="song-info-real">
          <h4>${song.title}</h4>
          <p>${song.artist}</p>
        </div>
        <span class="duration">${song.duration}</span>
        ${index === this.currentSongIndex && this.isPlaying ? 
          '<i class="fas fa-volume-up playing-icon"></i>' : 
          '<i class="fas fa-play play-icon"></i>'}
      </div>
    `).join('');
  }

  render() {
    const playlist = REAL_AUDIO_LIBRARY.playlists[this.currentPlaylist];
    const currentSong = this.getCurrentSong();

    return `
      <div class="real-audio-player">
        <h1 class="player-title">🎵 Real Audio Player</h1>
        <p class="player-subtitle">Actual MP3 files • No YouTube • Pure audio experience</p>

        <!-- Playlist Tabs -->
        <div class="playlist-tabs-real">
          ${Object.entries(REAL_AUDIO_LIBRARY.playlists).map(([key, pl]) => `
            <button 
              class="playlist-tab-real ${this.currentPlaylist === key ? 'active' : ''}"
              style="${this.currentPlaylist === key ? `background: ${pl.color}` : ''}"
              onclick="realAudioPlayer.switchPlaylist('${key}')">
              ${pl.name}
            </button>
          `).join('')}
        </div>

        <!-- Now Playing -->
        <div class="now-playing-card-real">
          <div id="now-playing-real" class="now-playing-real">
            <img src="${currentSong.cover}" alt="${currentSong.title}">
            <div class="song-details">
              <h3>${currentSong.title}</h3>
              <p>${currentSong.artist}</p>
            </div>
          </div>

          <!-- Progress Bar -->
          <div class="progress-container-real">
            <div class="progress-bar-real">
              <div id="progress-fill" class="progress-fill"></div>
            </div>
            <div class="time-display-real">
              <span id="current-time-real">0:00</span>
              <span id="duration-real">${currentSong.duration}</span>
            </div>
          </div>

          <!-- Controls -->
          <div class="controls-real">
            <button id="shuffle-btn" class="control-btn-real ${this.isShuffle ? 'active' : ''}" 
                    onclick="realAudioPlayer.toggleShuffle()">
              <i class="fas fa-random"></i>
            </button>
            
            <button class="control-btn-real" onclick="realAudioPlayer.previous()">
              <i class="fas fa-step-backward"></i>
            </button>
            
            <button id="play-btn-real" class="control-btn-real play-btn-real" 
                    onclick="realAudioPlayer.togglePlay()">
              <i class="fas fa-${this.isPlaying ? 'pause' : 'play'}"></i>
            </button>
            
            <button class="control-btn-real" onclick="realAudioPlayer.next()">
              <i class="fas fa-step-forward"></i>
            </button>
            
            <button id="repeat-btn" class="control-btn-real ${this.isRepeat ? 'active' : ''}" 
                    onclick="realAudioPlayer.toggleRepeat()">
              <i class="fas fa-redo"></i>
            </button>
          </div>

          <!-- Volume -->
          <div class="volume-control-real">
            <i class="fas fa-volume-down"></i>
            <input type="range" min="0" max="100" value="70" 
                   oninput="realAudioPlayer.setVolume(this.value)">
            <i class="fas fa-volume-up"></i>
          </div>
        </div>

        <!-- Song List -->
        <div class="song-list-container-real">
          <h3>${playlist.name}</h3>
          <p class="playlist-desc-real">${playlist.description}</p>
          <div id="song-list-real" class="song-list-real"></div>
        </div>
      </div>
    `;
  }
}

// Initialize
const realAudioPlayer = new RealAudioPlayer();

console.log('🎵 Real Audio Player Loaded!');
console.log('✅ Actual MP3 files - No YouTube!');
