import { useEffect, useState } from 'react';

import './App.css'

import { PostAnswer } from './components/PostItem';
import PostForm from './components/PostReq/PostForm';

import { Posts } from './types/posts'
import { API } from './api';

const App = () => {
    const [posts, setPosts] = useState<Posts[]>([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
       loadPosts()

    }, [])

    // Requisição get
    
    const loadPosts = async () => {
        try {
            setLoading(true)
            let json = await API.GetAllPosts()
            setLoading(false)
            setPosts(json)

        } catch(err) {
            setLoading(false)
            setPosts([])
            console.log(err)
        }
    }

    /*Requisição Método Post*/

    const HandleAddPost = async (title: string, body: string) => {
        const boxinput = document.querySelector('.box');
        let json = await API.AddNewPost(title, body, 1)

        if(json.id) {
            boxinput?.before('POST ADICIONADO COM SUCESSO 🥑🎇🎉');
        } else {
            boxinput?.before('OCORREU UM ERRO 😕😕')
        }        
    }

    return (
        <div className="app">
            {loading &&
                <div className='loader'></div>
            }

            <PostForm onAdd={HandleAddPost} />

            {!loading && posts.length > 0 &&
                <>
                <div>Posts total: {posts.length}</div>
                <div className="postArea">
                    {posts.map((item,index)=>(<PostAnswer data={item}/>))}
                </div>
                </>
            }

            {!loading && posts.length === 0 && 
                <div>Tente novamente em algun minutos, ou verifique a URL </div>
            }

        </div>
    )
}

export default App;