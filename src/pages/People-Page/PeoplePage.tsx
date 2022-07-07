import React, { useEffect, useState } from 'react'
import styles from './style.module.scss'

import { Link } from 'react-router-dom'

import { SwapiApi } from 'Api/swapi-api/swapi-api'
import { Person } from 'Api/swapi-api/models'

import { BillyImg } from './imgLink'

import { useAppDispatch, useAppSelector } from 'redux/hooks/hook'
import { RootState } from 'redux/store'
import { addPersonToCart } from 'redux/cartSlice'

import { Button } from 'components/Button/Button'

import { PageRoutes } from 'constants/routeNames'


function PeoplePage() {
  const dispatch = useAppDispatch()
  const {itemsInCart} = useAppSelector((state: RootState) => state.cart)

  const handleOnCart = (person: Person) =>{
    dispatch(addPersonToCart(person))
  }
  
  const [appState, setAppState] = useState<Person[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const getPeople = async () => {
    setIsLoading(true)
    const data = await SwapiApi.getPeople()
    setIsLoading(false)
    setAppState(data.results)
  }

  useEffect(() => {
    getPeople()
  }, [])

  useEffect(() => {
    console.log(itemsInCart.length)
  }, [itemsInCart])

  if (isLoading) {
    return <h1 className={styles.loading}>Loading...</h1>
  }

  return (
    <div className={styles.container}>
      {appState.map((item) => {
        return (
          <ul className={styles.ul1}>
            <img
              className={styles.img}
              src={BillyImg}
              alt=""
            />
            <div className={styles.jopa}>
              <li className={styles.name}>Name:{item.name}</li>
              <li className={styles.height}>Height:{item.height}</li>
              <li className={styles.mass}>Mass:{item.mass}</li>
              <li className={styles.films}>Films:{item.films}</li>
              <Link to={PageRoutes.Person} className={styles.person}>Open more...</Link>
              <Button className={styles.add_cart} onClick={() => handleOnCart(item)}>Add to cart</Button>
            </div>
          </ul>
        )
      })}
    </div>
  )
}

export default PeoplePage
