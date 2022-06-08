import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from './charactersSlice'
import {
    Link
} from "react-router-dom";
import './character.css'

const Characters = () => {
    const dispatch = useDispatch()
    const characters = useSelector(state => state.characters.characters)
    const loading = useSelector(state => state.characters.loading)
    const error = useSelector(state => state.characters.error)

    useEffect(() => {
        dispatch(getCharacters())
    }, [])

    return (
        <div className='characters' >
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <ul className='characters-grid'>
                {characters.map(character => (
                    <li key={character.char_id} className="character-card">
                        <Link to={`/${character.char_id}`}  >
                            <img src={character.img} alt={character.name} width="200" className='character-img' />
                            <h4 className="character-name"> {character.name}</h4>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Characters