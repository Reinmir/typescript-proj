import { Person } from 'Api/swapi-api/models'
import { BillyImg } from 'pages/People-Page/imgLink'
import React, { useEffect, useState } from 'react'
import { addPersonToCart, removeAllFromCart, removeCurPersFromCart, removePersonFromCart } from 'redux/cartSlice'
import { useAppDispatch, useAppSelector } from 'redux/hooks/hook'
import { RootState } from 'redux/store'
import styles from './style.module.scss'


function ShoppingCart() {
  const {itemsInCart} = useAppSelector((state: RootState) => state.cart)
  const dispatch = useAppDispatch();
  const [mouseEnter, SetMouseEnter] = useState(false);

  const[value, setValue] = useState('');

  const filteredPeople = itemsInCart.filter(people => {
    return people.person.name.toLowerCase().includes(value.toLowerCase());
  })


  const handleMouseEnter = () =>{
      SetMouseEnter(true);
  }
  const handleMouseLeave = () =>{
      SetMouseEnter(false);
  }

  const removeAll = () =>{
    dispatch(removeAllFromCart())
  }
  
  const addToCart = (person: Person) =>{
      dispatch(addPersonToCart(person))
  }
  const removeFromCart = (person: Person) =>{
    dispatch(removePersonFromCart(person))
  }

  const removeCurPersonFromCart = (person: Person) =>{
    dispatch(removeCurPersFromCart(person));
  }
  // mouseenter === true ? 'visible' : 'hidden'
  return (
    <>
    <form className={styles.search_form} action="">
      <input placeholder='Search here...' type="text" onChange={(e) =>setValue(e.target.value)}/>
    </form>
    <button onClick={removeAll} className={styles.removeAll}>x</button>
    {filteredPeople.map((item) =>{
      return(
        <div className={styles.person_wrapper}>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.wrapper_cart}>
          <p className={styles.imgPers}>
            <img className={styles.imgBilly} src={BillyImg} alt="" />
          </p>
          <div className={styles.count_wrapper}>
            <button className={`${styles.remove} ${mouseEnter === true ? styles.visible : styles.hidden}`} onClick={()=> removeFromCart(item.person)}>-</button>
            <div className={styles.count}>x{item.count}</div>
            <button  className={`${styles.add} ${mouseEnter === true ? styles.visible : styles.hidden}`} onClick={()=> addToCart(item.person)}>+</button>
            <button className={`${styles.remove_x} ${mouseEnter === true ? styles.visible : styles.hidden}`} onClick={()=> removeCurPersonFromCart(item.person)}>x</button>
          </div>
        </div>
        <div className={styles.personCart}>Name:{item.person.name} Height:{item.person.height}</div>
      </div>
        )
      })    
    }
    </>
  )
}

export default ShoppingCart