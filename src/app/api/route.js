export async function getPostApi() {
  const API_URL = "https://jsonplaceholder.typicode.com/posts/";
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
}
