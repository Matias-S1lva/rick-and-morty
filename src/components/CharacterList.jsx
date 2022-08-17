import React, { useState, useEffect } from "react";
import Character from "./Character";

function NavPage({ page, setPage }) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      {page == 1 ? (
        <button className="btn btn-primary btn-sm">...</button>
      ) : (
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setPage(page - 1)}
        >
          {" "}
          Page {page-1}
        </button>
      )}
      <p>Page: {page}</p>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => setPage(page + 1)}
      >
        {" "}
        Page {page + 1}
      </button>
    </header>
  );
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setloading(false);
      setCharacters(data.results);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container ">
      <NavPage page={page} setPage={setPage}></NavPage>

      {loading ? (
        <h1>loading</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={page} setPage={setPage}></NavPage>
    </div>
  );
}

export default CharacterList;
