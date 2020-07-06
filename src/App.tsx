import React, { useState } from "react";
import Layout from "./components/Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

function App() {
  const [actualTheme, setActualTheme] = useState(false);

  const MainTheme = {
    main: "white",
  };

  const SecondaryTheme = {
    main: "black",
  };

  const handleTheme = () => {
    setActualTheme(!actualTheme);
  };

  return (
    <ThemeProvider theme={actualTheme ? MainTheme : SecondaryTheme}>
      {/* <button onClick={handleTheme}>theme changer</button> */}
      <Layout />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
