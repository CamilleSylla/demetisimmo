import style from "./search.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { renderCollection } from "../../helper/helper";

export default function Search({ button, searchSelect }) {
  const [search, setSearch] = useState({});
  const testSearchObject = {
    ville: "Le Mans",
    piece: 2,
    type: "Maison",
  };

  const onSelect = (key, value) => {
    setSearch({ ...search, [key]: value });
    console.log(key, value, search);
  };

  return (
    <div className={style.wrapper}>
      <div>
        <p>Nombre de pièces</p>
        <select onChange={(e) => onSelect("piece", e.target.value)}>
          <option></option>
          {renderCollection(searchSelect, "piece")
            .sort(function (a, b) {
              return a - b;
            })
            .map((el, i) => {
              return <option key={i}> {el} </option>;
            })}
        </select>
      </div>
      <div>
        <div className={style.border} />
        <p>Type de bien</p>
        <select onChange={(e) => onSelect("type", e.target.value)}>
          <option></option>
          {renderCollection(searchSelect, "type")
            .sort(function (a, b) {
              if (a < b) {
                return -1;
              }
              if (a > b) {
                return 1;
              }
              return 0;
            })
            .map((el, i) => {
              return <option key={i}> {el} </option>;
            })}
        </select>
      </div>
      <div>
        <div className={style.border} />
        <p>Ville</p>
        <select onChange={(e) => onSelect("ville", e.target.value)}>
          <option></option>
          {renderCollection(searchSelect, "ville")
            .sort(function (a, b) {
              if (a < b) {
                return -1;
              }
              if (a > b) {
                return 1;
              }
              return 0;
            })
            .map((el, i) => {
              return <option key={i}>{el}</option>;
            })}
        </select>
      </div>
      <div>
        <div className={style.border} />
        <Link
          href={{
            pathname: "/proprietes/",
            query: { filter: JSON.stringify(search) },
          }}
        >
          <button>{button}</button>
        </Link>
      </div>
    </div>
  );
}
