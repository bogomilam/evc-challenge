import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
      100: "#f7fafc",
      'light-green': "#00FF00",
      // ...
      900: "#1a202c",
  },
  // fonts,
  breakpoints: {
    sm: "40em",
    md: "52em",
    lg: "64em",
    xl: "80em",
  },
});
