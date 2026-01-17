# 🎵 Music Player Guide - Add Your Own Songs (Ad-Free)

## 🎯 Current Status

Your music player is now **100% AD-FREE** using direct MP3 files instead of YouTube embeds!

Currently using **royalty-free music from Bensound.com** (30 tracks across 6 playlists).

---

## 📥 How to Add Your Own Music

### **Method 1: Download & Upload to GitHub (Recommended)**

#### Step 1: Download Royalty-Free Music
Get free MP3s from these sites:

1. **Pixabay Music** - https://pixabay.com/music/
   - 100% free, no attribution required
   - High quality MP3s
   - Huge library

2. **Chosic** - https://www.chosic.com/free-music/all/
   - Royalty-free music
   - Multiple genres
   - Easy download

3. **Free Music Archive** - https://freemusicarchive.org/
   - Creative Commons music
   - Diverse collection
   - High quality

4. **Bensound** - https://www.bensound.com/
   - Currently using this
   - Free with attribution
   - Professional quality

5. **Incompetech** - https://incompetech.com/music/
   - Kevin MacLeod's music
   - Free with attribution
   - Massive library

#### Step 2: Upload to GitHub Repo

```bash
# Clone your repo
git clone https://github.com/aurenya13-ops/pcm-jee-journey-hub.git
cd pcm-jee-journey-hub

# Create music folder
mkdir music

# Add your MP3 files
cp /path/to/your/songs/*.mp3 music/

# Commit and push
git add music/
git commit -m "Add music files"
git push
```

#### Step 3: Update music-player.js

Open `music-player.js` and update the URLs:

```javascript
const musicLibrary = {
  lofi: [
    { 
      title: "Your Song Name", 
      url: "https://aurenya13-ops.github.io/pcm-jee-journey-hub/music/your-song.mp3",
      artist: "Artist Name"
    },
    // Add more songs...
  ],
  // Other playlists...
};
```

---

### **Method 2: Use Free Hosting Services**

Upload MP3s to:

1. **GitHub Releases** (up to 2GB per file)
2. **Internet Archive** - https://archive.org/
3. **SoundCloud** (get direct MP3 link)
4. **Dropbox** (get direct link)

Then update URLs in `music-player.js`.

---

### **Method 3: Use Direct Links from Free Music Sites**

Some sites allow direct linking:

```javascript
// Example with Pixabay
{
  title: "Lofi Study",
  url: "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3",
  artist: "Pixabay"
}
```

**Note:** Check each site's terms of service for direct linking.

---

## 🎨 Customize Playlists

### Add New Playlist

In `music-player.js`:

```javascript
const musicLibrary = {
  lofi: [...],
  focus: [...],
  // Add new playlist
  jazz: [
    { title: "Jazz Song 1", url: "...", artist: "..." },
    { title: "Jazz Song 2", url: "...", artist: "..." },
  ]
};
```

In `index.html`, add option:

```html
<select id="playlist-select" onchange="changePlaylist()">
  <option value="lofi">☕ Lofi Beats</option>
  <option value="focus">🎯 Deep Focus</option>
  <!-- Add new option -->
  <option value="jazz">🎷 Jazz</option>
</select>
```

---

## 📝 Music File Requirements

- **Format:** MP3 (recommended), OGG, WAV
- **Size:** Keep under 10MB per file for fast loading
- **Bitrate:** 128-320 kbps
- **Sample Rate:** 44.1 kHz

---

## 🎵 Recommended Free Music Sources

### **For Study/Focus:**
- Lofi Girl (download from Pixabay)
- Chillhop Music
- Ambient music from Free Music Archive

### **For Motivation:**
- Epic music from Incompetech
- Upbeat tracks from Bensound

### **For Classical:**
- Public domain classical from Musopen
- Free Music Archive classical section

---

## ⚠️ Important Notes

### **Copyright:**
- Only use royalty-free or Creative Commons music
- Check license requirements (some need attribution)
- Never use copyrighted music without permission

### **Attribution:**
If using Bensound (current):
```html
<!-- Add to your page footer -->
<small>Music by Bensound.com</small>
```

### **File Size:**
- GitHub repos have 1GB limit
- Keep total music under 500MB
- Use compressed MP3s (128-192 kbps is fine for study music)

---

## 🚀 Quick Start Example

### Download 5 Lofi Songs from Pixabay:

1. Go to https://pixabay.com/music/search/lofi/
2. Download 5 songs (click download button)
3. Rename them: `lofi-1.mp3`, `lofi-2.mp3`, etc.
4. Upload to GitHub repo in `music/` folder
5. Update `music-player.js`:

```javascript
lofi: [
  { 
    title: "Chill Lofi 1", 
    url: "https://aurenya13-ops.github.io/pcm-jee-journey-hub/music/lofi-1.mp3",
    artist: "Pixabay"
  },
  { 
    title: "Chill Lofi 2", 
    url: "https://aurenya13-ops.github.io/pcm-jee-journey-hub/music/lofi-2.mp3",
    artist: "Pixabay"
  },
  // ... add all 5
]
```

6. Commit and push!

---

## 🎉 Benefits of This Approach

✅ **No Ads** - Pure audio, no YouTube ads
✅ **Offline Ready** - Can work offline with service worker
✅ **Fast Loading** - Direct MP3 files load quickly
✅ **Full Control** - You choose exactly what plays
✅ **No API Keys** - No YouTube API needed
✅ **Privacy** - No tracking from YouTube
✅ **Customizable** - Add any music you want

---

## 🔧 Troubleshooting

### Music Not Playing?
1. Check browser console for errors
2. Verify MP3 URL is accessible (open in new tab)
3. Check CORS settings (GitHub Pages should work fine)
4. Try different browser

### Slow Loading?
1. Compress MP3 files (use Audacity or online tools)
2. Reduce bitrate to 128 kbps
3. Use shorter songs (3-5 minutes)

### CORS Errors?
1. Make sure files are on same domain (GitHub Pages)
2. Or use CDN that allows CORS
3. Add `crossOrigin="anonymous"` in audio player (already added)

---

## 📞 Need Help?

Check the console for errors:
- Press `F12` in browser
- Go to Console tab
- Look for red errors

---

**Happy Listening! 🎵**

*No ads, just pure focus music for your studies!*
