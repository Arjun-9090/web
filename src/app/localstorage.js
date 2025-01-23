
// const hi = '[]';

export const setToLocal = (blogs) => {
  localStorage.setItem('blogs', JSON.stringify(blogs));
}



export const getFromLocal = () => {
  const blogs = localStorage.getItem('blogs');
  return blogs === null ? [] : JSON.parse(blogs);
}


export const getMessageFromLocal = () => {
  const blogs = localStorage.getItem('blogs');
  if (blogs === null) {
    return 'Try to add blog';
  } else {
    const parsed = JSON.parse(blogs);
    return parsed.length === 0 ? 'Try to add blog' : null;
  }

}