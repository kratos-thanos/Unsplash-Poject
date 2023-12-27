import React from "react";
import { useGlobalContext } from "./context";

const SeachForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handelSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handelSubmit}>
        <input
          type="text"
          className="fom-input search-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SeachForm;
