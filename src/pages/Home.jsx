import React from 'react'
import { useSelector } from 'react-redux'
import { BlogCard } from '../components/BlogCard';
import SearchBlog from '../components/SearchBlog';

const Home = () => {

  // const numbers = [11, 22, 33, 55, 66,];


  // const n = numbers.filter((num) => num > 30);
  // console.log(n);

  const posts = [
    { id: 1, title: 'hello' },
    { id: 2, title: 'sello' },
  ];


  // const p = posts.filter((m) => m.title.includes('x'));
  // console.log(p)

  // const somes = posts.map((post) => post.id === 1 ? { id: 1, title: 'kello' } : post);
  // console.log(somes);

  const { blogs, message } = useSelector((state) => state.blogSlice);


  return (
    <div>
      <SearchBlog />

      <div className='p-5 grid grid-cols-3 gap-5'>
        {message && <h1>{message}</h1>}
        {/* {blogs.length === 0 && !message && <h1>Try using search</h1>} */}
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