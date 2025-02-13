//import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import MoviesList from "./components/Header/MoviesList";
import Login from "./components/Login";
import './styles.scss';
import { ThemeProvider } from "styled-components";
import Theme from "./theme";
import GlobalStyle from "./theme/GlobalStyles";
//import MoviesListe from "./components/MoviesListe";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/" element={<Login />} />
        </Routes>
        {/* <MoviesListe /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
