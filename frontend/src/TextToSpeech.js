export const TextToSpeech = (ourText) => {
    const msg = new SpeechSynthesisUtterance();
    console.log(ourText);
  
    const speechHandler = (msg) => {
      msg.text = ourText;
      console.log(msg.text);
      window.speechSynthesis.speak(msg);
    };
    speechHandler(msg);
    
  };
  