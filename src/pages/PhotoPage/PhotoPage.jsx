import React, { useEffect, useState } from 'react'
import './PhotoPage.scss'

const PhotoPage = () => {

    const [newComment, setNewComment] = useState('')
    const [textValue, setTextValue] = useState('')

    function addComment(text) {
        setNewComment(text)
    }

    return <div className="PhotoPage">
        <h1>Photos</h1>
        <form>
            <input
                type={'text'}
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
            />
        </form>
        <div
            onClick={() => addComment(textValue)}
        >
            Submit
        </div>
        {newComment}
    </div>
}

export default PhotoPage