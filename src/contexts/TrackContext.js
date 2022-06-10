import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const IPTrackContext = createContext();

console.log(process.env);

export const IPTrackProvider = ({ children }) => {
  const [infosTrack, setInfosTrack] = useState({
    ip: "-",
    location: "-",
    timezone: "-",
    isp: "-",
  });
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getMyIP = async () => {
    const response = await axios.get("https://api.ipify.org/?format=json");
    return response.data.ip;
  };

  const getIpTrackInfo = async (ipOrDomain) => {
    const regex = /^[0-9]/g;
    const ipOrDomainType = regex.test(ipOrDomain)
      ? `ipAddress=${ipOrDomain}`
      : `domain=${ipOrDomain}`;

    try {
      setLoading(true);
      setError(false);
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${
          process.env.REACT_APP_API_KEY
        }&${ipOrDomainType.toLowerCase()}`
      );

      const { ip, isp, location } = await response.data;
      setInfosTrack({
        ip,
        location: location.region,
        timezone: location.timezone,
        isp,
      });

      setCoordinates({ lat: location.lat, lng: location.lng });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      const ip = await getMyIP();
      getIpTrackInfo(ip);
    })();
  }, []);

  return (
    <IPTrackContext.Provider
      value={{
        infosTrack,
        coordinates,
        getIpTrackInfo,
        setCoordinates,
        loading,
        error,
      }}
    >
      {children}
    </IPTrackContext.Provider>
  );
};
