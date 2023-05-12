import { useContext } from "react";

import QuoteIcon from "../QuoteIcon";
import TwitterIcon from "../TwitterIcon";
import TumblrIcon from "../TumblrIcon";

import QuoteContext from "../../store/quote-context";

import "./QuoteBox.scss";

const QuoteBox = () => {
  const QuoteCtx = useContext(QuoteContext);

  return (
    <div id="quote-box">
      <div className="quote-text">
        <QuoteIcon className="quote-icon" />
        <span id="text">{QuoteCtx.quote.quote}</span>
      </div>
      <div className="quote-author">
        - <span id="author">{QuoteCtx.quote.author}</span>
      </div>
      <div className="buttons">
        <a id="tweet-quote" className="button" href="/">
          <TwitterIcon className="twitter-icon" />
        </a>
        <a id="tumblr-quote" className="button" href="/">
          <TumblrIcon className="tumblr-icon" />
        </a>
        <button id="new-quote" className="button">
          New quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
