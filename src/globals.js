import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
  --primary-dark-gray:  hsl(0, 0%, 17%);
  --secondary-dark-gray:  hsl(0, 0%, 59%);
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
