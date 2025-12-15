import { createContext, useState } from "react";

export const Featureflag = createContext({});

export const FeatureflagProvider = ({ children }) => {
  const [feature, setFeature] = useState({
    isGooglePayEnabled: true,
    isApplePayEnabled: true ,
  });

  return (
    <Featureflag.Provider value={{ feature }}>{children}</Featureflag.Provider>
  );
};
