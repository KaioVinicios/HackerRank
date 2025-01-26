// Word Omitter
// https://www.hackerrank.com/challenges/react-word-omitter/problem

import React, { useState } from "react";

const OMITTED_WORDS = ["a", "the", "and", "or", "but"];

function WordOmitter() {
  const [inputText, setInputText] = useState("");
  const [omitWords, setOmitWords] = useState(true);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const toggleOmitWords = () => {
    setOmitWords(!omitWords);
  };

  const clearFields = () => {
    setInputText("");
    setOmitWords(true);
  };

  const getProcessedText = () => {
    let inputTextInList = inputText.split(" ");
    let textWithoutOmittedWords = [];
    inputTextInList.forEach((word) => {
      if (!OMITTED_WORDS.includes(word)) {
        textWithoutOmittedWords.push(word);
      }
    });
    if (omitWords == true) {
      return textWithoutOmittedWords.join(" ");
    } else return inputText;
  };

  return (
    <div className="omitter-wrapper">
      <textarea
        placeholder="Type here..."
        value={inputText}
        onChange={handleInputChange}
        data-testid="input-area"
      />
      <div>
        <button onClick={toggleOmitWords} data-testid="action-btn">
          {omitWords ? "Show All Words" : "Omit Words"}
        </button>
        <button onClick={clearFields} data-testid="clear-btn">
          Clear
        </button>
      </div>
      <div>
        <h2>Output:</h2>
        <p data-testid="output-text">{getProcessedText()}</p>
      </div>
    </div>
  );
}

export { WordOmitter };
