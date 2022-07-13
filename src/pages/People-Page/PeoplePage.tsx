import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";


import { SwapiApi } from "Api/swapi-api/swapi-api";
import { Person } from "Api/swapi-api/models";

import { useAppDispatch, useAppSelector } from "redux/hooks/hook";
import { RootState } from "redux/store";
import { addPersonToCart } from "redux/cartSlice";

import { List } from "./components/List/List";
import { Tile } from "./components/Tile/Tile";
import { Button } from "components/Button/Button";
import { ListType } from "./enums";

function PeoplePage() {
  const dispatch = useAppDispatch();
  const { itemsInCart } = useAppSelector((state: RootState) => state.cart);
  const [listType, setListType] = useState(ListType.List);

  const handleOnCart = (person: Person) => {
    dispatch(addPersonToCart(person));
  };

  const changeTypeList = (list: ListType) => {
    setListType(list);
  };

  const [appState, setAppState] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPeople = async () => {
    setIsLoading(true);
    const data = await SwapiApi.getPeople();
    setIsLoading(false);
    setAppState(data.results);
  };

  useEffect(() => {
    getPeople();
  }, []);

  if (isLoading) {
    return <h1 className={styles.loading}>Loading...</h1>;
  }

  return (
    <div className={styles.container}>
      <Button onClick={() => changeTypeList(ListType.List)}>List</Button>
      <Button onClick={() => changeTypeList(ListType.Tile)}>Tile</Button>

      {appState.map((item) => {
        return (
          <>
            {listType === ListType.List ? (
              <List
                handleOnCart={handleOnCart}
                item={item}
                key={item.url}
              ></List>
            ) : (
              <Tile
                handleOnCart={handleOnCart}
                item={item}
                key={item.url}
              ></Tile>
            )}
          </>
        );
      })}
    </div>
  );
}

export default PeoplePage;
