import { Card, CardContent, Typography, List } from "@mui/material";
import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";
import ToDo from "./ToDo";

function ToDoCard() {
  const toDos = useRecoilValue(toDoSelector);
  return (
    <Card>
      <CardContent>
        <Typography
          align="center"
          sx={{ fontWeight: 600, fontSize: 25 }}
          gutterBottom
        >
          TO DO LIST
        </Typography>
        <List>
          {toDos?.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default ToDoCard;
