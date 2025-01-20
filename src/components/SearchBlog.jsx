import { Input } from '@material-tailwind/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { searchBlog } from '../redux/blogSlice';

const SearchBlog = () => {
  const dispatch = useDispatch();
  return (
    <div className='max-w-[400px] p-5'>
      <form>
        <Input
          onChange={(e) => {
            dispatch(searchBlog(e.target.value))
          }}
          label='search blogs' />
      </form>

    </div>
  )
}

export default SearchBlog