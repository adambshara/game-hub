import React from "react";
import useGneres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGneres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
