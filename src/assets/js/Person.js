import { post } from "./httpRequests";

function Person(firstname, lastname, age) {
  const data = {
    firstname: firstname,
    lastname: lastname,
    age: age,
    get yearsLeft() {
      return 50 - age;
    },
  };

  post(data);
}

export default Person;
