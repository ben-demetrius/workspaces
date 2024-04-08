import { post } from "./httpRequests";

function person(firstname, lastname) {
  const data = {
    firstname: firstname,
    lastname: lastname,
  };
  //return data;
  post(data);
}

export default person;
