import { post } from "./httpRequests";

function Person(firstname, lastname, age) {
  const remaining = (firstname, age) => {
    //alert(`${firstname} has ${50 - age}years left!`);
    return 50 - age;
  };

  const data = {
    firstname: firstname,
    lastname: lastname,
    age: age,
    yearsLeft: remaining(firstname, age),
  };

  post(data);
  //return data;
}

export default Person;
