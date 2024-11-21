import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ThemeWrapper from "./ThemeWrapper";

const App = () => {
  return (
    <div className="app">
      <ThemeWrapper />
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
