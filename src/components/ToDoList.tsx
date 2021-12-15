import styled from "styled-components";
import AddCategroy from "./AddCategory";
import CategorySelect from "./CategorySelect";
import CreateToDo from "./CreateToDo";
import ToDoCard from "./ToDoCard";

const MainBox = styled.div`
  max-width: 500px;
  width: 100vw;
  margin: 5vh auto;
`;

function ToDoList() {
  return (
    <MainBox>
      <CategorySelect />
      <AddCategroy />
      <CreateToDo />
      <ToDoCard />
    </MainBox>
  );
}
export default ToDoList;
