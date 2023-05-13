import QuoteBox from "./components/QuoteBox/QuoteBox";
import Footer from "./components/Footer/Footer";

import QuoteProvider from "./store/QuoteProvider";

import "./App.scss";

function App() {
  return (
    <QuoteProvider>
      <div className="heading-box">
        <h1 className="heading-primary">Random Quote Machine</h1>
      </div>
      <QuoteBox />
      <Footer />
    </QuoteProvider>
  );
}

export default App;
