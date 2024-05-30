import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
// interface FetchGenresResponse {
//   count: number;
//   results: Genre[];
// }

const useGenres = () => useData<Genre>("/genres");
// when you get it from the server.

// const useGenres = () => ({ data: genres, isLoading: false, error: null });
//if you wanted it without calling the server.
// const [genres, setGenres] = useState<Genre[]>([]);
// const [error, setError] = useState("");
// const [isLoading, setLoading] = useState(false);

// useEffect(() => {
//   const controller = new AbortController();
//   setLoading(true);
//   apiClient
//     .get<FetchGenresResponse>("/genres", { signal: controller.signal })
//     .then((res) => {
//       setGenres(res.data.results);
//       setLoading(false);
//     })
//     .catch((err) => {
//       if (err instanceof CanceledError) return;
//       setError(err.message);
//       setLoading(false);
//     });

//   return () => controller.abort(); //clean up
// }, []);

// return { genres, error, isLoading };

export default useGenres;
