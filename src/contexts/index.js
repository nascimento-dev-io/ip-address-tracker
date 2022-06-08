import { IPTrackProvider } from "./TrackContext";

export const AppContextProvider = ({ children }) => {
  return <IPTrackProvider>{children}</IPTrackProvider>;
};
