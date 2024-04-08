import { get } from "./httpRequests";
import { remove } from "./httpRequests";

export const removePeople = async () => {
  let data = await get();
  let id;

  for (let i = 0; i < data.length; i++) {
    id = data[i].id;
    remove(id);
  }
};
