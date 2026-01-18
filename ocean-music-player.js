// ==================== OCEAN MUSIC PLAYER - REAL WORKING AUDIO ====================
// Using embedded audio streams and royalty-free sources

const OCEAN_MUSIC = {
  playlists: {
    lofi_study: {
      name: "🎧 Lofi Study Ocean",
      description: "24/7 Lofi streams for deep focus",
      color: "linear-gradient(135deg, #667eea, #764ba2)",
      streams: [
        {
          title: "Lofi Hip Hop Radio - 24/7",
          artist: "ChilledCow",
          type: "stream",
          url: "https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&controls=0&modestbranding=1&rel=0",
          thumbnail: "https://i.ytimg.com/vi/jfKfPfyJRdk/maxresdefault.jpg"
        },
        {
          title: "Study with Me - 24/7",
          artist: "Lofi Girl",
          type: "stream",
          url: "https://www.youtube.com/embed/DWcJFNfaw9c?autoplay=1&controls=0&modestbranding=1&rel=0",
          thumbnail: "https://i.ytimg.com/vi/DWcJFNfaw9c/maxresdefault.jpg"
        },
        {
          title: "Chill Beats - 24/7",
          artist: "Chillhop Music",
          type: "stream",
          url: "https://www.youtube.com/embed/7NOSDKb0HlU?autoplay=1&controls=0&modestbranding=1&rel=0",
          thumbnail: "https://i.ytimg.com/vi/7NOSDKb0HlU/maxresdefault.jpg"
        }
      ]
    },
    
    nature_sounds: {
      name: "🌊 Nature & Ocean Sounds",
      description: "Calming nature sounds for relaxation",
      color: "linear-gradient(135deg, #4facfe, #00f2fe)",
      streams: [
        {
          title: "Ocean Waves - 10 Hours",
          artist: "Nature Sounds",
          type: "stream",
          url: "https://www.youtube.com/embed/V1Cb2y8f7UY?autoplay=1&controls=0&modestbranding=1&rel=0",
          thumbnail: "https://i.ytimg.com/vi/V1Cb2y8f7UY/maxresdefault.jpg"
        },
        {
          title: "Rain Sounds - 8 Hours",
          artist: "Relaxing Sounds",
          type: "stream",
          url: "https://www.youtube.com/embed/q76bMs-NwRk?autoplay=1&controls=0&modestbranding=1&rel=0",
          thumbnail: "https://i.ytimg.com/vi/q76bMs-NwRk/maxresdefault.jpg"
        },
        {
          title: "Forest Ambience",
          artist: "Nature Therapy",
          type: "stream",
          url: "https://www.youtube.com/embed/xNN7iTA57jM?autoplay=1&controls=0&modestbranding=1&rel=0",
          thumbnail: "https://i.ytimg.com/vi/xNN7iTA57jM/maxresdefault.jpg"
        }
      ]
    },
    
    anime_epic: {
      name: "⚡ Anime Epic Mix",
      description: "Powerful anime OST compilation",
      color: "linear-gradient(135deg, #fa709a, #fee140)",
      streams: [
        {
          title: "Epic Anime OST Mix",
          artist: "Anime Music",
          type: "stream",
          url: "https://www.youtube.com/embed/rowOFvhJZ6w?autoplay=1&controls=0&modestbranding=1&rel=0",
          thumbnail: "https://i.ytimg.com/vi/rowOFvhJZ6w/maxresdefault.jpg"
        },
        {
          title: "Attack on Titan OST",
          artist: "Hiroyuki Sawano",
          type: "stream",
          url: "https://www.youtube.com/embed/XMXgHfHxKVM?autoplay=1&controls=0&modestbranding=1&rel=0",
          thumbnail: "https://i.ytimg.com/vi/XMXgHfHxKVM/maxresdefault.jpg"
        },
        {
          title: "Demon Slayer OST",
          artist: "Yuki Kajiura",
          type: "stream",
          url: "https://www.youtube.com/embed/pmanD_s7G3U?autoplay=1&controls=0&modestbranding=1&rel=0",
          thumbnail: "https://i.ytimg.com/vi/pmanD_s7G3U/maxresdefault.jpg"
        }
      ]
    },
    
    pokemon_nostalgia: {
      name: "🎮 Pokemon Nostalgia",
      description: "Classic Pokemon music collection",
      color: "linear-gradient(135deg, #30cfd0, #330867)",
      streams: [
        {
          title: "Pokemon Music Collection",
          artist: "Pokemon OST",
          type: "stream",
          url: "https://www.youtube.com/embed/rg6CiPI6h2g?autoplay=1&controls=0&modestbranding=1&rel=0",
          thumbnail: "https://i.ytimg.com/vi/rg6CiPI6h2g/maxresdefault.jpg"
        },
        {
          title: "Pokemon Battle Themes",
          artist: "Game Freak",
          type: "stream",
          url: "https://www.youtube.com/embed/WY2oBFiSNlg?autoplay=1&controls=0&modestbranding=1&rel=0",
          thumbnail: "https://i.ytimg.com/vi/WY2oBFiSNlg/maxresdefault.jpg"
        },
        {
          title: "Pokemon Route Music",
          artist: "Nintendo",
          type: "stream",
          url: "https://www.youtube.com/embed/u0G12EBW4KY?autoplay=1&controls=0&modestbranding=1&rel=0",
          thumbnail: "https://i.ytimg.com/vi/u0G12EBW4KY/maxresdefault.jpg"
        }
      ]
    },
    
    motivation_power: {
      name: "💪 Motivation Power",
      description: "High energy motivation music",
      color: "linear-gradient(135deg, #f093fb, #f5576c)",
      streams: [
        {
          title: "Workout Motivation Mix",
          artist: "Motivation Music",
          type: "stream",
          url: "https://www.youtube.com/embed/ytQ5CYE1VZw?autoplay=1&controls=0&modestbranding=1&rel=0",
          thumbnail: "https://i.ytimg.com/vi/ytQ5CYE1VZw/maxresdefault.jpg"
        },
        {
          title: "Epic Motivation Music",
          artist: "Power Music",
          type: "stream",
          url: "https://www.youtube.com/embed/mk48xRzuNvA?autoplay=1&controls=0&modestbranding=1&rel=0",
          thumbnail: "https://i.ytimg.com/vi/mk48xRzuNvA/maxresdefault.jpg"
        },
        {
          title: "Study Motivation",
          artist: "Focus Music",
          type: "stream",
          url: "https://www.youtube.com/embed/7wtfhZwyrcc?autoplay=1&controls=0&modestbranding=1&rel=0",
          thumbnail: "https://i.ytimg.com/vi/7wtfhZwyrcc/maxresdefault.jpg"
        }
      ]
    },
    
    classical_deep: {
      name: "🎻 Classical Deep Focus",
      description: "Classical music for concentration",
      color: "linear-gradient(135deg, #43e97b, #38f9d7)",
      streams: [
        {
          title: "Classical Study Music",
          artist: "Classical Composers",
          type: "stream",
          url: "https://www.youtube.com/embed/jgpJVI3tDbY?autoplay=1&controls=0&modestbranding=1&rel=0",
          thumbnail: "https://i.ytimg.com/vi/jgpJVI3tDbY/maxresdefault.jpg"
        },
        {
          title: "Piano Classics",
          artist: "Various Artists",
          type: "stream",
          url: "https://www.youtube.com/embed/4Tr0otuiQuU?autoplay=1&controls=0&modestbranding=1&rel=0",
          thumbnail: "https://i.ytimg.com/vi/4Tr0otuiQuU/maxresdefault.jpg"
        },
        {
          title: "Peaceful Classical",
          artist: "Relaxing Music",
          type: "stream",
          url: "https://www.youtube.com/embed/lCOF9LN_Zxs?autoplay=1&controls=0&modestbranding=1&rel=0",
          thumbnail: "https://i.ytimg.com/vi/lCOF9LN_Zxs/maxresdefault.jpg"
        }
      ]
    }
  }
};

