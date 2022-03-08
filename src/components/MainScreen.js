import { useRef } from "react"
import MovieList from "./MovieList"
import trailer from "../assets/trailer.mp4"


import "./MainScreen.css"

const MainScreen = () => {
    const ref = useRef(null)

    const onClick = () => ref.current.muted = !ref.current.muted

    return (<div className="main-screen">
        <video autoPlay muted ref={ref} onClick={onClick} loop>
            <source  src={trailer} type="video/mp4" />
        </video>
        <div className="preview-info" onClick={onClick}>
            <h2>Jurassic Park</h2>
            <p>El multimillonario John Hammond hace realidad su sueño de clonar dinosaurios y crear con ellos un parque temático en una isla. Antes de abrir el parque, Hammond invita a una pareja de científicos y a un matemático para que comprueben la viabilidad del proyecto.</p>
        </div>
        <MovieList />
    </div>)
}

export default MainScreen