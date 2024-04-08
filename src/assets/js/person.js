import { post } from "./httpRequests";

function person(firstname, lastname) {
  const data = {
    firstname: firstname,
    lastname: lastname,
  };
  post(data);
}

export default person;
