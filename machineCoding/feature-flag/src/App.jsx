import { useContext, useState } from "react";
import "./App.css";
import { Featureflag, FeatureflagProvider } from "./context/FeatureFlag";

const Example = () => {
  <Feature feature="isGooglePayEnabled">Google</Feature>;
  <Feature feature="isApplePayEnabled">Apple</Feature>;
};

const Feature = ({ featureType, children }) => {
  const { feature } = useContext(Featureflag);
  return feature[featureType] ? children : null;
};

function App() {
  return (
    <>
      <FeatureflagProvider>
        <Example></Example>
      </FeatureflagProvider>
    </>
  );
}

export default App;
