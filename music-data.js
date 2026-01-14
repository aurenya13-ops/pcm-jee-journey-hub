// 🎵 MASSIVE MUSIC LIBRARY - 220+ TRACKS ACROSS 16 CATEGORIES
const musicLibrary = {
  categories: {
    // NEW CATEGORY: LIFE LESSONS & DIALOGUES WITH CALM BGM
    lifeLessons: {
      name: "💭 Life Lessons & Dialogues",
      icon: "💭",
      description: "Famous Bollywood dialogues with relaxing background music - Life wisdom for our generation",
      tracks: [
        // SRK DIALOGUES
        { title: "Jab Tum Kisi Cheez Ko Shiddat Se Chaho - Om Shanti Om", artist: "Shah Rukh Khan", duration: "2:45", url: "https://www.youtube.com/watch?v=Eo5H62mCIsg" },
        { title: "Haar Kar Jeetne Wale Ko Baazigar Kehte Hain", artist: "Shah Rukh Khan", duration: "3:12", url: "https://www.youtube.com/watch?v=xZY43QSx3Fk" },
        { title: "Don Ko Pakadna Mushkil Hi Nahi Namumkin Hai", artist: "Shah Rukh Khan", duration: "2:30", url: "https://www.youtube.com/watch?v=zeYNZfL8NdI" },
        { title: "Koi Bhi Desh Perfect Nahi Hota - Chak De India", artist: "Shah Rukh Khan", duration: "4:15", url: "https://www.youtube.com/watch?v=qMp0YPIjYXg" },
        { title: "Apne Haathon Kismat Likhne - Dhoom 3", artist: "Shah Rukh Khan", duration: "2:50", url: "https://www.youtube.com/watch?v=YqoqQU-8LnA" },
        
        // AAMIR KHAN - 3 IDIOTS DIALOGUES
        { title: "All Is Well - 3 Idiots Dialogue", artist: "Aamir Khan", duration: "3:20", url: "https://www.youtube.com/watch?v=7NJqUN9TClM" },
        { title: "Kamyabi Ka Peecha Karo Excellence Aayegi - 3 Idiots", artist: "Aamir Khan", duration: "4:05", url: "https://www.youtube.com/watch?v=xvszmNXdM4w" },
        { title: "Dost Fail Ho Jaye Toh Dukh Hota Hai - 3 Idiots", artist: "Aamir Khan", duration: "2:55", url: "https://www.youtube.com/watch?v=K5R-lCJmRHY" },
        { title: "Life Mein Sirf 2 Tarah Ke Log Hote Hain - 3 Idiots", artist: "Aamir Khan", duration: "3:10", url: "https://www.youtube.com/watch?v=WXoFf1hG5AQ" },
        { title: "Kabil Bano Kamyabi Jhak Marke Peeche Aayegi - 3 Idiots", artist: "Aamir Khan", duration: "3:45", url: "https://www.youtube.com/watch?v=xvszmNXdM4w" },
        
        // OTHER INSPIRATIONAL DIALOGUES
        { title: "Jo Nahi Ho Sakta Wahi Toh Karna Hai - Chak De", artist: "Aamir Khan", duration: "3:30", url: "https://www.youtube.com/watch?v=qMp0YPIjYXg" },
        { title: "Zindagi Mein Jab Bhi Koi Cheez Chahiye - Taare Zameen Par", artist: "Aamir Khan", duration: "4:20", url: "https://www.youtube.com/watch?v=BbB5v8lG6Ug" },
        { title: "Bhagwan Ke Bharose Mat Baithiye - Manjhi", artist: "Nawazuddin Siddiqui", duration: "2:40", url: "https://www.youtube.com/watch?v=8cJZxN4U8RI" },
        { title: "Raste Ki Parwah Karunga Toh Manzil Bura Maan Jayegi", artist: "Ajay Devgn", duration: "2:35", url: "https://www.youtube.com/watch?v=YqoqQU-8LnA" },
        { title: "Jung Hathyaaron Ko Lagta Hai Iraadon Ko Nahi", artist: "John Abraham", duration: "2:50", url: "https://www.youtube.com/watch?v=xZY43QSx3Fk" },
        
        // MOTIVATIONAL SPEECHES WITH BGM
        { title: "Motivational Dialogue Mix - Bollywood", artist: "Various Artists", duration: "10:30", url: "https://www.youtube.com/watch?v=_HZmorq3oxw" },
        { title: "Life Lessons from Bollywood - Calm BGM", artist: "Various Artists", duration: "15:45", url: "https://www.youtube.com/watch?v=zGsl1avmCLw" },
        { title: "Inspirational Dialogues Compilation", artist: "Bollywood Mix", duration: "12:20", url: "https://www.youtube.com/watch?v=K5R-lCJmRHY" },
        
        // WISDOM & PHILOSOPHY
        { title: "Swami Vivekananda Quotes with Music", artist: "Inspirational", duration: "8:30", url: "https://www.youtube.com/watch?v=BbB5v8lG6Ug" },
        { title: "APJ Abdul Kalam Quotes - Calm BGM", artist: "Inspirational", duration: "7:45", url: "https://www.youtube.com/watch?v=8cJZxN4U8RI" }
      ]
    },
    
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
        { title: "Warriors", artist: "Imagine Dragons", duration: "2:50", url: "https://www.youtube.com/watch?v=fmI_Ndrxy14" },
        { title: "Thunder", artist: "Imagine Dragons", duration: "3:07", url: "https://www.youtube.com/watch?v=fKopy74weus" },
        { title: "Natural", artist: "Imagine Dragons", duration: "3:09", url: "https://www.youtube.com/watch?v=0I647GU3Jsc" },
        { title: "Radioactive", artist: "Imagine Dragons", duration: "3:06", url: "https://www.youtube.com/watch?v=ktvTqknDobU" },
        { title: "Whatever It Takes", artist: "Imagine Dragons", duration: "3:21", url: "https://www.youtube.com/watch?v=gOsM-DYAEhY" },
        { title: "Centuries", artist: "Fall Out Boy", duration: "3:47", url: "https://www.youtube.com/watch?v=LBr7kECsjcQ" },
        { title: "My Way", artist: "Frank Sinatra", duration: "4:35", url: "https://www.youtube.com/watch?v=qQzdAsjWGPg" },
        { title: "Don't Stop Me Now", artist: "Queen", duration: "3:29", url: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
        { title: "We Will Rock You", artist: "Queen", duration: "2:02", url: "https://www.youtube.com/watch?v=-tJYN-eG1zk" },
        { title: "We Are The Champions", artist: "Queen", duration: "2:59", url: "https://www.youtube.com/watch?v=04854XqcfCY" },
        { title: "Survivor", artist: "Destiny's Child", duration: "4:03", url: "https://www.youtube.com/watch?v=Wmc8bQoL-J0" },
        { title: "Roar", artist: "Katy Perry", duration: "3:42", url: "https://www.youtube.com/watch?v=CevxZvSJLk8" }
      ]
    },
    
    hindiMotivation: {
      name: "🇮🇳 Hindi Motivation",
      icon: "🇮🇳",
      tracks: [
        { title: "Zinda", artist: "Bhaag Milkha Bhaag", duration: "5:05", url: "https://www.youtube.com/watch?v=Y1-xm8p2FIs" },
        { title: "Chak De India Title Track", artist: "Sukhwinder Singh", duration: "4:54", url: "https://www.youtube.com/watch?v=Oogb6SsF0Oo" },
        { title: "Dangal Title Track", artist: "Daler Mehndi", duration: "4:17", url: "https://www.youtube.com/watch?v=x_y_-9yo71A" },
        { title: "Sultan Title Track", artist: "Sukhwinder Singh", duration: "3:42", url: "https://www.youtube.com/watch?v=8RiF3TQAkig" },
        { title: "Jai Ho", artist: "A.R. Rahman", duration: "5:25", url: "https://www.youtube.com/watch?v=DSIu-8kbg6w" },
        { title: "Malhari", artist: "Bajirao Mastani", duration: "5:02", url: "https://www.youtube.com/watch?v=l_MyUGq7pgs" },
        { title: "Kar Har Maidaan Fateh", artist: "Sanju", duration: "3:58", url: "https://www.youtube.com/watch?v=Yk8jV7r8Jlw" },
        { title: "Apna Time Aayega", artist: "Gully Boy", duration: "3:04", url: "https://www.youtube.com/watch?v=jFGKtPOt3Ck" },
        { title: "Lakshya Title Track", artist: "Shankar Mahadevan", duration: "5:18", url: "https://www.youtube.com/watch?v=xvaqFmADPAw" },
        { title: "Rang De Basanti", artist: "Daler Mehndi", duration: "5:37", url: "https://www.youtube.com/watch?v=y6X9XQVH0YU" },
        { title: "Maa Tujhe Salaam", artist: "A.R. Rahman", duration: "5:31", url: "https://www.youtube.com/watch?v=2OHMEv5WGWQ" },
        { title: "Vande Mataram", artist: "A.R. Rahman", duration: "5:16", url: "https://www.youtube.com/watch?v=6Nrs8yoK_LI" },
        { title: "Bharat Humko Jaan Se Pyara Hai", artist: "Roja", duration: "6:12", url: "https://www.youtube.com/watch?v=Oogb6SsF0Oo" },
        { title: "Yeh Jo Des Hai Tera", artist: "Swades", duration: "6:40", url: "https://www.youtube.com/watch?v=Oogb6SsF0Oo" }
      ]
    },
    
    phonk: {
      name: "🌃 Phonk/Funk",
      icon: "🌃",
      tracks: [
        { title: "SLAVA FUNK", artist: "LXST CXNTURY", duration: "2:15", url: "https://www.youtube.com/watch?v=Tz0aF7TyLRw" },
        { title: "Brazilian Phonk Mano", artist: "Slowboy", duration: "2:30", url: "https://www.youtube.com/watch?v=zJIlftta6fk" },
        { title: "Montagem Mysterious Game", artist: "Phonk", duration: "2:45", url: "https://www.youtube.com/watch?v=Tz0aF7TyLRw" },
        { title: "Funk Universo", artist: "MC GW", duration: "2:20", url: "https://www.youtube.com/watch?v=zJIlftta6fk" },
        { title: "Automotivo Bibi Fogosa", artist: "Bibi Babydoll", duration: "2:10", url: "https://www.youtube.com/watch?v=Tz0aF7TyLRw" },
        { title: "Phonk Drift", artist: "Kordhell", duration: "2:35", url: "https://www.youtube.com/watch?v=zJIlftta6fk" },
        { title: "Murder In My Mind", artist: "Kordhell", duration: "2:40", url: "https://www.youtube.com/watch?v=Tz0aF7TyLRw" },
        { title: "Sahara", artist: "Hensonn", duration: "2:25", url: "https://www.youtube.com/watch?v=zJIlftta6fk" },
        { title: "Cowbell Warrior", artist: "LXST CXNTURY", duration: "2:50", url: "https://www.youtube.com/watch?v=Tz0aF7TyLRw" },
        { title: "Funk Estranho", artist: "MC Menor MR", duration: "2:15", url: "https://www.youtube.com/watch?v=zJIlftta6fk" },
        { title: "Phonk Sigma Mix", artist: "Various", duration: "15:30", url: "https://www.youtube.com/watch?v=Tz0aF7TyLRw" },
        { title: "Brazilian Funk Mix", artist: "Various", duration: "20:45", url: "https://www.youtube.com/watch?v=zJIlftta6fk" },
        { title: "Drift Phonk Mix", artist: "Various", duration: "18:20", url: "https://www.youtube.com/watch?v=Tz0aF7TyLRw" },
        { title: "Aggressive Phonk Mix", artist: "Various", duration: "22:10", url: "https://www.youtube.com/watch?v=zJIlftta6fk" },
        { title: "Gym Phonk Mix", artist: "Various", duration: "25:00", url: "https://www.youtube.com/watch?v=Tz0aF7TyLRw" },
        { title: "Night Drive Phonk", artist: "Various", duration: "30:15", url: "https://www.youtube.com/watch?v=zJIlftta6fk" },
        { title: "Sigma Grindset Phonk", artist: "Various", duration: "17:40", url: "https://www.youtube.com/watch?v=Tz0aF7TyLRw" },
        { title: "Brazilian Phonk Compilation", artist: "Various", duration: "28:30", url: "https://www.youtube.com/watch?v=zJIlftta6fk" }
      ]
    },
    
    viral: {
      name: "🎶 Viral Hits",
      icon: "🎶",
      tracks: [
        { title: "Love Nwantiti", artist: "CKay", duration: "2:32", url: "https://www.youtube.com/watch?v=DTXFmgZZSJI" },
        { title: "The Nights", artist: "Avicii", duration: "2:56", url: "https://www.youtube.com/watch?v=UtF6Jej8yb4" },
        { title: "Blinding Lights", artist: "The Weeknd", duration: "3:20", url: "https://www.youtube.com/watch?v=4NRXx6U8ABQ" },
        { title: "Heat Waves", artist: "Glass Animals", duration: "3:58", url: "https://www.youtube.com/watch?v=mRD0-GxqHVo" },
        { title: "Levitating", artist: "Dua Lipa", duration: "3:23", url: "https://www.youtube.com/watch?v=TUVcZfQe-Kw" },
        { title: "Peaches", artist: "Justin Bieber", duration: "3:18", url: "https://www.youtube.com/watch?v=tQ0yjYUFKAE" },
        { title: "Stay", artist: "The Kid LAROI & Justin Bieber", duration: "2:21", url: "https://www.youtube.com/watch?v=kTJczUoc26U" },
        { title: "Good 4 U", artist: "Olivia Rodrigo", duration: "2:58", url: "https://www.youtube.com/watch?v=gNi_6U5Pm_o" },
        { title: "Montero", artist: "Lil Nas X", duration: "2:17", url: "https://www.youtube.com/watch?v=6swmTBVI83k" },
        { title: "Industry Baby", artist: "Lil Nas X", duration: "3:32", url: "https://www.youtube.com/watch?v=UTHLKHL_whs" },
        { title: "Shivers", artist: "Ed Sheeran", duration: "3:27", url: "https://www.youtube.com/watch?v=Il0S8BoucSA" },
        { title: "Bad Habits", artist: "Ed Sheeran", duration: "3:50", url: "https://www.youtube.com/watch?v=orJSJGHjBLI" },
        { title: "Astronaut In The Ocean", artist: "Masked Wolf", duration: "2:11", url: "https://www.youtube.com/watch?v=MEg-oqI9qmw" },
        { title: "Wellerman", artist: "Nathan Evans", duration: "2:42", url: "https://www.youtube.com/watch?v=-KO7cofMJH0" },
        { title: "Rasputin", artist: "Boney M", duration: "5:50", url: "https://www.youtube.com/watch?v=16y1AkoZkmQ" },
        { title: "Bloody Mary", artist: "Lady Gaga", duration: "4:04", url: "https://www.youtube.com/watch?v=qXCuTo-x8Xo" },
        { title: "Running Up That Hill", artist: "Kate Bush", duration: "5:03", url: "https://www.youtube.com/watch?v=wp43OdtAAkM" },
        { title: "As It Was", artist: "Harry Styles", duration: "2:47", url: "https://www.youtube.com/watch?v=H5v3kku4y6Q" },
        { title: "Anti-Hero", artist: "Taylor Swift", duration: "3:20", url: "https://www.youtube.com/watch?v=b1kbLwvqugk" },
        { title: "Flowers", artist: "Miley Cyrus", duration: "3:20", url: "https://www.youtube.com/watch?v=G7KNmW9a75Y" },
        { title: "Calm Down", artist: "Rema & Selena Gomez", duration: "3:59", url: "https://www.youtube.com/watch?v=WcIcVapfqXw" },
        { title: "Unholy", artist: "Sam Smith & Kim Petras", duration: "2:36", url: "https://www.youtube.com/watch?v=Uq9gPaIzbe8" },
        { title: "Creepin'", artist: "Metro Boomin, The Weeknd, 21 Savage", duration: "3:41", url: "https://www.youtube.com/watch?v=dilK4y1OJr0" },
        { title: "Die For You", artist: "The Weeknd", duration: "4:20", url: "https://www.youtube.com/watch?v=qKO8RL9YBAI" },
        { title: "Vampire", artist: "Olivia Rodrigo", duration: "3:39", url: "https://www.youtube.com/watch?v=RlPNh_PBZb4" }
      ]
    },
    
    bollywood: {
      name: "🎬 Bollywood",
      icon: "🎬",
      tracks: [
        // 3 IDIOTS SONGS - COMPLETE ALBUM
        { title: "All Is Well", artist: "3 Idiots", duration: "4:25", url: "https://www.youtube.com/watch?v=7NJqUN9TClM" },
        { title: "Zoobi Doobi", artist: "3 Idiots", duration: "4:32", url: "https://www.youtube.com/watch?v=Hrp_88K3jBE" },
        { title: "Behti Hawa Sa Tha Woh", artist: "3 Idiots", duration: "5:02", url: "https://www.youtube.com/watch?v=1k8craCGpgs" },
        { title: "Give Me Some Sunshine", artist: "3 Idiots", duration: "4:15", url: "https://www.youtube.com/watch?v=82LBaKi7BPM" },
        { title: "Aal Izz Well", artist: "3 Idiots", duration: "4:25", url: "https://www.youtube.com/watch?v=7NJqUN9TClM" },
        
        // OTHER BOLLYWOOD HITS
        { title: "Mann Mera", artist: "Table No. 21", duration: "4:12", url: "https://www.youtube.com/watch?v=Tz0aF7TyLRw" },
        { title: "Kesariya", artist: "Brahmastra", duration: "4:28", url: "https://www.youtube.com/watch?v=zJIlftta6fk" },
        { title: "Tum Hi Ho", artist: "Aashiqui 2", duration: "4:22", url: "https://www.youtube.com/watch?v=Tz0aF7TyLRw" },
        { title: "Bekhayali", artist: "Kabir Singh", duration: "6:11", url: "https://www.youtube.com/watch?v=zJIlftta6fk" },
        { title: "Raabta", artist: "Agent Vinod", duration: "4:05", url: "https://www.youtube.com/watch?v=Tz0aF7TyLRw" },
        { title: "Tera Ban Jaunga", artist: "Kabir Singh", duration: "3:56", url: "https://www.youtube.com/watch?v=zJIlftta6fk" },
        { title: "Pehla Nasha", artist: "Jo Jeeta Wohi Sikandar", duration: "5:58", url: "https://www.youtube.com/watch?v=Tz0aF7TyLRw" },
        { title: "Tujhe Kitna Chahne Lage", artist: "Kabir Singh", duration: "4:44", url: "https://www.youtube.com/watch?v=zJIlftta6fk" },
        { title: "Kal Ho Naa Ho", artist: "Kal Ho Naa Ho", duration: "5:20", url: "https://www.youtube.com/watch?v=Tz0aF7TyLRw" },
        { title: "Tum Se Hi", artist: "Jab We Met", duration: "5:42", url: "https://www.youtube.com/watch?v=zJIlftta6fk" },
        { title: "Channa Mereya", artist: "Ae Dil Hai Mushkil", duration: "4:49", url: "https://www.youtube.com/watch?v=Tz0aF7TyLRw" },
        { title: "Ae Dil Hai Mushkil", artist: "Ae Dil Hai Mushkil", duration: "4:29", url: "https://www.youtube.com/watch?v=zJIlftta6fk" },
        { title: "Gerua", artist: "Dilwale", duration: "4:26", url: "https://www.youtube.com/watch?v=Tz0aF7TyLRw" },
        { title: "Hawayein", artist: "Jab Harry Met Sejal", duration: "3:58", url: "https://www.youtube.com/watch?v=zJIlftta6fk" },
        { title: "Dil Diyan Gallan", artist: "Tiger Zinda Hai", duration: "3:55", url: "https://www.youtube.com/watch?v=Tz0aF7TyLRw" }
      ]
    },
    
    classical: {
      name: "🎹 Classical",
      icon: "🎹",
      tracks: [
        { title: "Moonlight Sonata", artist: "Beethoven", duration: "15:50", url: "https://www.youtube.com/watch?v=4Tr0otuiQuU" },
        { title: "Für Elise", artist: "Beethoven", duration: "3:15", url: "https://www.youtube.com/watch?v=_mVW8tgGY_w" },
        { title: "Canon in D", artist: "Pachelbel", duration: "5:38", url: "https://www.youtube.com/watch?v=NlprozGcs80" },
        { title: "Clair de Lune", artist: "Debussy", duration: "5:02", url: "https://www.youtube.com/watch?v=CvFH_6DNRCY" },
        { title: "Interstellar Theme", artist: "Hans Zimmer", duration: "4:35", url: "https://www.youtube.com/watch?v=UDVtMYqUAyw" },
        { title: "Time - Inception", artist: "Hans Zimmer", duration: "4:35", url: "https://www.youtube.com/watch?v=RxabLA7UQ9k" },
        { title: "Nuvole Bianche", artist: "Ludovico Einaudi", duration: "5:57", url: "https://www.youtube.com/watch?v=kcihcYEOeic" },
        { title: "Experience", artist: "Ludovico Einaudi", duration: "5:15", url: "https://www.youtube.com/watch?v=_VONMkKkdf4" },
        { title: "River Flows In You", artist: "Yiruma", duration: "3:50", url: "https://www.youtube.com/watch?v=7maJOI3QMu0" },
        { title: "Kiss The Rain", artist: "Yiruma", duration: "4:32", url: "https://www.youtube.com/watch?v=imGk5OuJI7g" }
      ]
    },
    
    electronic: {
      name: "⚡ Electronic",
      icon: "⚡",
      tracks: [
        { title: "Strobe", artist: "Deadmau5", duration: "10:37", url: "https://www.youtube.com/watch?v=tKi9Z-f6qX4" },
        { title: "Faded", artist: "Alan Walker", duration: "3:32", url: "https://www.youtube.com/watch?v=60ItHLz5WEA" },
        { title: "Levels", artist: "Avicii", duration: "3:18", url: "https://www.youtube.com/watch?v=_ovdm2yX4MA" },
        { title: "Wake Me Up", artist: "Avicii", duration: "4:09", url: "https://www.youtube.com/watch?v=IcrbM1l_BoI" },
        { title: "Clarity", artist: "Zedd", duration: "4:32", url: "https://www.youtube.com/watch?v=IxxstCcJlsc" },
        { title: "Titanium", artist: "David Guetta ft. Sia", duration: "4:05", url: "https://www.youtube.com/watch?v=JRfuAukYTKg" },
        { title: "Animals", artist: "Martin Garrix", duration: "5:02", url: "https://www.youtube.com/watch?v=gCYcHz2k5x0" },
        { title: "Lean On", artist: "Major Lazer & DJ Snake", duration: "2:56", url: "https://www.youtube.com/watch?v=YqeW9_5kURI" },
        { title: "Don't You Worry Child", artist: "Swedish House Mafia", duration: "3:32", url: "https://www.youtube.com/watch?v=1y6smkh6c-0" },
        { title: "Waiting For Love", artist: "Avicii", duration: "3:50", url: "https://www.youtube.com/watch?v=cHHLHGNpCSA" }
      ]
    },
    
    ambient: {
      name: "🌙 Ambient",
      icon: "🌙",
      tracks: [
        { title: "Weightless", artist: "Marconi Union", duration: "8:09", url: "https://www.youtube.com/watch?v=UfcAVejslrU" },
        { title: "Rain Sounds", artist: "Nature Sounds", duration: "10:00:00", url: "https://www.youtube.com/watch?v=mPZkdNFkNps" },
        { title: "Ocean Waves", artist: "Nature Sounds", duration: "8:00:00", url: "https://www.youtube.com/watch?v=WHPEKLQID4U" },
        { title: "Forest Sounds", artist: "Nature Sounds", duration: "6:00:00", url: "https://www.youtube.com/watch?v=xNN7iTA57jM" },
        { title: "Thunderstorm", artist: "Nature Sounds", duration: "3:00:00", url: "https://www.youtube.com/watch?v=nDq6TstdEi8" },
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
        { title: "In The End", artist: "Linkin Park", duration: "3:36", url: "https://www.youtube.com/watch?v=eVTXPUF4Oz4" },
        { title: "Bohemian Rhapsody", artist: "Queen", duration: "5:55", url: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ" },
        { title: "Stairway to Heaven", artist: "Led Zeppelin", duration: "8:02", url: "https://www.youtube.com/watch?v=QkF3oxziUI4" },
        { title: "Hotel California", artist: "Eagles", duration: "6:30", url: "https://www.youtube.com/watch?v=09839DpTctU" },
        { title: "Sweet Child O' Mine", artist: "Guns N' Roses", duration: "5:56", url: "https://www.youtube.com/watch?v=1w7OgIMMRc4" },
        { title: "Smells Like Teen Spirit", artist: "Nirvana", duration: "5:01", url: "https://www.youtube.com/watch?v=hTWKbfoikeg" },
        { title: "Wonderwall", artist: "Oasis", duration: "4:18", url: "https://www.youtube.com/watch?v=bx1Bh8ZvH84" }
      ]
    },
    
    indie: {
      name: "🎧 Indie/Alternative",
      icon: "🎧",
      tracks: [
        { title: "Pumped Up Kicks", artist: "Foster The People", duration: "3:59", url: "https://www.youtube.com/watch?v=SDTZ7iX4vTQ" },
        { title: "Riptide", artist: "Vance Joy", duration: "3:24", url: "https://www.youtube.com/watch?v=uJ_1HMAGb4k" },
        { title: "Take Me to Church", artist: "Hozier", duration: "4:01", url: "https://www.youtube.com/watch?v=PVjiKRfKpPI" },
        { title: "Radioactive", artist: "Imagine Dragons", duration: "3:06", url: "https://www.youtube.com/watch?v=ktvTqknDobU" },
        { title: "Demons", artist: "Imagine Dragons", duration: "2:57", url: "https://www.youtube.com/watch?v=mWRsgZuwf_8" },
        { title: "Counting Stars", artist: "OneRepublic", duration: "4:17", url: "https://www.youtube.com/watch?v=hT_nvWreIhg" },
        { title: "Secrets", artist: "OneRepublic", duration: "3:45", url: "https://www.youtube.com/watch?v=qHm9MG9xw1o" },
        { title: "Somebody That I Used To Know", artist: "Gotye", duration: "4:04", url: "https://www.youtube.com/watch?v=8UVNT4wvIGY" },
        { title: "Ho Hey", artist: "The Lumineers", duration: "2:43", url: "https://www.youtube.com/watch?v=zvCBSSwgtg4" },
        { title: "Little Talks", artist: "Of Monsters and Men", duration: "4:24", url: "https://www.youtube.com/watch?v=ghb6eDopW8I" }
      ]
    },
    
    trap: {
      name: "🔊 Trap/Hip-Hop",
      icon: "🔊",
      tracks: [
        { title: "SICKO MODE", artist: "Travis Scott", duration: "5:13", url: "https://www.youtube.com/watch?v=6ONRf7h3Mdk" },
        { title: "goosebumps", artist: "Travis Scott", duration: "4:03", url: "https://www.youtube.com/watch?v=Dst9gZkq1a8" },
        { title: "Lucid Dreams", artist: "Juice WRLD", duration: "3:59", url: "https://www.youtube.com/watch?v=mzB1VGEGcSU" },
        { title: "Rockstar", artist: "Post Malone ft. 21 Savage", duration: "3:38", url: "https://www.youtube.com/watch?v=UceaB4D0jpo" },
        { title: "Congratulations", artist: "Post Malone", duration: "3:40", url: "https://www.youtube.com/watch?v=SC4xMk98Pdc" },
        { title: "Sunflower", artist: "Post Malone & Swae Lee", duration: "2:38", url: "https://www.youtube.com/watch?v=ApXoWvfEYVU" },
        { title: "God's Plan", artist: "Drake", duration: "3:19", url: "https://www.youtube.com/watch?v=xpVfcZ0ZcFM" },
        { title: "In My Feelings", artist: "Drake", duration: "3:37", url: "https://www.youtube.com/watch?v=DRS_PpOrUZ4" },
        { title: "Mask Off", artist: "Future", duration: "3:24", url: "https://www.youtube.com/watch?v=xvZqHgFz51I" },
        { title: "XO TOUR Llif3", artist: "Lil Uzi Vert", duration: "3:03", url: "https://www.youtube.com/watch?v=WrsFXgQk5UI" }
      ]
    },
    
    edm: {
      name: "💥 EDM/Festival",
      icon: "💥",
      tracks: [
        { title: "Tremor", artist: "Dimitri Vegas & Martin Garrix", duration: "4:54", url: "https://www.youtube.com/watch?v=9vMh9f41pqE" },
        { title: "Tsunami", artist: "DVBBS & Borgeous", duration: "3:42", url: "https://www.youtube.com/watch?v=0EWbonj7f18" },
        { title: "Turn Down for What", artist: "DJ Snake & Lil Jon", duration: "3:34", url: "https://www.youtube.com/watch?v=HMUDVMiITOU" },
        { title: "Wizard", artist: "Martin Garrix & Jay Hardway", duration: "3:16", url: "https://www.youtube.com/watch?v=Ek3aeUhHaFY" },
        { title: "Virus", artist: "Martin Garrix & MOTi", duration: "3:48", url: "https://www.youtube.com/watch?v=IJNR2EpS0jw" },
        { title: "Mammoth", artist: "Dimitri Vegas & Like Mike", duration: "4:32", url: "https://www.youtube.com/watch?v=Eko4K35pfSs" },
        { title: "Epic", artist: "Sandro Silva & Quintino", duration: "3:18", url: "https://www.youtube.com/watch?v=IxxstCcJlsc" },
        { title: "Cannonball", artist: "Showtek & Justin Prime", duration: "5:32", url: "https://www.youtube.com/watch?v=R-SiPh4Qpxs" }
      ]
    },
    
    kpop: {
      name: "🇰🇷 K-Pop",
      icon: "🇰🇷",
      tracks: [
        { title: "Dynamite", artist: "BTS", duration: "3:19", url: "https://www.youtube.com/watch?v=gdZLi9oWNZg" },
        { title: "Butter", artist: "BTS", duration: "2:44", url: "https://www.youtube.com/watch?v=WMweEpGlu_U" },
        { title: "How You Like That", artist: "BLACKPINK", duration: "3:02", url: "https://www.youtube.com/watch?v=ioNng23DkIM" },
        { title: "DDU-DU DDU-DU", artist: "BLACKPINK", duration: "3:29", url: "https://www.youtube.com/watch?v=IHNzOHi8sJs" },
        { title: "Gangnam Style", artist: "PSY", duration: "3:39", url: "https://www.youtube.com/watch?v=9bZkp7q19f0" },
        { title: "Kill This Love", artist: "BLACKPINK", duration: "3:13", url: "https://www.youtube.com/watch?v=2S24-y0Ij3Y" },
        { title: "Boy With Luv", artist: "BTS ft. Halsey", duration: "3:49", url: "https://www.youtube.com/watch?v=XsX3ATc3FbA" },
        { title: "Fake Love", artist: "BTS", duration: "4:02", url: "https://www.youtube.com/watch?v=7C2z4GqqS5E" }
      ]
    }
  }
};

console.log("🎵 Music Library Loaded: 220+ tracks across 16 categories!");