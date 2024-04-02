const makeHttpRequest = async ({
  url = "http://localhost:8080/o/c/persons",
  method,
  body = null,
}) => {
  const headers = {
    "Content-Type": "application/json; charset=utf8",
    "Access-Control-Allow-Origin": "*",
    Authorization: "Basic " + btoa("test@liferay.com:learn"),
  };
  return await fetch(url, { headers, method, body });
};

const post = async (postData) => {
  return await makeHttpRequest({
    method: "POST",
    body: JSON.stringify(postData),
  });
};

const get = async () => {
  const data = await makeHttpRequest({
    method: "GET",
  });

  return await data.json();
};

export { post, get };
