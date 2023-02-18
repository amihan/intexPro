import React, { useEffect, useRef, useState } from 'react'
import './ReferenceItem.scss'

const ReferenceItem = ({ title, text }) => {
    const [toggle, setToggle] = useState(false)

    const toggleState = () => {
        setToggle(!toggle)
    }

    return (
        <div className='referenceItem'>
            <p className={toggle ? 'referenceItem__title active' : 'referenceItem__title'} onClick={toggleState}>
                {title}
            </p>
            <p className={toggle ? 'referenceItem__text active' : 'referenceItem__text'}>
                {text}
            </p>
        </div>
    )
}

export default ReferenceItem
