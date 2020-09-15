import React, { useState, useEffect } from "react";
import "./Quote.css";
import "./App.css";
import axios from "axios";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const quoteAPI = async () => {
    let arrayofQuotes = [];
    try {
      const data = await axios.get("https://api.quotable.io/random");
      arrayofQuotes = data.data;
    } catch (error) {
      console.log(error);
    }
    try {
      setQuote(arrayofQuotes.content);
      setAuthor(arrayofQuotes.author);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    quoteAPI();
  }, []);
  return (
    <div className="App">
      <div className="quoteBox">
        <div className="container">
          <div className="quoteButton">
            <button onClick={quoteAPI}>Next Quote !</button>
            <div className="quote">
              <h1>{quote}</h1>
            </div>
            <div className="author">{author}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
