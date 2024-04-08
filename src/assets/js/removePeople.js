import { get } from "./httpRequests";
import { remove } from "./httpRequests";

export const removePeople = () => {
  let data = get();
  let id;

  for (let i = 0; i < data.length; i++) {
    id = item[i].id;
    console.log("for loop entered");
    remove(id);
  }
};