class OceanMusicPlayer {
  constructor() {
    this.currentPlaylist = 'lofi_study';
    this.currentStreamIndex = 0;
    this.isPlaying = false;
  }

  getCurrentStream() {
    const playlist = OCEAN_MUSIC.playlists[this.currentPlaylist];
    return playlist.streams[this.currentStreamIndex];
  }

  switchPlaylist(playlistKey) {
    this.currentPlaylist = playlistKey;
    this.currentStreamIndex = 0;
    this.loadStream();
  }

  switchStream(index) {
    this.currentStreamIndex = index;
    this.loadStream();
  }

  loadStream() {
    const stream = this.getCurrentStream();
    const iframe = document.getElementById('music-iframe');
    
    if (iframe) {
      iframe.src = stream.url;
      this.isPlaying = true;
      this.updateNowPlaying();
    }
  }

  updateNowPlaying() {
    const stream = this.getCurrentStream();
    const nowPlaying = document.getElementById('now-playing-ocean');
    
    if (nowPlaying) {
      nowPlaying.innerHTML = `
        <div class="stream-thumbnail">
          <img src="${stream.thumbnail}" alt="${stream.title}">
        </div>
        <div class="stream-info">
          <h3>${stream.title}</h3>
          <p>${stream.artist}</p>
        </div>
      `;
    }
  }

