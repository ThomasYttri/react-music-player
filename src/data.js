import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
    {
        name: "Staring at the Sun",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/6263175f6334ac348613790b863794010f2a9524-1024x1024.jpg",
        artist: "Delayde, tender spring",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9285",
        color: ["#4B2B76", "#F49FE1"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "Time to Shine",
        cover: "https://chillhop.com/wp-content/uploads/2020/08/63d2d2cdabbc5df023603b5f47b2fb97963cb537-1024x1024.jpg",
        artist: "Sitting Duck, Hoffy Beats",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9785",
        color: ["#47533B", "#66C8B9"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "Vinho Verde",
        cover: "https://chillhop.com/wp-content/uploads/2020/07/ae91385fc2d92e40dd4bf337867dee16fb5648d2-1024x1024.jpg",
        artist: "Clap Cotton",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9447",
        color: ["#392E2C", "#C5E576"],
        id: uuidv4(),
        active: false,
    }
  ];
}

export default chillHop;