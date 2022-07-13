import { Person } from "Api/swapi-api/models";
import { Button } from "components/Button/Button";
import { PageRoutes } from "constants/routeNames";
import { BillyImg } from "pages/People-Page/imgLink";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

interface ListProp {
  handleOnCart: (person: Person) => void;
  item: Person;
}

export const List: React.FC<ListProp> = ({ handleOnCart, item }) => {
  return (
    <div>
      <ul className={styles.ul1}>
        <img className={styles.img} src={BillyImg} alt="" />
        <div className={styles.jopa}>
          <li className={styles.name}>Name:{item.name}</li>
          <li className={styles.height}>Height:{item.height}</li>
          <li className={styles.mass}>Mass:{item.mass}</li>
          <li className={styles.films}>Films:{item.films}</li>
          <Link to={PageRoutes.Person} className={styles.person}>
            Open more...
          </Link>
          <Button
            className={styles.add_cart}
            onClick={() => handleOnCart(item)}
          >
            Add to cart
          </Button>
        </div>
      </ul>
    </div>
  );
};
