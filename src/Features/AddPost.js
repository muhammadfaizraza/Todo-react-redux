import React, { useState } from 'react'
import '../Style/Addpost.css'

import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { postAdded } from './Posts/PostSlice'

export const AddPost = () => {
    const [content, setcontent] = useState()
    const [describe,setdescribe] = useState()
    const dispatch = useDispatch()
    const OncontentChange = e => setcontent(e.target.value)
    const OntitleChange = e => setdescribe(e.target.value)

    const onsubmit = () => {
        console.log(describe, content)
        if (content && describe) {
            dispatch(postAdded({
                id: nanoid(),
                describe,
                content



            }))


        }

    }
    return (
        <form>
            <section>
                <input placeholder='content'
                    name='content'
                    value={content}

                    onChange={OncontentChange}
                />
                <input placeholder='describe'
                    name='describe'
                    value={describe}

                    onChange={OntitleChange}
                />
                <button type='button' onClick={onsubmit}>
                    Submit

                </button>
            </section>
        </form>

    )
}
