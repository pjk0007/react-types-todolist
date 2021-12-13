import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import ToDoList from "./components/ToDoList";
import NavBar from "./components/NavBar";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
  ${reset}; 
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <ToDoList />
    </>
  );
}

export default App;
