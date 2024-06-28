import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APICLIENT from "../services/api-client";

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
    staleTime: 24 * 60 * 60 * 1000, //24 hrs
    initialData: { count: platforms.length, results: platforms, next: null },
  });

// useData<Platform>("platforms/lists/parents");

export default usePlatforms;
