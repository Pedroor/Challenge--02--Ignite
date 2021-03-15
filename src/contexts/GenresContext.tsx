import { createContext, useState, ReactNode } from "react";

interface GenreProvider {
  children: ReactNode;
}

interface GenreContextData {
  selectedGenreId: number;
  updateGenreId: (id: number) => void;
}

export const GenreContext = createContext({} as GenreContextData);

export function GenresProvider({ children }: GenreProvider) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function updateGenreId(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <GenreContext.Provider
      value={{
        updateGenreId,
        selectedGenreId,
      }}
    >
      {children}
    </GenreContext.Provider>
  );
}
