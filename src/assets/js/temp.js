const makeHttpRequest = async ({
  url = "/localhost:8080/o/c/persons",
  method,
  body,
}) => {
  const headers = {
    "Content-Type": "application/json; charset=utf8",
    "Access-Control-Allow-Origin": "*",
    Authorization: "Basic " + btoa("test@liferay.com:learn"),
  };
  return await fetch(url, { headers, method, body });
};

export const post = async (postData) => {
  return await makeHttpRequest({
    method: "POST",
    body: JSON.stringify(postData),
  });
};

// const addApp = async ({ postData }) => {
//   return await makeRequest({
//     method: "POST",
//     resource: `/o/c/myfavoriteappses`,
//     body: JSON.stringify(postData),
//   }).then((response) => response.json());
// };

const post = async (obj) => {
  const data = await fetch("http://localhost:8080/o/c/persons/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf8",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Basic " + btoa("test@liferay.com:learn"),
    },
    body: JSON.stringify(obj),
  });
  return data;
};

export default post;

//   const [text, setText] = useState("");

//   const fetchData = async () => {
//     const data = await get();
//     console.log(data);
//     setText(data.items);
//   };

//   useEffect(() => {
//     console.log("holla Ben");
//     fetchData();
//   }, []);

for (let i = 0; i <= data.items.length; i++) {
  setFirstname(data.items[i].firstname);
  setLastname(data.items[i].lastname);
  setAge(data.items[i].age);
  console.log(i);
  console.log(firstname);
}

// const [firstname, setFirstname] = useState("");
// const [lastname, setLastname] = useState("");
// const [age, setAge] = useState("");
