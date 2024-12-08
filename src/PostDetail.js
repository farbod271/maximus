import React from 'react'
import { useParams } from 'react-router-dom';
import Markdown from 'react-markdown'


function PostDetail({blogPosts}) {


    const { id } = useParams();
    const post = blogPosts.find(post => post.id === parseInt(id));
  
    if (!post) {
      return <div>Post not found</div>;
    }

    return (
        <div className='pt-14 ' key={post.id}>
        <div class="blog-cont overflow-hidden shadow-lg w-full lg:w-5/6">
  <img class="w-full object-cover h-auto max-h-96" src="/assets/982990.jpg" alt="Sunset in the mountains"/>
  <div class="px-6 pt-4 pb-2">
    {post.tags.map((tag) => (
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
            ))
    }
  </div>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{post.title}</div>
    <p class=" text-base">
        <Markdown children={post.content} />
    </p>
  </div>

</div>
    </div>
      );


}

export default PostDetail