import { createSlice } from "@reduxjs/toolkit";
import { getFromLocal, getMessageFromLocal, setToLocal } from "../app/localstorage";



export const blogSlice = createSlice({
  name: 'blogSlice',
  initialState: {
    blogs: getFromLocal(),
    message: getMessageFromLocal()

  },
  reducers: {

    addBlog: (state, action) => {
      state.blogs.push(action.payload);
      state.message = null;
      setToLocal(state.blogs);
    },
    removeBlog: (state, action) => {
      state.blogs.splice(action.payload, 1);
      setToLocal(state.blogs);
      state.message = state.blogs.length === 0 ? 'Try to add blog' : null;
    },
    editBlog: (state, action) => {
      state.blogs = state.blogs.map((blog) => blog.id === action.payload.id ? action.payload : blog);
      setToLocal(state.blogs);
    },

    searchBlog: (state, action) => {
      if (action.payload.length === 0) {
        state.blogs = getFromLocal();
        state.message = getMessageFromLocal();
      } else {
        state.blogs = state.blogs.filter((blog) => blog.title.toLowerCase().includes(action.payload.toLowerCase()));

        state.message = state.blogs.length === 0 ? 'Try using another keyword' : null;
      }

    }


  }
});


export const { addBlog, removeBlog, editBlog, searchBlog } = blogSlice.actions;