import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

// export interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

// interface FetchFmaeResponse {
//   count: number;
//   results: Game[];
// }

const useGames = (
  // selectedGenre: Genre | null,
  // selectedPlatform: Platform | null
  gameQuery: GameQuery
) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            // genres: selectedGenre?.id,
            genres: gameQuery.genre?.id,
            // platforms: selectedPlatform?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });
// useData<Game>(
//   "/games",
//   {},
//   // [selectedGenre?.id, selectedPlatform?.id] // only re-fetch when genre or platform changes
//   [gameQuery]
// );
// const [games, setGames] = useState<Game[]>([]);
// const [error, setError] = useState("");
// const [isLoading, setLoading] = useState(false);

// useEffect(() => {
//   const controller = new AbortController();
//   setLoading(true);
//   apiClient
//     .get<FetchFmaeResponse>("/games", { signal: controller.signal })
//     .then((res) => {
//       setGames(res.data.results);
//       setLoading(false);
//     })
//     .catch((err) => {
//       if (err instanceof CanceledError) return;
//       setError(err.message);
//       setLoading(false);
//     });

//   return () => controller.abort(); //clean up
// }, []);

// return { games, error, isLoading };

export default useGames;
