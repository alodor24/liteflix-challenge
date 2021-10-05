import { useState, useEffect } from 'react'
import Image from 'next/image'

const MyMovies = () => {

    const [dataLocalStorage, setDataLocalStorage] = useState([])
    const [showData, setShowData] = useState(false)

    useEffect(() => {
        
        if (localStorage.getItem('dataMovie') !== null) {

            const getData = localStorage.getItem('dataMovie')
            let dataMovieLocalStorage = JSON.parse(getData)
            
            setDataLocalStorage(dataMovieLocalStorage)
            setShowData(true)
            console.log(dataLocalStorage)
        }
    }, [showData])

    const dataDone = () => {
        if (showData) {
            return (
                <>
                    {/*
                    <Image 
                    className="film-image"
                    src={ imageLocalstorage }
                    alt=""
                    layout='fill'/> */}
                    <p>Aquí estoy</p>
                </>
            )
        }
    }

    return (
        <>
            <h3 style={{ color: 'red', }}>Mis Películas</h3>

            <div>
                { dataDone() }
            </div>
        </>
    )
}

export default MyMovies