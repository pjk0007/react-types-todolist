import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { Categories, categoryState } from "../atoms";

function CategorySelect() {
  const [category, setCategory] = useRecoilState(categoryState);
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
        <MenuItem value={Categories.TO_DO}>{Categories.TO_DO}</MenuItem>
        <MenuItem value={Categories.DOING}>{Categories.DOING}</MenuItem>
        <MenuItem value={Categories.DONE}>{Categories.DONE}</MenuItem>
      </Select>
    </FormControl>
  );
}

export default CategorySelect;
