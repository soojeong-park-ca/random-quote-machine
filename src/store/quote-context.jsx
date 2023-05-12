import { createContext } from "react";

const QuoteContext = createContext({
  quoteData: {},
  loading: false,
  error: null,
});

export default QuoteContext;
