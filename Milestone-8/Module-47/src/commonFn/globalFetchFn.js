import axios from "axios";

export default function globalFetchFn(url, config = {}, delay = 500) {
  return new Promise((res) => setTimeout(res, delay))
    .then((_) => {
      console.log("request processing");

      return axios.get(url, config);
    })
    .then((res) => {
      console.log("request processed ");
      return res.data;
    })
    .catch((err) => {
      console.log("getting error");

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
