import { useInfiniteQuery } from "@tanstack/react-query";

import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

// export interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

const apiClient = new APIClient<Game>("/games");

// interface FetchFmaeResponse {
//   count: number;
//   results: Game[];
// }

const useGames = () =>
  // selectedGenre: Genre | null,
  // selectedPlatform: Platform | null
  // gameQuery: GameQuery
  {
    const gameQuery = useGameQueryStore((s) => s.gameQuery);
    return useInfiniteQuery<FetchResponse<Game>, Error>({
      queryKey: ["games", gameQuery],
      queryFn: ({ pageParam = 1 }) =>
        apiClient.getAll({
          params: {
            // genres: selectedGenre?.id,
            genres: gameQuery.genreId,
            // platforms: selectedPlatform?.id,
            parent_platforms: gameQuery.platformId,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam,
          },
        }),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
      },
      staleTime: ms("24h"), // 24hrs
    });
  };

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
