import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");
// interface FetchGenresResponse {
//   count: number;
//   results: Genre[];
// }

// const useGenres = () => useData<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    // staleTime: 24 * 60 * 60 * 1000, //24 hrs
    staleTime: ms("24h"),
    initialData: genres,
    // initialData: { count: genres.length, results: genres, next: null },
  });
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
