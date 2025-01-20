import React from 'react'
import { useSelector } from 'react-redux'
import { BlogCard } from '../components/BlogCard';
import SearchBlog from '../components/SearchBlog';

const Home = () => {


  const posts = [
    { id: 1, title: 'hello' },
    { id: 2, title: 'sello' },
  ];

  // const somes = posts.map((post) => post.id === 1 ? { id: 1, title: 'kello' } : post);
  // console.log(somes);

  const { blogs } = useSelector((state) => state.blogSlice);


  return (
    <div>
      <SearchBlog />

      <div className='p-5 grid grid-cols-3 gap-5'>
        {blogs.length === 0 && <h1>Try to add blog</h1>}
        {
          blogs.map((blog, i) => {
            return <BlogCard blog={blog} key={blog.id} index={i} />
          })
        }

      </div>
    </div>
  )
}

export default Home