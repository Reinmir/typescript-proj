import React,{ useEffect, useState } from 'react'
import { SwapiApi } from 'Api/swapi-api/swapi-api';
import styles from './style.module.scss'
import { Person } from 'Api/swapi-api/models';




function PeopleInfo(){
    const [userId,setUserId]=useState(Math.floor(Math.random() * (82 - 1) + 1));
    const [isLoading, setIsLoading] = useState(false)
    const [personInfo, setPersonInfo] = useState<Person>({} as Person)
    const getPerson = async () =>{
        setIsLoading(true);
        const data = await SwapiApi.getPerson(userId);
        setIsLoading(false);
        setPersonInfo(data);
    }

    useEffect(() =>{
        getPerson()
    }, [])

    console.log(userId);
    return (
        <>
        <img className={styles.personimg} src="https://www.pngall.com/wp-content/uploads/2016/03/Star-Wars-Logo-PNG.png" alt="" />
        <div className={styles.personinfo}>Name: {personInfo.name} Height: {personInfo.height} Gender: {personInfo.gender}</div>
        <div className={styles.otherinfo}>Eye Color: {personInfo.eye_color} Birth Year: {personInfo.birth_year} </div>

        </>
    )
}

export default React.memo(PeopleInfo) 
