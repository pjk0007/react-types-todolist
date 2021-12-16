import { atom, selector } from "recoil";

export const LocalToDo = "LocalToDo";
export const LocalCategory = "LocalCategory";

export interface IToDo {
  text: string;
  id: number;
  category: string;
}

export const categoriesDefault = ["TO DO", "DOING", "DONE"];

export const categoriesState = atom<string[]>({
  key: "categories",
  default: categoriesDefault,
});

export const categoryState = atom<string>({
  key: "category",
  default: categoriesDefault[0],
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: JSON.parse(localStorage.getItem(LocalToDo) ?? "[]"),
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
  },
});
