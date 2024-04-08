import person from "./person";

export const addPeople = async () => {
  let n = 100;
  for (let i = 0; i < n; i++) {
    console.log("Loop Entered" + i);
    const firstName = "Ben" + i;
    const lastName = "Demetrius";
    new person(firstName, lastName);
  }
};
