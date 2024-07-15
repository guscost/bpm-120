import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import load from "audio-loader";
import { analyze } from "web-audio-beat-detector";

function App() {
  const [bpm, setBpm] = useState(-1);
  load(
    "https://gus.media/songs/nobody_knows_you_when_youre_down_and_out.mp3"
  ).then(function (buffer: AudioBuffer) {
    analyze(buffer)
      .then((tempo: number) => {
        setBpm(tempo);
      })
      .catch((err) => {
        alert(err)
      });
    console.log(buffer); // => <AudioBuffer>
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          BPM: <code>{bpm}</code>
        </p>
      </header>
    </div>
  );
}

export default App;
