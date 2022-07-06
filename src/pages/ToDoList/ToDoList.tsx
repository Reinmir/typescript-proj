import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import Header from 'components/Header/Header'
import styles from "./style.module.scss"
import { useSelector, useDispatch } from 'react-redux' 
import { setTodos} from 'redux/sliceToDo'
import { PlaceHolderApi } from 'Api/placeHolderApi/placeHolderApi'
import { RootState } from 'redux/store'
import { useAppDispatch, useAppSelector } from 'redux/hooks/hook'
import { ToDoValue } from 'Api/placeHolderApi/model'

function ToDoList (){
    const {todosvalue} = useAppSelector((state: RootState)=> state.toDo)
    const dispatch = useAppDispatch()

    const getListToDos = async () =>{
        const todosFromApi = await PlaceHolderApi.getToDos();
        dispatch(setTodos(todosFromApi))
    } 

    

    useEffect(() => {
        getListToDos()
      }, [])

    return (
        <> 
        <div className={styles.ToDoList}>{
            todosvalue.map((item: ToDoValue ) => {
                return (
                    <>
                    <div className={styles.blockUser}>
                    <div>UserID: {item.userId}</div>
                    <div>ID: {item.id}</div>
                    <div>Title: {item.title}</div>
                    <input type="checkbox" checked={item.completed}/>
                    <Link to={`/todos/${item.id}`} className={styles.person}>Open more...</Link>
                    </div>
                    </>
                   
                )
            })
        }</div>
        </>
    )
}

export default ToDoList