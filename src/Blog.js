import React from 'react'
import {NavLink} from "react-router-dom";
import Markdown from 'react-markdown'


function Blog({blogPosts}) {

    const truncateContent = (content, wordLimit) => {
        const words = content.split(' ');
        if (words.length > wordLimit) {
          return words.slice(0, wordLimit).join(' ') + '...';
        }
        return content;
      };


  return (
    <div>
        {blogPosts.map((post) => (
                    <div className='pt-14 ' key={post.id}>
                    <div className="max-w-80 h-blog lg:h-60 lg:max-w-5xl lg:flex-row flex flex-col-reverse mx-auto">
                        <NavLink to={`${post.id}`} className='w-full'>
                            <div class="border-r post rounded-br-custom-50 h-full rounded-bl-custom-50 lg:w-full lg:rounded-tl-custom-50 lg:rounded-bl-custom-50 rounded-br-none-custom-50 lg:rounded-br-none lg:rounded-tr-none sm:rounded-bl-custom-50 border-b border-l custum-style border-gray-400 lg:border-r-0 lg:border-t lg:border-gray-400  p-4 flex flex-col justify-between leading-normal">
                                <div class="mb-8">
                                    <div class="font-bold text-xl mb-2">{post.title}</div>
                                    <p class=" text-base">
                                        <Markdown children={truncateContent(post.content, 50)} />
                                    </p>
                                </div>
                                <div class="flex items-center">
                                    <div class="text-sm">
                                        <p class="text-gray-900">
                                            {post.tags.map((tag) => (
                                            <span key={tag} className="text-slate-700 px-2">#{tag}</span>
                                        ))}
                                        </p>
                                        <p class="text-gray-600 px-2">{post.date}</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        <div className="h-48 rounded-tl-custom-50 rounded-br-none w-full lg:h-full lg:w-5/12 flex-none lg:rounded-br-custom-50 rounded-tr-custom-50 lg:rounded-tl-none lg:rounded-bl-none bg-cover text-center overflow-hidden" style={{ backgroundImage: "url('/assets/982990.jpg')" }} title="Woman holding a mug">  </div>
                    </div>
                </div>
        ))
        }


    </div>
  )
}

export default Blog