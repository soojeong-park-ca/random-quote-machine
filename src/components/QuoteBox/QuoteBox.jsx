import { useContext } from "react";

import QuoteContext from "../../store/quote-context";

import "./QuoteBox.scss";

const QuoteBox = () => {
  const QuoteCtx = useContext(QuoteContext);
  console.log(QuoteCtx.color);

  document.documentElement.style.setProperty("--primary-color", QuoteCtx.color);

  return (
    <div id="quote-box">
      <div className="quote__text">
        <i className="fa-solid fa-quote-left"></i>
        <span id="text">{QuoteCtx.quote.quote}</span>
      </div>
      <div className="quote__author">
        - <span id="author">{QuoteCtx.quote.author}</span>
      </div>
      <div className="buttons">
        <a id="tweet-quote" className="button button--sns" href="/">
          <i className="fa-brands fa-twitter fa-lg"></i>
        </a>
        <a id="tumblr-quote" className="button button--sns" href="/">
          <i className="fa-brands fa-tumblr fa-lg"></i>
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
