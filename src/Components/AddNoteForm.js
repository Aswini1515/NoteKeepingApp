/* eslint-disable */
import React, { useState } from 'react'
//import { db } from '../../utils/firebase'


// using react hooks here
export default function AddNoteForm({ /* addNote */ }) {


    const [titleFieldVisible, setTitleFieldVisible] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')


    const showTitleField = () => {
        setTitleFieldVisible(true)
    }


    const hideTitleField = ()  => {
        setTitleFieldVisible(false)
      }

    const handleSubmit = e => {

        e.preventDefault()



        }


    return (

          <div className="create-form">

			{titleFieldVisible && (
              <div className="backdrop" onClick={hideTitleField} />
            )}

			<form  className="create-note">
              {titleFieldVisible && (
                <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                onFocus={showTitleField}
                name="title"
                placeholder="Title"
                />
              )}

              <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              onFocus={showTitleField}
              name="content"
              placeholder="Take a note..."
              />
              <button type="Submit">
                <span>&#43;</span>
              </button>
            </form>
          </div>

    )
}
