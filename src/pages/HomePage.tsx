import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: `1fr`,
        lg: "200px 1fr",
      }}
    >
      {/* <GridItem area="nav">
    <NavBar />
  </GridItem> */}
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
};

export default HomePage;
