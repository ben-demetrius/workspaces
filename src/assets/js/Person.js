import { post } from "./httpRequests";

function Person(age) {
  const data = {
    age: age,
    get yearsLeft() {
      return 50 - age;
    },
  };

  post(data);
}

export default Person;
