import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "51639332b5794c188d89f6051880a7f5",
  },
});
