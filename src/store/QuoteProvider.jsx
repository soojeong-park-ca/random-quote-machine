import { useReducer, useEffect } from "react";

import QuoteContext from "./quote-context";

import axios from "axios";

const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";
const CHANGE_QUOTE = "CHANGE_QUOTE";

const initialState = {
  loading: true,
  error: "",
  allQuotes: [],
  quote: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        allQuotes: action.payload,
        quote:
          action.payload[Math.floor(Math.random() * action.payload.length)],
        error: "",
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        quote: {},
        error: "Something went wrong!",
      };
    case CHANGE_QUOTE:
      const currentQuoteIndex = state.allQuotes.findIndex(
        quote => quote === state.quote
      );
      let newQuoteIndex;

      // Find a new quote index that is different from the current one
      do {
        newQuoteIndex = Math.floor(Math.random() * state.allQuotes.length);
      } while (newQuoteIndex === currentQuoteIndex);

      return {
        ...state,
        quote: state.allQuotes[newQuoteIndex],
      };
    default:
      return state;
  }
};

const QuoteProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then(response => {
        console.log("fetching data...");
        dispatch({
          type: FETCH_SUCCESS,
          payload: response.data.quotes,
        });
      })
      .catch(error => {
        dispatch({ type: FETCH_ERROR });
      });
  }, []);

  const changeQuoteHandler = () => {
    dispatch({ type: CHANGE_QUOTE });
  };

  const quoteContext = {
    loading: state.loding,
    error: state.error,
    allQuotes: state.allQuotes,
    quote: state.quote,
    changeQuote: changeQuoteHandler,
  };

  return (
    <QuoteContext.Provider value={quoteContext}>
      {props.children}
    </QuoteContext.Provider>
  );
};

export default QuoteProvider;

/*
      {state.loading
        ? "Loading..."
        : console.log(randomQuoteData.quote, randomQuoteData.author)}
      {state.error ? state.error : null}
*/
