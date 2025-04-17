import axios from "axios";

export default function globalFetchFn(url, config = {}) {
  return new Promise((res) => setTimeout(res, 2000))
    .then((_) => axios.get(url, config))
    .then((res) => {
      console.log(res.data);
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
