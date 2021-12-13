import styled from "styled-components";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, LocalToDo, toDoState } from "../atoms";
import { useEffect } from "react";

interface IForm {
  toDo: string;
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

function CreateToDo() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((prev) => [{ text: toDo, id: Date.now(), category }, ...prev]);
    setValue("toDo", "");
  };
  useEffect(() => {
    localStorage.setItem(LocalToDo, JSON.stringify(toDos));
  }, [toDos]);

  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <TextField
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        id="toDo"
        label="Write a to do"
        variant="standard"
        sx={{ m: 1, width: "100%" }}
      />
      <Button type="submit" variant="contained">
        Add
      </Button>
    </Form>
  );
}

export default CreateToDo;
