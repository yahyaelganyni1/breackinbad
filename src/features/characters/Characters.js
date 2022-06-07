import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from './charactersSlice'
import {
    Link
} from "react-router-dom";

const Characters = () => {
    const dispatch = useDispatch()
    const characters = useSelector(state => state.characters.characters)
    const loading = useSelector(state => state.characters.loading)
    const error = useSelector(state => state.characters.error)

    useEffect(() => {
        dispatch(getCharacters())
    }, [])

    return (
        <div>
            <h1>Breaking Bad Characters</h1>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <ul>
                {characters.map(character => (
                    <li key={character.char_id}>
                        <Link to={`/${character.char_id}`}>
                            <h2>{character.name}</h2>
                        </Link>
                        <img src={character.img} alt={character.name} width="200" />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Characters