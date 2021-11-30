import { useForm } from "react-hook-form";
import { Z_STREAM_ERROR } from "zlib";

/* function ToDoList() {
  const [toDo, setToDo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
} */

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  password1: string;
  password2: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password1 !== data.password2) {
      setError(
        "password2",
        { message: "Passwords are not the same" },
        { shouldFocus: true }
      );
    }
    //setError("extraError", { message: "Server offline." });
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "First Name is required",
            minLength: 5,
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "no nicos allowed" : true,
            },
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", {
            required: "Last Name is required",
            minLength: 5,
          })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: { value: 5, message: "Your password is too short." },
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>
        <input
          {...register("password2", { required: "true", minLength: 5 })}
          placeholder="Password2"
        />
        <span>{errors?.password2?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
