import QuoteIcon from "../QuoteIcon";
import TwitterIcon from "../TwitterIcon";
import TumblrIcon from "../TumblrIcon";
import "./QuoteBox.scss";

const QuoteBox = () => {
  return (
    <div id="quote-box">
      <div className="quote-text">
        <QuoteIcon className="quote-icon" />
        <span id="text">
          Twenty years from now you will be more disappointed by the things that
          you didn’t do than by the ones you did do, so throw off the bowlines,
          sail away from safe harbor, catch the trade winds in your sails.
          Explore, Dream, Discover.
        </span>
      </div>
      <div className="quote-author">
        - <span id="author">Mark Twain</span>
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
