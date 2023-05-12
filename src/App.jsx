import QuoteBox from "./components/QuoteBox/QuoteBox";
import Footer from "./components/Footer/Footer";

import QuoteProvider from "./store/QuoteProvider";

function App() {
  return (
    <QuoteProvider>
      <h1>Random Quote Machine</h1>
      <QuoteBox />
      <Footer />
    </QuoteProvider>
  );
}

export default App;
