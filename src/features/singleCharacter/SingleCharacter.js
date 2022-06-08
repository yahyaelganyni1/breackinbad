import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleCharacter } from './singleCharacterSlice'
import { useParams } from 'react-router-dom'


const SingleCharacter = () => {
    const dispatch = useDispatch()
    const singleCharacter = useSelector(state => state.singleCharacter.singleCharacter)
    const loadingCharacter = useSelector(state => state.singleCharacter.loading)
    const { id } = useParams()

    useEffect(() => {
        if (!loadingCharacter) {
            dispatch(getSingleCharacter(id))
        }
    }, [])



    return (
        <div>
            {singleCharacter[0] && (
                <div>
                    <img src={singleCharacter[0].img} alt={singleCharacter[0].name} width="200" />
                    <h1><span>Full Name:</span> {singleCharacter[0].name}</h1>
                    <p><span>Nickname:</span> {singleCharacter[0].nickname} </p>
                    <p><span>Status:</span> {singleCharacter[0].status}</p>
                    <p><span>Appearance:</span> {singleCharacter[0].appearance}</p>
                    <p><span>occupation:</span> {singleCharacter[0].occupation} </p>
                    <p><span>Portrayed By:</span> {singleCharacter[0].portrayed}</p>

                </div>
            )}
        </div>
    )
}

export default SingleCharacter