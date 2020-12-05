import React, { useState, useContext, useEffect } from "react";

const url = "https://rickandmortyapi.com/api/";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState([]);

  const fetchData = async () => {
    try {
      const characters = await fetch(`${url}character?page=${page}`);
      const profiles = await characters.json();
      const { results, info } = profiles;
      setInfo(info);
      if (results) {
        setProfiles(results);
      } else {
        setProfiles([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const prev = () => {
    if (info.prev !== null) {
      setPage(page - 1);
    }
  };

  const next = () => {
    if (info.next !== null) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <AppContext.Provider
      value={{
        loading,
        profiles,
        page,
        prev,
        next,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
