import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function CreateBlog() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };
  // const editorRef = useRef();
  const handleSave = () => {
    const newBlog = { title, content, image };

    alert('Blog saved successfully!');
  };

  return (
    <>
      <div className="flex justify-start">
        <Link to="/" className="bg-transparent bg-gray-700 font-semibold hover:drop-shadow-lg drop-shadow p-8">← Go back</Link>
      </div>
      <form action='https://suave-vaulted-milkshake.glitch.me/createBlog' method='post' encType='multipart/form-data' className="bg-transparent bg-gray-700 font-semibold hover:drop-shadow-lg drop-shadow p-8 mx-60">
        <h1 className="my-5 text-4xl tracking-tight font-extrabold text-center text-gray-900">Create a blog post</h1>
        <p className="text-center text-red-600">Fill out the form below to create a blog post.</p>
        <div className="container h-screen mx-auto p-4">
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={title}
            onChange={handleTitleChange}
            className="border border-gray-300 px-4 py-2 mb-4 w-full rounded"
          />
         <textarea
            className="border border-gray-300 px-4 py-2 mb-4 w-full h-40 rounded resize-none"
            name='content'
            value={content}
            placeholder="Blog Content"
            onChange={handleContentChange}
            style={{ verticalAlign: 'top' }}
          />

          <input type="file" name="image" accept=".jpg,.png,.jpeg" className="shadow appearance-none border rounded w-full py-2 px-3 bg-white leading-tight focus:outline-none focus:shadow-outline mt-5" required="" onClick={handleImageChange} />


          <button type="submit" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm w-full py-2.5 mt-5 disabled:bg-gray-500" onClick={handleSave}>Submit</button>
        </div>

      </form>
    </>
  )
}
