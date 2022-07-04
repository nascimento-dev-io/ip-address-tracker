import { GlobalStyles } from "./globals";
import { Header } from "./components/Header";
import { MapLocation } from "./components/MapLocation";
import { AppContextProvider } from "./contexts";
import Banner from "./components/Banner";

const App = () => {
  return (
    <AppContextProvider>
      <GlobalStyles />
      <Banner />
      <Header />
      <MapLocation />
    </AppContextProvider>
  );
};

export default App;
