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
        title: 'what is to come of this blog',
        content: 'i will add a search and tag section for this component. seems pretty straight forward i would say. also the styling dosent atch with the square design of the home page. a bit of polishing here and there is needed. hope the posts of this blog will benifit the dev community as i will share my mindmaps of bug bounty strategies and whatnot here in the future.',
        tags: ['web', 'developer', 'blog'],
        id: 1,
        date: '8.12.2024'
    },
    {
        title: 'First ever blog post',
        content: `This is my first blog post ever. i hope i can continue to write more cause i have some good ideas.
         i thought  maybe here is a good place to dump my mind maps and thoughts. 
        i am especially excited to write about all the cool portswigger 
        labs i solve everyday. i donno tho. maybe i will abandon this blog in a week. who knows? but i hope not. i will continue to writee for this blog post cause i mean its the first one i gotta set a good precedent!
        if i develop the CMS i have in mind i think this will catch on.
        `,
        tags: ['blog', 'web'],
        id: 4,
        date: '8.12.2024'
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