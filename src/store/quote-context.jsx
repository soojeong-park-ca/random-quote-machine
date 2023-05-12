import { createContext } from "react";

const QuoteContext = createContext({
  loading: true,
  error: "",
  allQuotes: [],
  quote: {},
  changeQuote: () => {},
});

export default QuoteContext;
