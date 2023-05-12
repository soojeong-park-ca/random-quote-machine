import { createContext } from "react";

const QuoteContext = createContext({
  loading: true,
  error: "",
  allQuotes: [],
  quote: {},
});

export default QuoteContext;
