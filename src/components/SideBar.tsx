import { useContext, useEffect, useState } from "react";

import { api } from "../services/api";

import { Button } from "./Button";

import { GenreContext } from "../contexts/GenresContext";

import "../styles/sidebar.scss";
import "../styles/global.scss";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export function SideBar() {
  const { updateGenreId, selectedGenreId } = useContext(GenreContext);

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then(response => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    updateGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Mee</p>
      </span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
