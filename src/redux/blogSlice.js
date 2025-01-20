import { createSlice } from "@reduxjs/toolkit";
import { getFromLocal, setToLocal } from "../app/localstorage";



export const blogSlice = createSlice({
  name: 'blogSlice',
  initialState: {
    blogs: getFromLocal(),
  },
  reducers: {

    addBlog: (state, action) => {
      state.blogs.push(action.payload);
      setToLocal(state.blogs);
    },
    removeBlog: (state, action) => {
      state.blogs.splice(action.payload, 1);
      setToLocal(state.blogs);
    },
    editBlog: (state, action) => {
      state.blogs = state.blogs.map((blog) => blog.id === action.payload.id ? action.payload : blog);
      setToLocal(state.blogs);
    },
    searchBlog: (state, action) => {
      const query = action.payload;
      if (!query) return state.blogs;
      const regex = new RegExp(query, 'i')
      state.blogs = state.blogs.filter(blog => regex.test(blog.title));
    }


  }
});


export const { addBlog, removeBlog, editBlog, searchBlog } = blogSlice.actions;