import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APICLIENT from "../services/api-client";
import ms from "ms";
import Platform from "../entities/Platform";

const apiClient = new APICLIENT<Platform>("/platforms/lists/parents");
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
