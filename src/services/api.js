// export const api = {
//   base: "http://localhost:5000/api",

//   async get(url) {
//     const res = await fetch(this.base + url, {
//       headers: { 
//         Authorization: `Bearer ${localStorage.getItem("token")}`
//       },
//     });
//     return res.json();
//   },

//   async post(url, body) {
//     const res = await fetch(this.base + url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//       body: JSON.stringify(body),
//     });
//     return res.json();
//   },

//   async put(url, body) {
//     const res = await fetch(this.base + url, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//       body: JSON.stringify(body),
//     });
//     return res.json();
//   },

//   async del(url) {
//     const res = await fetch(this.base + url, {
//       method: "DELETE",
//       headers: { 
//         Authorization: `Bearer ${localStorage.getItem("token")}` 
//       },
//     });
//     return res.json();
//   }
// };


export const api = {
  get: async (url) => (await fetch("http://localhost:5000/api" + url)).json(),
  post: async (url, data) =>
    (await fetch("http://localhost:5000/api" + url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })).json()
};
