import { GlobalStyles } from "./globals";
import { Header } from "./components/Header";
import { MapLocation } from "./components/MapLocation";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MapLocation />
    </>
  );
};

export default App;
