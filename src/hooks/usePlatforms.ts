import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APICLIENT from "../services/api-client";
import ms from "ms";

const apiClient = new APICLIENT<Platform>("/platforms/lists/parents");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
    // initialData: { count: platforms.length, results: platforms, next: null },
  });

// useData<Platform>("platforms/lists/parents");

export default usePlatforms;
