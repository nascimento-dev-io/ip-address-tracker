import { GlobalStyles } from "./globals";
import { Header } from "./components/Header";
import { MapLocation } from "./components/MapLocation";
import { IPTrackProvider } from "./hooks/useTrack";

const App = () => {
  return (
    <IPTrackProvider>
      <GlobalStyles />
      <Header />
      <MapLocation />
    </IPTrackProvider>
  );
};

export default App;
