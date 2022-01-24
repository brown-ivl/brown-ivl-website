import "./App.css";
import React, { useState, useEffect } from "react";
import AppMarkdown from "./markdownexample.md";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(AppMarkdown)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  });

  return (
    <div className="App">
      <header className="App-header">
        <ReactMarkdown children={markdown} />
      </header>
    </div>
  );
}

export default App;
