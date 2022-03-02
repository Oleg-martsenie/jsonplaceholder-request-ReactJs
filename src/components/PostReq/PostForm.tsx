import React, {useEffect, useState} from 'react'
import '../../App.css'

interface Props {
    onAdd: (title: string, body: string) => void
}

export const PostForm = ({onAdd}: Props) => {
    const [addTitle, setAddTitle] = useState('')
    const [addBodyText, setAddBodyText] = useState('')

    const handleAddTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
        setAddTitle(e.target.value)
    }
    const handleAddBodyText = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setAddBodyText(e.target.value)
    }

    const handleSubmitPost = () => {
        if(addTitle && addBodyText !== '') {
            onAdd(addTitle, addBodyText)
            setAddTitle('')
            setAddBodyText('')
        } else {
            alert('Preencha os campos')
        }
    }

  return (
    <header>
        <div className="addPost">
        <h2>Add a new post here</h2>
        </div>
        <div className="set-postArea">
            <input 
            type="text" 
            className='box title' 
            placeholder='Title'
            value={addTitle}
            onChange={handleAddTitle}
            />

            <textarea 
            className='box body' 
            placeholder='post body' 
            value={addBodyText}
            onChange={handleAddBodyText}
            ></textarea>
            <input type="submit" 
            value="send post" 
            className='btn' 
            onClick={handleSubmitPost}
            />
        </div>
    </header>

    )
}

export default PostForm