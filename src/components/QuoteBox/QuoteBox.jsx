import { useContext } from "react";

import QuoteContext from "../../store/quote-context";

import "./QuoteBox.scss";

const QuoteBox = () => {
  const QuoteCtx = useContext(QuoteContext);
  const currentQuote = QuoteCtx.quote.quote;
  const currentAuthor = QuoteCtx.quote.author;
  const currentAuthorHashtag = replaceSpaces(QuoteCtx.quote.author);

  function replaceSpaces(string) {
    if (/[.\s]/.test(string)) {
      return string.replace(/[.\s]/g, "");
    } else {
      return string;
    }
  }

  // Change CSS variable value
  document.documentElement.style.setProperty("--primary-color", QuoteCtx.color);

  return (
    <div id="quote-box">
      <blockquote className="quote__text-box">
        <i className="fa-solid fa-quote-left quote__icon"></i>&nbsp;
        <span id="text" className="quote__text">
          {QuoteCtx.quote.quote}
        </span>
      </blockquote>
      <div id="author" className="quote__author">
        &mdash; {QuoteCtx.quote.author}
      </div>
      <div className="buttons">
        <div className="buttons--sns">
          <a
            id="tweet-quote"
            className="button button--sns button--twitter"
            href={`https://twitter.com/intent/tweet?text="${currentQuote}"&hashtags=${currentAuthorHashtag},QuoteOfTheDay`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter fa-lg quote__button-icon"></i>
          </a>
          <a
            id="tumblr-quote"
            className="button button--sns button--tumblr"
            href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=QuoteOfTheDay,${currentAuthorHashtag}&caption=${currentAuthor}&content=${currentQuote}&canonicalUrl=https://www.tumblr.com/buttons`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-tumblr fa-lg quote__button-icon"></i>
          </a>
        </div>
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
