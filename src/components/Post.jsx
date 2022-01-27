// import {useParams} from 'react-router-dom'
import {Navigate, useNavigate, Routes, Route} from 'react-router-dom'

function Post() {
    // const params = useParams()
    const status = 200
    const navigate = useNavigate()
    const onClick = () => {
        console.log('hello');
        navigate('/about')
    }
    if(status===404){
       return <Navigate to='notFound'/>
    }
  return <div>
      Post
     {/* <h1>Post: {params.id}</h1>
     <p>Name: {params.name}</p> */}
     <button onClick={onClick}>Click</button>
     <Routes>
         <Route path='/show' element={<h1>Hello World</h1>}/>
     </Routes>
  </div>;
}

export default Post;
