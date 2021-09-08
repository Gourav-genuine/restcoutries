import "./App.css";
import Homepage from "./components/Homepage";
import SearchBar from "./components/SearchBar";
import CardPage from "./components/CardPage";
import DetailPage from "./components/DetailPage";
import { Route, Switch, useLocation } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/SearchBar">
          <SearchBar />
        </Route>
        {/* <Route path='/PrintCard'>
          <PrintCard />
        </Route> */}
        <Route path="/DetailPage">
          <DetailPage />
        </Route>

        <Route path="/CardPage">
          <CardPage />
        </Route>

        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
