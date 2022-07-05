import React from "react";
import search from "./search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className={search.mainContainer}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <div className={search.searchC}>
        <input placeholder="Search..." />
      </div>
    </div>
  );
};

export default Search;
