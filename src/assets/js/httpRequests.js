const defaultURL = `/o/c/feedbackses/`;
// const baseURL = `http://localhost:8080`;

const makeHttpRequest = async ({ url = defaultURL, method, body = null }) => {
  // const setUrl = baseURL + url;
  const headers = {
    "Content-Type": "application/json; charset=utf8",
    "Access-Control-Allow-Origin": "*",
    "x-csrf-token": Liferay.authToken,
  };
  return await fetch(url, { headers, method, body });
};

const post = async (postData) => {
  return await makeHttpRequest({
    method: "POST",
    body: JSON.stringify(postData),
  });
};

const get = async (url) => {
  let data = await makeHttpRequest({
    url: url,
    method: "GET",
  });
  data = await data.json();
  return data.items;
};

const remove = async (id) => {
  return await makeHttpRequest({
    method: "DELETE",
    url: `/o/c/persons/${id}`,
  });
};
export { get, post, remove };
