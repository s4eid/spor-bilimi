import React from "react";
import search from "./search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface Props {
  changeBlog: (text: string) => void;
}

const Search = ({ changeBlog }: Props) => {
  return (
    <div className={search.mainContainer}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <div className={search.searchC}>
        <input
          placeholder="Search..."
          onChange={(e) => changeBlog(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
