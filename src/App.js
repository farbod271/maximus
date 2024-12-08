import React from 'react'
import './styles.css'
import Nav from './Nav'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home'
import Filter from './Filter'
import Blog from './Blog'
import PostDetail from './PostDetail'


function App() {

  const blogPosts = [
    {
        title: 'Can coffee make you a better developer?',
        content: '# Hi, *Pluto*!',
        tags: ['coffee', 'developer'],
        id: 1,
        date: '2021-10-12'
    },
    {
        title: 'are you on the right track?',
        content: 'lorem blah blah',
        tags: ['destiny', 'life'],
        id: 2,
        date: '2023-6-12'
    },
    {
        title: 'How to make a blog',
        content: 'lorem blah blah',
        tags: ['blog', 'web'],
        id: 3,
        date: '2023-6-12'
    },
    {
        title: 'How to make a blog',
        content: 'lorem blah blah',
        tags: ['blog', 'web'],
        id: 4,
        date: '2023-6-12'
    }

]





  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Nav/>}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Filter/>}/>
          <Route path="/posts" element={<Blog blogPosts={blogPosts}/>}/>
          <Route path="/posts/:id" element={<PostDetail blogPosts={blogPosts} />} />
        </Route>
      </Routes>
    </Router>
    </>
    
  )


}

export default App