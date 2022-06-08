import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleCharacter } from './singleCharacterSlice'
import { getQuotes } from '../quotes/quotesSlice'
import { useParams } from 'react-router-dom'
import './singleCharacter.css'



const SingleCharacter = () => {
    const dispatch = useDispatch()
    const singleCharacter = useSelector(state => state.singleCharacter.singleCharacter)
    const loadingCharacter = useSelector(state => state.singleCharacter.loading)

    const quotes = useSelector(state => state.quotes.quotes)
    const loadingQuotes = useSelector(state => state.quotes.loading)
    const { id } = useParams()

    useEffect(() => {
        if (!loadingCharacter) {
            dispatch(getSingleCharacter(id))
        }
    }, [])

    useEffect(() => {
        if (!loadingQuotes) {
            dispatch(getQuotes())
        }
    }, [])

    const characterQuotes = quotes.filter(quote => quote.author === singleCharacter[0].name)

    return (
        <div className='single-character'>
            <img
                src={singleCharacter[0].img}
                alt={singleCharacter[0].name}
                width="200"
                className='single-character-img'
            />
            <div>
                <h1><span>Full Name:</span> {singleCharacter[0].name}</h1>
                <p><span>Nickname:</span> {singleCharacter[0].nickname} </p>
                <p><span>Status:</span> {singleCharacter[0].status}</p>
                <p><span>Appearance:</span> {singleCharacter[0].appearance}</p>
                <p><span>occupation:</span> {singleCharacter[0].occupation} </p>
                <p><span>Portrayed By:</span> {singleCharacter[0].portrayed}</p>

                <h1>Quotes</h1>
                {loadingQuotes && <div>Loading...</div>}
                {characterQuotes.map(quote => (
                    <div key={quote.quote_id}>
                        <p>{quote.quote}</p>
                    </div>
                ))}
                {characterQuotes.length === 0 && <div>No quotes found</div>}
            </div>
        </div>
    )
}

export default SingleCharacter