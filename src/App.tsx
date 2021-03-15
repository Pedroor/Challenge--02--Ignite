import { Main } from "./components/Main";

import "./styles/global.scss";

import { GenresProvider } from "../src/contexts/GenresContext";

export function App() {
  return (
    <GenresProvider>
      <Main />
    </GenresProvider>
  );
}
