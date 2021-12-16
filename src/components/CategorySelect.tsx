import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { categoriesState, categoryState } from "../atoms";

function CategorySelect() {
  const [category, setCategory] = useRecoilState(categoryState);
  const [categories, setCategories] = useRecoilState(categoriesState);
  const onChange = (event: SelectChangeEvent) => {
    setCategory(event?.target.value as any);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="category-input-label">Category</InputLabel>
      <Select
        labelId="category-label"
        id="category"
        value={category}
        onChange={onChange}
      >
        {categories.map((item: string) => {
          return <MenuItem value={item}>{item}</MenuItem>;
        })}
        {/* <MenuItem value={Category.TO_DO}>{Category.TO_DO}</MenuItem>
        <MenuItem value={Category.DOING}>{Category.DOING}</MenuItem>
        <MenuItem value={Category.DONE}>{Category.DONE}</MenuItem> */}
      </Select>
    </FormControl>
  );
}

export default CategorySelect;
