import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function ReadBlog() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://caterwauling-nickel-apple.glitch.me/readBlog');
            const data = await response.json();
            setBlogs(data);
        }
        fetchData();
    }, [])

    return (
        <>
            <div className="flex justify-start">
                <Link to="/Create" className="bg-transparent bg-gray-700 font-semibold hover:drop-shadow-lg drop-shadow p-8">→ Go Forward</Link>
            </div>
            <div className="flex justify-center">
                <h1 className='text-4xl font-bold text-gray-900'>Read Blogs</h1>
            </div>
            <div className="flex justify-center mt-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">{blog.title}</h2>
                            <p className="text-gray-700">{blog.content}</p>
                            <img className="w-56 h-56 mx-auto mt-4" src={`https://caterwauling-nickel-apple.glitch.me/images/${blog.image}`} alt="blog" />
                        </div>
                    ))}
                </div>
            </div>
            <Link className="fixed top-[83%] left-[75%] lg:left-[93%]" to="/Create"><button className="p-0 w-16 h-16 bg-gray-700 hover:bg-gray-800 rounded-full shadow hover:shadow-lg mouse transition ease-in duration-200 focus:outline-none"><svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-10 h-10 inline-block"><path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                 C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                 C15.952,9,16,9.447,16,10z"></path></svg></button></Link>
        </>
    )
}
