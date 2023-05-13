import { useReducer, useEffect } from "react";

import QuoteContext from "./quote-context";

import axios from "axios";

const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";
const CHANGE_QUOTE = "CHANGE_QUOTE";
const CHANGE_COLOR = "CHANGE_COLOR";

const initialState = {
  loading: true,
  error: null,
  allQuotes: [],
  quote: {},
  allColors: [
    "#FFB6C1",
    "#FF4500",
    "#FF69B4",
    "#FF6347",
    "#FFD700",
    "#FF8C00",
    "#FF1493",
    "#FFA500",
    "#FF0000",
    "#FF8B00",
    "#FF00FF",
    "#FF00FF",
    "#EE82EE",
    "#DA70D6",
    "#BA55D3",
    "#800080",
    "#4B0082",
    "#8A2BE2",
    "#4169E1",
    "#0000FF",
    "#00BFFF",
    "#87CEEB",
    "#00FA9A",
    "#32CD32",
    "#00FF00",
    "#ADFF2F",
    "#FFFF00",
    "#FFD700",
    "#FFA500",
    "#FF4500",
    "#FF6347",
  ],
  color: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        allQuotes: action.payload,
        quote:
          action.payload[Math.floor(Math.random() * state.allQuotes.length)],
        color:
          state.allColors[Math.floor(Math.random() * state.allColors.length)],
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        quote: {},
        error: "Something went wrong!",
      };
    case CHANGE_QUOTE:
      // quote
      const currentQuoteIndex = state.allQuotes.findIndex(
        quote => quote === state.quote
      );
      let newQuoteIndex;
      // Find a new quote index that is different from the current one
      do {
        newQuoteIndex = Math.floor(Math.random() * state.allQuotes.length);
      } while (newQuoteIndex === currentQuoteIndex);

      // color
      const currentColorIndex = state.allColors.findIndex(
        color => color === state.color
      );
      let newColorIndex;
      // Find a new Color index that is different from the current one
      do {
        newColorIndex = Math.floor(Math.random() * state.allColors.length);
      } while (newColorIndex === currentColorIndex);

      return {
        ...state,
        quote: state.allQuotes[newQuoteIndex],
        color: state.allColors[newColorIndex],
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
    allColors: state.allColors,
    color: state.color,
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
