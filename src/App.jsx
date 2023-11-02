import "./App.css";
import BusinessList from "./components/BusinessList";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <>
      <Header/>
      <SearchForm />
      <BusinessList />
    </>
  );
}

export default App;
