import { Button, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import React from "react";
import { useForm } from "react-hook-form";

interface IForm {
  category: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

function AddCategroy() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ category }: IForm) => {};

  return (
    <div>
      <Button onClick={handleOpen}>Add Category</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Category
          </Typography>
          <Form onSubmit={handleSubmit(handleValid)}>
            <TextField
              {...register("category", {
                required: "Please write a To Do",
              })}
              id="toDo"
              label="Write your Category"
              variant="standard"
              sx={{ m: 1, width: "100%" }}
            />
            <Button type="submit" variant="contained">
              Add
            </Button>
          </Form>
        </Box>
      </Modal>
    </div>
  );
}

export default AddCategroy;
