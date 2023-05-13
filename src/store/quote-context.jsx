import { createContext } from "react";

const QuoteContext = createContext({
  loading: true,
  error: null,
  allQuotes: [],
  quote: {},
  allColors: [],
  color: "",
  changeQuote: () => {},
});

export default QuoteContext;
