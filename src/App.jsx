import "./App.css";
import BusinessList from "./components/BusinessList";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

import businesses from "./data/businesses.js";

function App() {
  return (
    <>
      <Header />
      <SearchForm />
      <BusinessList businesses={businesses} />
    </>
  );
}

export default App;
