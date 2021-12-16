import { Button, ButtonGroup, ListItem, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, LocalToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  useEffect(() => {
    const toDoLists = JSON.parse(localStorage.getItem(LocalToDo) ?? "[]");
    setToDos(toDoLists);
  }, []);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };

      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);

      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <ListItem
      id={String(id)}
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Typography sx={{ fontSize: 20 }}>
        <Button sx={{ p: 0 }} onClick={onDelete}>
          ❌
        </Button>
        {text}
      </Typography>
      <ButtonGroup
        variant="contained"
        aria-label="moving category button group"
      >
        {category !== "TO DO" && (
          <Button variant="outlined" name="TO_DO" onClick={onClick}>
            To Do
          </Button>
        )}
        {category !== "DOING" && (
          <Button variant="outlined" name="DOING" onClick={onClick}>
            Doing
          </Button>
        )}
        {category !== "DONE" && (
          <Button variant="outlined" name="DONE" onClick={onClick}>
            Done
          </Button>
        )}
      </ButtonGroup>
    </ListItem>
  );
}

export default ToDo;
