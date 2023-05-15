import { useContext } from "react";

import QuoteContext from "../../store/quote-context";

import "./QuoteBox.scss";

const QuoteBox = () => {
  const QuoteCtx = useContext(QuoteContext);
  const currentQuote = QuoteCtx.quote.quote;
  const currentAuthor = replaceSpaces(QuoteCtx.quote.author);

  function replaceSpaces(string) {
    if (/[.\s]/.test(string)) {
      return string.replace(/[.\s]/g, "");
    } else {
      return string;
    }
  }

  // console.log(QuoteCtx.color);
  // console.log(currentAuthor);

  // Change CSS variable value
  document.documentElement.style.setProperty("--primary-color", QuoteCtx.color);

  return (
    <div id="quote-box">
      <div className="quote__text-box">
        <i className="fa-solid fa-quote-left quote__icon"></i>&nbsp;
        <span id="text" className="quote__text">
          {QuoteCtx.quote.quote}
        </span>
      </div>
      <div className="quote__author">
        - <span id="author">{QuoteCtx.quote.author}</span>
      </div>
      <div className="buttons">
        <a
          id="tweet-quote"
          className="button button--sns button--twitter"
          href={`https://twitter.com/intent/tweet?text="${currentQuote}."&hashtags=${currentAuthor},QuoteOfTheDay`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-twitter fa-lg quote__button-icon"></i>
        </a>
        <a
          id="tumblr-quote"
          className="button button--sns button--tumblr"
          href="/"
        >
          <i className="fa-brands fa-tumblr fa-lg quote__button-icon"></i>
        </a>
        <button
          id="new-quote"
          className="button button-new-quote"
          onClick={QuoteCtx.changeQuote}
        >
          New quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
