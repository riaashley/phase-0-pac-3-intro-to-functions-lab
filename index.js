function shout(string) {
    // todo
  }
  function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  function sayHiToHeadphonedRoommate(string) {
      console.log(string);
      console.log(string.toLowerCase());
      if (string===string.toLowerCase()) { 
        return "I can't hear you!"  
      }
      console.log(string);
      console.log(string.toUpperCase());
      if (string===string.toUpperCase()) {
          return "YES INDEED!"
      }
      console.log(string);
      console.log("Let's have dinner together!");
      if (string==="Let's have dinner together!") {
          return "I would love to!"
      }
}