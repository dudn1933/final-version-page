import "./common/style/reset.css";
import theme from "./common/style/theme";
import styled from 'styled-components';
import { ThemeProvider } from "styled-components"; 
import Aside from './components/aside/Aside'
import Main from './components/main/Main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Aside />
      <Main />
    </ThemeProvider>
  );
}

export default App;
