import { api_key } from "./key";

const api_url = `https://pixabay.com/api/?key=${api_key}`;

const formatUrl = (params: any) => {
  let url = api_url + "&per_page=25&safesearch=true&editors_choice=true";

  if (!params) {
    return url;
  }

  let paramKeys = Object.keys(params);

  paramKeys.map((key) => {
    let value = key == "q" ? encodeURIComponent(params[key]) : params[key];
    url += `&${key}=${value}`;
  });

  console.log(" final uri: ", url);
  return url;
};

export const apiCall = async (params: any) => {
  try {
    const data = await fetch(formatUrl(params));
    const response: ApiResponse = await data.json();
    return { success: true, data: response };
  } catch (err: any) {
    console.log("error:", err.message);
    return { success: false, data: err.message };
  }
};