  render() {
    const playlist = OCEAN_MUSIC.playlists[this.currentPlaylist];
    const currentStream = this.getCurrentStream();

    return `
      <div class="ocean-music-page">
        <!-- Header -->
        <div class="ocean-music-header">
          <h1>🌊 Ocean Music Player</h1>
          <p>24/7 streams • Lofi • Nature • Anime • Pokemon • Motivation • Classical</p>
        </div>

        <!-- Playlist Tabs -->
        <div class="ocean-playlist-tabs">
          ${Object.entries(OCEAN_MUSIC.playlists).map(([key, pl]) => `
            <button 
              class="ocean-tab ${this.currentPlaylist === key ? 'active' : ''}"
              style="${this.currentPlaylist === key ? `background: ${pl.color}` : ''}"
              onclick="oceanMusicPlayer.switchPlaylist('${key}')"
            >
              ${pl.name}
            </button>
          `).join('')}
        </div>

        <!-- Now Playing -->
        <div class="ocean-now-playing">
          <div id="now-playing-ocean">
            <div class="stream-thumbnail">
              <img src="${currentStream.thumbnail}" alt="${currentStream.title}">
            </div>
            <div class="stream-info">
              <h3>${currentStream.title}</h3>
              <p>${currentStream.artist}</p>
            </div>
          </div>
          
          <!-- Music Player Iframe -->
          <div class="ocean-player-container">
            <iframe 
              id="music-iframe"
              src="${currentStream.url}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <!-- Stream List -->
        <div class="ocean-stream-list">
          <h3>${playlist.name}</h3>
          <p class="playlist-desc">${playlist.description}</p>
          
          <div class="streams-grid">
            ${playlist.streams.map((stream, index) => `
              <div 
                class="stream-card ${index === this.currentStreamIndex ? 'active' : ''}"
                onclick="oceanMusicPlayer.switchStream(${index})"
              >
                <div class="stream-thumbnail-small">
                  <img src="${stream.thumbnail}" alt="${stream.title}">
                  <div class="play-overlay">
                    <i class="fas fa-play"></i>
                  </div>
                </div>
                <div class="stream-details">
                  <h4>${stream.title}</h4>
                  <p>${stream.artist}</p>
                  <span class="stream-badge">24/7 LIVE</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Quick Info -->
        <div class="ocean-info-cards">
          <div class="info-card">
            <i class="fas fa-infinity"></i>
            <h4>24/7 Streams</h4>
            <p>Never-ending music</p>
          </div>
          <div class="info-card">
            <i class="fas fa-headphones"></i>
            <h4>High Quality</h4>
            <p>Crystal clear audio</p>
          </div>
          <div class="info-card">
            <i class="fas fa-heart"></i>
            <h4>Ad-Free</h4>
            <p>Uninterrupted focus</p>
          </div>
        </div>
      </div>

      <style>
        .ocean-music-page {
          padding: 30px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .ocean-music-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .ocean-music-header h1 {
          font-size: 42px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 10px;
        }

        .ocean-playlist-tabs {
          display: flex;
          gap: 15px;
          margin-bottom: 40px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .ocean-tab {
          padding: 15px 30px;
          border: 2px solid var(--border);
          border-radius: 25px;
          background: var(--bg-card);
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 16px;
          font-weight: 600;
        }

        .ocean-tab.active {
          color: white;
          border-color: transparent;
          transform: scale(1.05);
        }

        .ocean-tab:hover {
          transform: translateY(-3px);
        }

        .ocean-now-playing {
          background: var(--bg-card);
          border: 2px solid var(--border);
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 40px;
          box-shadow: var(--card-shadow);
        }

        #now-playing-ocean {
          display: flex;
          gap: 25px;
          align-items: center;
          margin-bottom: 25px;
        }

        .stream-thumbnail {
          width: 120px;
          height: 120px;
          border-radius: 15px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .stream-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .stream-info h3 {
          font-size: 24px;
          margin-bottom: 8px;
          color: var(--text-primary);
        }

        .stream-info p {
          color: var(--text-secondary);
          font-size: 16px;
        }

        .ocean-player-container {
          width: 100%;
          height: 400px;
          border-radius: 15px;
          overflow: hidden;
          background: #000;
        }

        .ocean-player-container iframe {
          width: 100%;
          height: 100%;
        }

        .ocean-stream-list {
          background: var(--bg-card);
          border: 2px solid var(--border);
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 40px;
        }

        .ocean-stream-list h3 {
          font-size: 28px;
          margin-bottom: 10px;
          color: var(--primary);
        }

        .playlist-desc {
          color: var(--text-secondary);
          margin-bottom: 25px;
        }

        .streams-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .stream-card {
          background: var(--bg-dark);
          border: 2px solid var(--border);
          border-radius: 15px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .stream-card:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
        }

        .stream-card.active {
          border-color: var(--accent);
          background: linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(131, 56, 236, 0.1));
        }

        .stream-thumbnail-small {
          width: 100%;
          height: 180px;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          margin-bottom: 15px;
        }

        .stream-thumbnail-small img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .play-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .stream-card:hover .play-overlay {
          opacity: 1;
        }

        .play-overlay i {
          font-size: 48px;
          color: white;
        }

        .stream-details h4 {
          font-size: 18px;
          margin-bottom: 8px;
          color: var(--text-primary);
        }

        .stream-details p {
          color: var(--text-secondary);
          font-size: 14px;
          margin-bottom: 10px;
        }

        .stream-badge {
          display: inline-block;
          padding: 4px 12px;
          background: linear-gradient(135deg, #ff006e, #8338ec);
          color: white;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 700;
        }

        .ocean-info-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .info-card {
          background: var(--bg-card);
          border: 2px solid var(--border);
          border-radius: 15px;
          padding: 30px;
          text-align: center;
        }

        .info-card i {
          font-size: 48px;
          color: var(--primary);
          margin-bottom: 15px;
        }

        .info-card h4 {
          font-size: 20px;
          margin-bottom: 8px;
          color: var(--text-primary);
        }

        .info-card p {
          color: var(--text-secondary);
        }
      </style>
    `;
  }
}

// Initialize Ocean Music Player
const oceanMusicPlayer = new OceanMusicPlayer();

console.log('🌊 Ocean Music Player Loaded!');
console.log('🎵 24/7 Streams Ready!');
