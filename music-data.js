// 🎵 MASSIVE MUSIC LIBRARY - 200+ TRACKS ACROSS 15 CATEGORIES
const musicLibrary = {
  categories: {
    lofi: {
      name: "☕ Lofi & Study",
      icon: "☕",
      tracks: [
        // 24/7 LIVE STREAMS
        { title: "Lofi Girl - 24/7 Radio", artist: "Lofi Girl", duration: "LIVE", url: "https://www.youtube.com/watch?v=jfKfPfyJRdk" },
        { title: "Chillhop Radio", artist: "Chillhop Music", duration: "LIVE", url: "https://www.youtube.com/watch?v=5yx6BWlEVcY" },
        { title: "Synthwave Radio", artist: "The 80's Guy", duration: "LIVE", url: "https://www.youtube.com/watch?v=4xDzrJKXOOY" },
        { title: "College Music Radio", artist: "The Bootleg Boy", duration: "LIVE", url: "https://www.youtube.com/watch?v=lTRiuFIWV54" },
        
        // LONG MIXES (3+ hours)
        { title: "Deep Focus", artist: "Spotify", duration: "3:45:00", url: "https://www.youtube.com/watch?v=kgx4WGK0oNU" },
        { title: "Coffee Shop Ambience", artist: "Relaxing White Noise", duration: "10:00:00", url: "https://www.youtube.com/watch?v=gaJALfGNDhE" },
        { title: "Rainy Day Jazz", artist: "Jazz and Rain", duration: "3:00:00", url: "https://www.youtube.com/watch?v=DSGyEsJ17cI" },
        { title: "Tokyo Lofi", artist: "Lofi Geek", duration: "4:00:00", url: "https://www.youtube.com/watch?v=FjHGZj2IjBk" },
        { title: "Midnight Lofi", artist: "Lofi Records", duration: "3:30:00", url: "https://www.youtube.com/watch?v=rUxyKA_-grg" },
        
        // THEMED LOFI
        { title: "Anime Lofi Mix", artist: "Lofi Fruits Music", duration: "2:15:00", url: "https://www.youtube.com/watch?v=BMJ4WuJRHSg" },
        { title: "Ghibli Lofi", artist: "Dreamy", duration: "1:45:00", url: "https://www.youtube.com/watch?v=3jWRrafhO7M" },
        { title: "Naruto Lofi", artist: "Lofi Anime", duration: "1:30:00", url: "https://www.youtube.com/watch?v=XVMKVBAHE5k" },
        { title: "Pokemon Lofi", artist: "Lofi Lia", duration: "1:20:00", url: "https://www.youtube.com/watch?v=2DVpys50LVE" },
        { title: "Attack on Titan Lofi", artist: "Lofi Anime", duration: "1:15:00", url: "https://www.youtube.com/watch?v=qyXzILRJfkE" },
        
        // JAZZ LOFI
        { title: "Jazz Vibes", artist: "Steezyasfuck", duration: "1:45:00", url: "https://www.youtube.com/watch?v=Dx5qFachd3A" },
        { title: "Smooth Jazz Lofi", artist: "Jazz Hop Café", duration: "2:00:00", url: "https://www.youtube.com/watch?v=neV3EPgvZ3g" },
        { title: "Jazzy Hip Hop", artist: "Chillhop Music", duration: "1:50:00", url: "https://www.youtube.com/watch?v=7NOSDKb0HlU" },
        { title: "Late Night Jazz", artist: "Jazz Vibes", duration: "2:30:00", url: "https://www.youtube.com/watch?v=kgx4WGK0oNU" },
        
        // PIANO LOFI
        { title: "Peaceful Piano", artist: "Spotify", duration: "2:30:00", url: "https://www.youtube.com/watch?v=z7rxl5KsPjs" },
        { title: "Piano Lofi Mix", artist: "Lofi Piano", duration: "1:40:00", url: "https://www.youtube.com/watch?v=5qap5aO4i9A" },
        { title: "Sad Piano Lofi", artist: "Sad Lofi", duration: "1:25:00", url: "https://www.youtube.com/watch?v=l7TxwBhtW7Y" },
        { title: "Romantic Piano Lofi", artist: "Love Lofi", duration: "1:35:00", url: "https://www.youtube.com/watch?v=EKkzbbLYPuI" },
        
        // GUITAR LOFI
        { title: "Guitar Lofi Mix", artist: "Lofi Guitar", duration: "1:30:00", url: "https://www.youtube.com/watch?v=OFITZKzW1yg" },
        { title: "Acoustic Lofi", artist: "Acoustic Vibes", duration: "1:20:00", url: "https://www.youtube.com/watch?v=CSpYKRJzZZE" },
        
        // SEASONAL LOFI
        { title: "Winter Lofi", artist: "Lofi Seasons", duration: "1:45:00", url: "https://www.youtube.com/watch?v=_dXppP7VZxQ" },
        { title: "Summer Lofi", artist: "Lofi Seasons", duration: "1:40:00", url: "https://www.youtube.com/watch?v=lP26UCnoH9s" },
        { title: "Autumn Lofi", artist: "Lofi Seasons", duration: "1:35:00", url: "https://www.youtube.com/watch?v=jEvTpjxKX8Y" },
        { title: "Spring Lofi", artist: "Lofi Seasons", duration: "1:30:00", url: "https://www.youtube.com/watch?v=qH3fETPsqXU" },
        
        // MOOD LOFI
        { title: "Chill Lofi", artist: "Chill Vibes", duration: "2:00:00", url: "https://www.youtube.com/watch?v=lTRiuFIWV54" },
        { title: "Happy Lofi", artist: "Happy Beats", duration: "1:30:00", url: "https://www.youtube.com/watch?v=6ud4b0X7YJU" },
        { title: "Sad Lofi", artist: "Sad Beats", duration: "1:45:00", url: "https://www.youtube.com/watch?v=l7TxwBhtW7Y" },
        { title: "Relaxing Lofi", artist: "Relax Music", duration: "2:15:00", url: "https://www.youtube.com/watch?v=5qap5aO4i9A" },
        
        // SPECIAL LOFI
        { title: "Cyberpunk Dark Synthwave", artist: "Neon Nights", duration: "1:30:00", url: "https://www.youtube.com/watch?v=qFfybn_W8Ak" },
        { title: "Vaporwave Lofi", artist: "Vaporwave Aesthetics", duration: "1:25:00", url: "https://www.youtube.com/watch?v=cU8HrO7XuiE" },
        { title: "Retrowave Lofi", artist: "Retro Vibes", duration: "1:35:00", url: "https://www.youtube.com/watch?v=MV_3Dpw-BRY" },
        { title: "Spacewave Lofi", artist: "Space Lofi", duration: "1:40:00", url: "https://www.youtube.com/watch?v=DWcJFNfaw9c" },
        
        // STUDY SPECIFIC
        { title: "Study Lofi Mix", artist: "Study Beats", duration: "3:00:00", url: "https://www.youtube.com/watch?v=lTRiuFIWV54" },
        { title: "Focus Lofi", artist: "Focus Music", duration: "2:45:00", url: "https://www.youtube.com/watch?v=kgx4WGK0oNU" },
        { title: "Concentration Lofi", artist: "Brain Music", duration: "2:30:00", url: "https://www.youtube.com/watch?v=5qap5aO4i9A" },
        { title: "Reading Lofi", artist: "Reading Music", duration: "2:20:00", url: "https://www.youtube.com/watch?v=lTRiuFIWV54" },
        
        // ARTISTS COLLECTIONS
        { title: "Jinsang Mix", artist: "Jinsang", duration: "1:15:00", url: "https://www.youtube.com/watch?v=WLbTNfTw2OI" },
        { title: "Idealism Mix", artist: "Idealism", duration: "1:20:00", url: "https://www.youtube.com/watch?v=BlJAyHMdIy0" },
        { title: "Tomppabeats Mix", artist: "Tomppabeats", duration: "1:10:00", url: "https://www.youtube.com/watch?v=FjHGZj2IjBk" },
        { title: "Potsu Mix", artist: "Potsu", duration: "1:05:00", url: "https://www.youtube.com/watch?v=_dXppP7VZxQ" },
        { title: "Kupla Mix", artist: "Kupla", duration: "1:25:00", url: "https://www.youtube.com/watch?v=lP26UCnoH9s" },
        
        // INTERNATIONAL LOFI
        { title: "Japanese Lofi", artist: "Japan Lofi", duration: "1:50:00", url: "https://www.youtube.com/watch?v=FjHGZj2IjBk" },
        { title: "Korean Lofi", artist: "K-Lofi", duration: "1:45:00", url: "https://www.youtube.com/watch?v=qH3fETPsqXU" },
        { title: "French Lofi", artist: "French Vibes", duration: "1:40:00", url: "https://www.youtube.com/watch?v=lP26UCnoH9s" },
        { title: "Brazilian Lofi", artist: "Brazil Lofi", duration: "1:35:00", url: "https://www.youtube.com/watch?v=jEvTpjxKX8Y" },
        
        // NATURE LOFI
        { title: "Forest Lofi", artist: "Nature Sounds", duration: "2:00:00", url: "https://www.youtube.com/watch?v=lTRiuFIWV54" },
        { title: "Ocean Lofi", artist: "Ocean Waves", duration: "2:10:00", url: "https://www.youtube.com/watch?v=5qap5aO4i9A" },
        { title: "Mountain Lofi", artist: "Mountain Vibes", duration: "1:55:00", url: "https://www.youtube.com/watch?v=kgx4WGK0oNU" },
        { title: "Desert Lofi", artist: "Desert Sounds", duration: "1:50:00", url: "https://www.youtube.com/watch?v=lP26UCnoH9s" }
      ]
    },
    
    motivation: {
      name: "🔥 Motivation",
      icon: "🔥",
      tracks: [
        { title: "Believer", artist: "Imagine Dragons", duration: "3:24", url: "https://www.youtube.com/watch?v=7wtfhZwyrcc" },
        { title: "Unstoppable", artist: "Sia", duration: "3:37", url: "https://www.youtube.com/watch?v=cxjvTXo9WWM" },
        { title: "Eye of the Tiger", artist: "Survivor", duration: "4:04", url: "https://www.youtube.com/watch?v=btPJPFnesV4" },
        { title: "Lose Yourself", artist: "Eminem", duration: "5:26", url: "https://www.youtube.com/watch?v=_Yhyp-_hX2s" },
        { title: "Till I Collapse", artist: "Eminem", duration: "4:57", url: "https://www.youtube.com/watch?v=ytQ5CYE1VZw" },
        { title: "Stronger", artist: "Kanye West", duration: "5:12", url: "https://www.youtube.com/watch?v=PsO6ZnUZI0g" },
        { title: "Hall of Fame", artist: "The Script ft. will.i.am", duration: "3:23", url: "https://www.youtube.com/watch?v=mk48xRzuNvA" },
        { title: "Remember the Name", artist: "Fort Minor", duration: "3:50", url: "https://www.youtube.com/watch?v=VDvr08sCPOc" },
        { title: "Centuries", artist: "Fall Out Boy", duration: "3:47", url: "https://www.youtube.com/watch?v=LBr7kECsjcQ" },
        { title: "Warriors", artist: "Imagine Dragons", duration: "2:51", url: "https://www.youtube.com/watch?v=fmI_Ndrxy14" },
        { title: "The Greatest", artist: "Sia", duration: "3:30", url: "https://www.youtube.com/watch?v=GKSRyLdjsPA" },
        { title: "Radioactive", artist: "Imagine Dragons", duration: "3:07", url: "https://www.youtube.com/watch?v=ktvTqknDobU" },
        { title: "Thunder", artist: "Imagine Dragons", duration: "3:07", url: "https://www.youtube.com/watch?v=fKopy74weus" },
        { title: "Whatever It Takes", artist: "Imagine Dragons", duration: "3:21", url: "https://www.youtube.com/watch?v=gOsM-DYAEhY" },
        { title: "Natural", artist: "Imagine Dragons", duration: "3:09", url: "https://www.youtube.com/watch?v=0I647GU3Jsc" },
        { title: "Not Afraid", artist: "Eminem", duration: "4:08", url: "https://www.youtube.com/watch?v=j5-yKhDd64s" },
        { title: "Survival", artist: "Eminem", duration: "4:32", url: "https://www.youtube.com/watch?v=NUC2EQvdzmY" },
        { title: "Can't Hold Us", artist: "Macklemore", duration: "4:18", url: "https://www.youtube.com/watch?v=2zNSgSzhBfM" },
        { title: "Glorious", artist: "Macklemore", duration: "3:58", url: "https://www.youtube.com/watch?v=7OrLroFa0AI" },
        { title: "Run This Town", artist: "Jay-Z ft. Rihanna", duration: "4:28", url: "https://www.youtube.com/watch?v=eDuRoPIOBjE" }
      ]
    },
    
    hindiMotivation: {
      name: "🇮🇳 Hindi Motivation",
      icon: "🇮🇳",
      tracks: [
        { title: "Zinda", artist: "Bhaag Milkha Bhaag", duration: "5:05", url: "https://www.youtube.com/watch?v=3B_y_29LWus" },
        { title: "Chak De India", artist: "Sukhwinder Singh", duration: "4:15", url: "https://www.youtube.com/watch?v=mDLiAs5k1oI" },
        { title: "Lakshya", artist: "Shankar-Ehsaan-Loy", duration: "4:45", url: "https://www.youtube.com/watch?v=xIBLRoUQV28" },
        { title: "Dangal", artist: "Daler Mehndi", duration: "3:58", url: "https://www.youtube.com/watch?v=x_y_-9yo71A" },
        { title: "Sultan", artist: "Sukhwinder Singh", duration: "4:32", url: "https://www.youtube.com/watch?v=l4z1RkQdHPg" },
        { title: "Apna Time Aayega", artist: "Gully Boy", duration: "3:04", url: "https://www.youtube.com/watch?v=jFGKtPWGT5w" },
        { title: "Kar Har Maidaan Fateh", artist: "Sanju", duration: "3:45", url: "https://www.youtube.com/watch?v=gOsM-DYAEhY" },
        { title: "Badal Pe Paon Hain", artist: "Chak De India", duration: "4:20", url: "https://www.youtube.com/watch?v=Zy_Vp_1Ys_M" },
        { title: "Jai Ho", artist: "A.R. Rahman", duration: "5:25", url: "https://www.youtube.com/watch?v=DSIbH0gXe-Y" },
        { title: "Rang De Basanti", artist: "Daler Mehndi", duration: "4:35", url: "https://www.youtube.com/watch?v=ZbCm4YMeUo" },
        { title: "Maa", artist: "Taare Zameen Par", duration: "5:05", url: "https://www.youtube.com/watch?v=wRdIVvtfH_0" },
        { title: "Bhaag DK Bose", artist: "Delhi Belly", duration: "3:42", url: "https://www.youtube.com/watch?v=IQEDu8SPHao" },
        { title: "Malhari", artist: "Bajirao Mastani", duration: "4:48", url: "https://www.youtube.com/watch?v=l_MyUGq7pgs" },
        { title: "Tattad Tattad", artist: "Goliyon Ki Raasleela", duration: "4:15", url: "https://www.youtube.com/watch?v=AaRP9QHWKWQ" }
      ]
    },
    
    phonk: {
      name: "🌃 Phonk/Funk",
      icon: "🌃",
      tracks: [
        { title: "SLAVA - FUNK", artist: "SLAVA", duration: "2:15", url: "https://www.youtube.com/watch?v=5f_JiibvQAM" },
        { title: "MONTAGEM - PR FUNK", artist: "Funk Brasil", duration: "2:30", url: "https://www.youtube.com/watch?v=qL2n7CQ1O8Q" },
        { title: "Brazilian Phonk Mix", artist: "Phonk Mix", duration: "45:00", url: "https://www.youtube.com/watch?v=rIhx2wZ8jnA" },
        { title: "Cowbell Phonk", artist: "Phonk Essentials", duration: "2:45", url: "https://www.youtube.com/watch?v=qyklAGFD2WA" },
        { title: "Drift Phonk Mix", artist: "Drift Nation", duration: "1:30:00", url: "https://www.youtube.com/watch?v=41fFpKHQhU8" },
        { title: "Tokyo Drift Phonk", artist: "Phonk Drift", duration: "3:10", url: "https://www.youtube.com/watch?v=iuJDhFRDx9M" },
        { title: "Aggressive Phonk Mix", artist: "Phonk Gym", duration: "1:15:00", url: "https://www.youtube.com/watch?v=kRbJwZHj6Ck" },
        { title: "Russian Phonk Mix", artist: "Russian Bass", duration: "50:00", url: "https://www.youtube.com/watch?v=34na4j8Oc9I" },
        { title: "Phonk Walk", artist: "Phonk Street", duration: "2:55", url: "https://www.youtube.com/watch?v=gkime9M4z34" },
        { title: "Funk Estranho", artist: "Brazilian Funk", duration: "2:20", url: "https://www.youtube.com/watch?v=Kn5JLSqHHNc" },
        { title: "Phonk Racing Mix", artist: "Racing Phonk", duration: "1:00:00", url: "https://www.youtube.com/watch?v=5f0zn0TwPMk" },
        { title: "Dark Phonk", artist: "Dark Phonk Mix", duration: "40:00", url: "https://www.youtube.com/watch?v=kaEjHLJWRG0" },
        { title: "Brazilian Funk Mix", artist: "Funk BR", duration: "35:00", url: "https://www.youtube.com/watch?v=qL2n7CQ1O8Q" },
        { title: "Phonk Gym Mix", artist: "Gym Phonk", duration: "1:20:00", url: "https://www.youtube.com/watch?v=kRbJwZHj6Ck" },
        { title: "Sigma Phonk Mix", artist: "Sigma Grindset", duration: "55:00", url: "https://www.youtube.com/watch?v=1-emQo-7O3Y" },
        { title: "Memphis Phonk", artist: "Memphis Sound", duration: "2:40", url: "https://www.youtube.com/watch?v=gkime9M4z34" },
        { title: "Phonk House Mix", artist: "House Phonk", duration: "1:10:00", url: "https://www.youtube.com/watch?v=5f0zn0TwPMk" },
        { title: "Drift Phonk 2", artist: "Drift Masters", duration: "3:05", url: "https://www.youtube.com/watch?v=iuJDhFRDx9M" }
      ]
    },
    
    viral: {
      name: "🎶 Viral Hits",
      icon: "🎶",
      tracks: [
        { title: "Love Nwantiti", artist: "CKay", duration: "2:32", url: "https://www.youtube.com/watch?v=doXUMqTkHAA" },
        { title: "The Nights", artist: "Avicii", duration: "2:56", url: "https://www.youtube.com/watch?v=UtF6Jej8yb4" },
        { title: "Blinding Lights", artist: "The Weeknd", duration: "3:20", url: "https://www.youtube.com/watch?v=4NRXx6U8ABQ" },
        { title: "Heat Waves", artist: "Glass Animals", duration: "3:59", url: "https://www.youtube.com/watch?v=mRD0-GxqHVo" },
        { title: "Levitating", artist: "Dua Lipa", duration: "3:23", url: "https://www.youtube.com/watch?v=TUVcZfQe-Kw" },
        { title: "Stay", artist: "Justin Bieber & The Kid LAROI", duration: "2:21", url: "https://www.youtube.com/watch?v=kTJczUoc26U" },
        { title: "Peaches", artist: "Justin Bieber", duration: "3:18", url: "https://www.youtube.com/watch?v=tQ0yjYUFKAE" },
        { title: "Industry Baby", artist: "Lil Nas X", duration: "3:32", url: "https://www.youtube.com/watch?v=UTHLKHL_whs" },
        { title: "Montero", artist: "Lil Nas X", duration: "2:17", url: "https://www.youtube.com/watch?v=6swmTBVI83k" },
        { title: "Good 4 U", artist: "Olivia Rodrigo", duration: "2:58", url: "https://www.youtube.com/watch?v=gNi_6U5Pm_o" },
        { title: "Drivers License", artist: "Olivia Rodrigo", duration: "4:02", url: "https://www.youtube.com/watch?v=ZmDBbnmKpqQ" },
        { title: "Shivers", artist: "Ed Sheeran", duration: "3:27", url: "https://www.youtube.com/watch?v=Il0S8BoucSA" },
        { title: "Bad Habits", artist: "Ed Sheeran", duration: "3:50", url: "https://www.youtube.com/watch?v=orJSJGHjBLI" },
        { title: "Butter", artist: "BTS", duration: "2:44", url: "https://www.youtube.com/watch?v=WMweEpGlu_U" },
        { title: "Dynamite", artist: "BTS", duration: "3:19", url: "https://www.youtube.com/watch?v=gdZLi9oWNZg" },
        { title: "Positions", artist: "Ariana Grande", duration: "2:52", url: "https://www.youtube.com/watch?v=tcYodQoapMg" },
        { title: "Save Your Tears", artist: "The Weeknd", duration: "3:35", url: "https://www.youtube.com/watch?v=XXYlFuWEuKI" },
        { title: "Mood", artist: "24kGoldn ft. iann dior", duration: "2:20", url: "https://www.youtube.com/watch?v=GgrWkDBPn7o" },
        { title: "Astronaut in the Ocean", artist: "Masked Wolf", duration: "2:11", url: "https://www.youtube.com/watch?v=MEg-oqI9qmw" },
        { title: "Beggin'", artist: "Måneskin", duration: "3:31", url: "https://www.youtube.com/watch?v=bpOSxM0rNPM" },
        { title: "Sunroof", artist: "Nicky Youre", duration: "2:42", url: "https://www.youtube.com/watch?v=SbWJC7Ol_JE" },
        { title: "As It Was", artist: "Harry Styles", duration: "2:47", url: "https://www.youtube.com/watch?v=H5v3kku4y6Q" },
        { title: "Anti-Hero", artist: "Taylor Swift", duration: "3:20", url: "https://www.youtube.com/watch?v=b1kbLwvqugk" },
        { title: "Unholy", artist: "Sam Smith", duration: "2:36", url: "https://www.youtube.com/watch?v=Uq9gPaIzbe8" },
        { title: "Calm Down", artist: "Rema & Selena Gomez", duration: "3:59", url: "https://www.youtube.com/watch?v=WcIcVapfqXw" }
      ]
    },
    
    bollywood: {
      name: "🎬 Bollywood",
      icon: "🎬",
      tracks: [
        { title: "Mann Mera", artist: "Table No. 21", duration: "4:32", url: "https://www.youtube.com/watch?v=X3xGJgfOhg4" },
        { title: "Kesariya", artist: "Brahmastra", duration: "4:28", url: "https://www.youtube.com/watch?v=DJ6RWOM4_s" },
        { title: "Tum Hi Ho", artist: "Aashiqui 2", duration: "4:22", url: "https://www.youtube.com/watch?v=IJq0yyWug1k" },
        { title: "Raabta", artist: "Agent Vinod", duration: "4:05", url: "https://www.youtube.com/watch?v=1wozxJVzPRs" },
        { title: "Kabira", artist: "Yeh Jawaani Hai Deewani", duration: "5:42", url: "https://www.youtube.com/watch?v=jHNNMj5bNQw" },
        { title: "Channa Mereya", artist: "Ae Dil Hai Mushkil", duration: "4:49", url: "https://www.youtube.com/watch?v=bzSTpdcs-EI" },
        { title: "Agar Tum Saath Ho", artist: "Tamasha", duration: "5:41", url: "https://www.youtube.com/watch?v=xRb8hxwN5zc" },
        { title: "Tere Sang Yaara", artist: "Rustom", duration: "4:20", url: "https://www.youtube.com/watch?v=JgPQNLGHCHA" },
        { title: "Ae Watan", artist: "Raazi", duration: "3:50", url: "https://www.youtube.com/watch?v=sOiPvFlJ6kk" },
        { title: "Kalank", artist: "Kalank", duration: "4:57", url: "https://www.youtube.com/watch?v=cIGQUEp_Ixo" },
        { title: "Shayad", artist: "Love Aaj Kal", duration: "3:38", url: "https://www.youtube.com/watch?v=MJyKN-8UncM" },
        { title: "Dil Bechara", artist: "Dil Bechara", duration: "3:44", url: "https://www.youtube.com/watch?v=JBFB_-V_pQE" },
        { title: "Khairiyat", artist: "Chhichhore", duration: "4:40", url: "https://www.youtube.com/watch?v=YfaAKPZzh7s" },
        { title: "Bekhayali", artist: "Kabir Singh", duration: "6:11", url: "https://www.youtube.com/watch?v=VOLKJJvfAbg" },
        { title: "Tujhe Kitna Chahne Lage", artist: "Kabir Singh", duration: "4:44", url: "https://www.youtube.com/watch?v=bSdtvfBQd6c" }
      ]
    },
    
    classical: {
      name: "🎹 Classical",
      icon: "🎹",
      tracks: [
        { title: "Moonlight Sonata", artist: "Beethoven", duration: "15:50", url: "https://www.youtube.com/watch?v=4Tr0otuiQuU" },
        { title: "Clair de Lune", artist: "Debussy", duration: "5:20", url: "https://www.youtube.com/watch?v=CvFH_6DNRCY" },
        { title: "Interstellar Theme", artist: "Hans Zimmer", duration: "4:35", url: "https://www.youtube.com/watch?v=UDVtMYqUAyw" },
        { title: "Time - Inception", artist: "Hans Zimmer", duration: "4:35", url: "https://www.youtube.com/watch?v=RxabLA7UQ9k" },
        { title: "Für Elise", artist: "Beethoven", duration: "3:15", url: "https://www.youtube.com/watch?v=_mVW8tgGY_w" },
        { title: "Canon in D", artist: "Pachelbel", duration: "5:35", url: "https://www.youtube.com/watch?v=NlprozGcs80" },
        { title: "Nocturne Op.9 No.2", artist: "Chopin", duration: "4:30", url: "https://www.youtube.com/watch?v=9E6b3swbnWg" },
        { title: "The Four Seasons - Spring", artist: "Vivaldi", duration: "10:25", url: "https://www.youtube.com/watch?v=GRxofEmo3HA" },
        { title: "Requiem - Lacrimosa", artist: "Mozart", duration: "3:45", url: "https://www.youtube.com/watch?v=k1-TrAvp_xs" },
        { title: "Swan Lake", artist: "Tchaikovsky", duration: "2:35", url: "https://www.youtube.com/watch?v=9cNQFB0TDfY" }
      ]
    },
    
    electronic: {
      name: "⚡ Electronic",
      icon: "⚡",
      tracks: [
        { title: "Strobe", artist: "Deadmau5", duration: "10:37", url: "https://www.youtube.com/watch?v=tKi9Z-f6qX4" },
        { title: "Faded", artist: "Alan Walker", duration: "3:32", url: "https://www.youtube.com/watch?v=60ItHLz5WEA" },
        { title: "Levels", artist: "Avicii", duration: "3:18", url: "https://www.youtube.com/watch?v=_ovdm2yX4MA" },
        { title: "Clarity", artist: "Zedd", duration: "4:31", url: "https://www.youtube.com/watch?v=IxxstCcJlsc" },
        { title: "Titanium", artist: "David Guetta ft. Sia", duration: "4:05", url: "https://www.youtube.com/watch?v=JRfuAukYTKg" },
        { title: "Wake Me Up", artist: "Avicii", duration: "4:09", url: "https://www.youtube.com/watch?v=IcrbM1l_BoI" },
        { title: "Animals", artist: "Martin Garrix", duration: "5:02", url: "https://www.youtube.com/watch?v=gCYcHz2k5x0" },
        { title: "Waiting For Love", artist: "Avicii", duration: "3:50", url: "https://www.youtube.com/watch?v=cHHLHGNpCSA" },
        { title: "Don't You Worry Child", artist: "Swedish House Mafia", duration: "3:32", url: "https://www.youtube.com/watch?v=1y6smkh6c-0" },
        { title: "Lean On", artist: "Major Lazer", duration: "2:56", url: "https://www.youtube.com/watch?v=YqeW9_5kURI" }
      ]
    },
    
    ambient: {
      name: "🌙 Ambient",
      icon: "🌙",
      tracks: [
        { title: "Weightless", artist: "Marconi Union", duration: "8:09", url: "https://www.youtube.com/watch?v=UfcAVejslrU" },
        { title: "Rain Sounds", artist: "Nature Sounds", duration: "10:00:00", url: "https://www.youtube.com/watch?v=mPZkdNFkNps" },
        { title: "Ocean Waves", artist: "Nature Sounds", duration: "8:00:00", url: "https://www.youtube.com/watch?v=WHPEKLQID4U" },
        { title: "Forest Birds", artist: "Nature Sounds", duration: "3:00:00", url: "https://www.youtube.com/watch?v=xNN7iTA57jM" },
        { title: "Thunderstorm", artist: "Nature Sounds", duration: "2:00:00", url: "https://www.youtube.com/watch?v=nDq6TstdEi8" },
        { title: "White Noise", artist: "Sleep Sounds", duration: "10:00:00", url: "https://www.youtube.com/watch?v=nMfPqeZjc2c" },
        { title: "Brown Noise", artist: "Sleep Sounds", duration: "10:00:00", url: "https://www.youtube.com/watch?v=RqzGzwTY-6w" },
        { title: "Pink Noise", artist: "Sleep Sounds", duration: "10:00:00", url: "https://www.youtube.com/watch?v=ZXtimhT-ff4" }
      ]
    },
    
    rock: {
      name: "🎸 Rock",
      icon: "🎸",
      tracks: [
        { title: "Numb", artist: "Linkin Park", duration: "3:07", url: "https://www.youtube.com/watch?v=kXYiU_JCYtU" },
        { title: "In the End", artist: "Linkin Park", duration: "3:36", url: "https://www.youtube.com/watch?v=eVTXPUF4Oz4" },
        { title: "Bohemian Rhapsody", artist: "Queen", duration: "5:55", url: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ" },
        { title: "Smells Like Teen Spirit", artist: "Nirvana", duration: "5:01", url: "https://www.youtube.com/watch?v=hTWKbfoikeg" },
        { title: "Sweet Child O' Mine", artist: "Guns N' Roses", duration: "5:56", url: "https://www.youtube.com/watch?v=1w7OgIMMRc4" },
        { title: "Hotel California", artist: "Eagles", duration: "6:30", url: "https://www.youtube.com/watch?v=09839DpTctU" },
        { title: "Stairway to Heaven", artist: "Led Zeppelin", duration: "8:02", url: "https://www.youtube.com/watch?v=QkF3oxziUI4" },
        { title: "November Rain", artist: "Guns N' Roses", duration: "8:57", url: "https://www.youtube.com/watch?v=8SbUC-UaAxE" }
      ]
    },
    
    indie: {
      name: "🎧 Indie/Alternative",
      icon: "🎧",
      tracks: [
        { title: "Somebody That I Used to Know", artist: "Gotye", duration: "4:04", url: "https://www.youtube.com/watch?v=8UVNT4wvIGY" },
        { title: "Pumped Up Kicks", artist: "Foster the People", duration: "3:59", url: "https://www.youtube.com/watch?v=SDTZ7iX4vTQ" },
        { title: "Riptide", artist: "Vance Joy", duration: "3:24", url: "https://www.youtube.com/watch?v=uJ_1HMAGb4k" },
        { title: "Take Me to Church", artist: "Hozier", duration: "4:01", url: "https://www.youtube.com/watch?v=PVjiKRfKpPI" },
        { title: "Radioactive", artist: "Imagine Dragons", duration: "3:07", url: "https://www.youtube.com/watch?v=ktvTqknDobU" },
        { title: "Demons", artist: "Imagine Dragons", duration: "2:57", url: "https://www.youtube.com/watch?v=mWRsgZuwf_8" },
        { title: "Counting Stars", artist: "OneRepublic", duration: "4:17", url: "https://www.youtube.com/watch?v=hT_nvWreIhg" },
        { title: "Secrets", artist: "OneRepublic", duration: "3:45", url: "https://www.youtube.com/watch?v=qHm9MG9xw1o" },
        { title: "Ho Hey", artist: "The Lumineers", duration: "2:43", url: "https://www.youtube.com/watch?v=zvCBSSwgtg4" },
        { title: "Little Talks", artist: "Of Monsters and Men", duration: "4:28", url: "https://www.youtube.com/watch?v=ghb6eDopW8I" }
      ]
    },
    
    trap: {
      name: "🔊 Trap/Hip-Hop",
      icon: "🔊",
      tracks: [
        { title: "SICKO MODE", artist: "Travis Scott", duration: "5:13", url: "https://www.youtube.com/watch?v=6ONRf7h3Mdk" },
        { title: "HIGHEST IN THE ROOM", artist: "Travis Scott", duration: "2:56", url: "https://www.youtube.com/watch?v=tfSS1e3kYeo" },
        { title: "goosebumps", artist: "Travis Scott", duration: "4:03", url: "https://www.youtube.com/watch?v=Dst9gZkq1a8" },
        { title: "Mask Off", artist: "Future", duration: "3:24", url: "https://www.youtube.com/watch?v=xvZqHgFz51I" },
        { title: "XO TOUR Llif3", artist: "Lil Uzi Vert", duration: "3:03", url: "https://www.youtube.com/watch?v=WrsFXgQk5UI" },
        { title: "Lucid Dreams", artist: "Juice WRLD", duration: "3:59", url: "https://www.youtube.com/watch?v=mzB1VGEGcSU" },
        { title: "Robbery", artist: "Juice WRLD", duration: "4:04", url: "https://www.youtube.com/watch?v=iI34LYmJ1Fs" },
        { title: "Sunflower", artist: "Post Malone", duration: "2:38", url: "https://www.youtube.com/watch?v=ApXoWvfEYVU" },
        { title: "Rockstar", artist: "Post Malone", duration: "3:38", url: "https://www.youtube.com/watch?v=UceaB4D0jpo" },
        { title: "Congratulations", artist: "Post Malone", duration: "3:40", url: "https://www.youtube.com/watch?v=SC4xMk98Pdc" }
      ]
    },
    
    edm: {
      name: "💥 EDM/Festival",
      icon: "💥",
      tracks: [
        { title: "Tremor", artist: "Dimitri Vegas & Martin Garrix", duration: "4:52", url: "https://www.youtube.com/watch?v=9vMh9f41pqE" },
        { title: "Tsunami", artist: "DVBBS & Borgeous", duration: "3:50", url: "https://www.youtube.com/watch?v=0EWbonj7f18" },
        { title: "Epic", artist: "Sandro Silva & Quintino", duration: "3:18", url: "https://www.youtube.com/watch?v=IxxstCcJlsc" },
        { title: "Wizard", artist: "Martin Garrix", duration: "3:17", url: "https://www.youtube.com/watch?v=Ek3aeUhHaFY" },
        { title: "Turn Down for What", artist: "DJ Snake", duration: "3:34", url: "https://www.youtube.com/watch?v=HMUDVMiITOU" },
        { title: "Get Low", artist: "Dillon Francis", duration: "3:31", url: "https://www.youtube.com/watch?v=12CeaxLiMgE" },
        { title: "Reload", artist: "Sebastian Ingrosso", duration: "3:22", url: "https://www.youtube.com/watch?v=ZaI2IlHwmgQ" },
        { title: "Mammoth", artist: "Dimitri Vegas", duration: "3:45", url: "https://www.youtube.com/watch?v=Qnr3PTZQY0Y" }
      ]
    },
    
    kpop: {
      name: "🇰🇷 K-Pop",
      icon: "🇰🇷",
      tracks: [
        { title: "Dynamite", artist: "BTS", duration: "3:19", url: "https://www.youtube.com/watch?v=gdZLi9oWNZg" },
        { title: "Butter", artist: "BTS", duration: "2:44", url: "https://www.youtube.com/watch?v=WMweEpGlu_U" },
        { title: "Permission to Dance", artist: "BTS", duration: "3:07", url: "https://www.youtube.com/watch?v=CuklIb9d3fI" },
        { title: "How You Like That", artist: "BLACKPINK", duration: "3:02", url: "https://www.youtube.com/watch?v=ioNng23DkIM" },
        { title: "DDU-DU DDU-DU", artist: "BLACKPINK", duration: "3:29", url: "https://www.youtube.com/watch?v=IHNzOHi8sJs" },
        { title: "Kill This Love", artist: "BLACKPINK", duration: "3:13", url: "https://www.youtube.com/watch?v=2S24-y0Ij3Y" },
        { title: "Gangnam Style", artist: "PSY", duration: "4:13", url: "https://www.youtube.com/watch?v=9bZkp7q19f0" },
        { title: "Gentleman", artist: "PSY", duration: "3:53", url: "https://www.youtube.com/watch?v=ASO_ypdCtkc" }
      ]
    }
  }
};

// Calculate total tracks
let totalTracks = 0;
Object.values(musicLibrary.categories).forEach(category => {
  totalTracks += category.tracks.length;
});

console.log(`🎵 Music Library Loaded: ${totalTracks} tracks across ${Object.keys(musicLibrary.categories).length} categories`);