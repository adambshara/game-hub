import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: `1fr`,
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
          // // selectedGenre={selectedGenre}
          // selectedGenreId={gameQuery.genreId}
          // // onSelectGenre={(genre) => setSelectedGenre(genre)}
          // onSelectGenre={(genre) =>
          //   setGameQuery({ ...gameQuery, genreId: genre.id })
          // }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
              // selectedPlatform={selectedPlatform}
              />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid
        // selectedPlatform={selectedPlatform}
        // selectedPlatform={gameQuery.platform}
        // gameQuery={gameQuery}
        // selectedGenre={selectedGenre}
        // selectedGenre={gameQuery.genre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
