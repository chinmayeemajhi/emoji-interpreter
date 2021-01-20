import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😭": "crying a river",
  "😳": "flushed",
  "😎": "carefree",
  "😈": "happy devil",
  "😣": "persevering",
  "😴": "sleeping",
  "🙄": "rolling eyes",
  "🤯": "exploding head"
};

export default function App() {
  var [meaning, setMeaning] = useState("");
  var emojiList = Object.keys(emojiDictionary);

  function inputEmojiHandler(event) {
    var meaning = emojiDictionary[event.target.value];
    if (meaning === undefined) {
      meaning = <span style={{ padding: "0.5rem", fontSize: "1rem", color: "red"}}>We don't have this emoji in our database</span>;
      // "We don't have this emoji in our database";
    }
    setMeaning(meaning);
    console.log(meaning);
  }

  function listEmojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
    console.log(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input onChange={inputEmojiHandler}></input>
      <h2>{meaning}</h2>
      <h3>emojis we know</h3>

      {emojiList.map((emoji) => {
        return (
          <span
            key={emoji}
            onClick={() => listEmojiClickHandler(emoji)}
            style={{ padding: "0.5rem", fontSize: "1.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
