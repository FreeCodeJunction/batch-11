import axios from "axios";

export default function globalFetchFn(url, config = {}, delay = 500) {
  return new Promise((res) => setTimeout(res, delay))
    .then((_) => {
      return axios.get(url, config);
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (err.response) {
        throw new Response(null, {
          status: err.response.status,
          statusText: err.response.statusText || "Server Error",
        });
      } else if (err.request) {
        throw new Response(null, {
          status: 503,
          statusText: "No response from server",
        });
      } else {
        throw new Response(null, {
          status: 500,
          statusText: "Internal server error",
        });
      }
    });
}
