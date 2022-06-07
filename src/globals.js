import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
  --primary-dark-gray: #353a3d;
  --secondary-dark-gray: #a8a8a8;
}

html {
  font-size: 10px;
}

body {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
}
#root {
  max-width: 1440px;

  margin: 0 auto;
}
`;
