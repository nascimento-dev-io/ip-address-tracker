import { GlobalStyles } from "./globals";
import { Header } from "./components/Header";
import { MapLocation } from "./components/MapLocation";
import { AppContextProvider } from "./contexts";

const App = () => {
  return (
    <AppContextProvider>
      <GlobalStyles />
      <Header />
      <MapLocation />
    </AppContextProvider>
  );
};

export default App;
