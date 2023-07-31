import React, { useState, useEffect } from 'react';

const Posts = () => {

    // useState Hook
    const [blogs, setData] = useState([]);
    //
    useEffect(() => {
        fetch('https://www.techneeds.com/wp-json/wp/v2/posts?page=10&_embed=true')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            {blogs.map((blog) => (
                <div className="row blog-item px-3 pb-5">
                    <div className="col-md-5">
                        <img className="img-fluid mb-2 mb-md-0"
                            src={blog._embedded['wp:featuredmedia'][0].source_url}
                            alt="Featured"
                        />
                    </div>
                    <div className="col-md-7">
                        <h5 className="px-md-3 bg-white font-weight-bold">{blog.title.rendered}</h5>
                        <div className="d-flex mb-0">
                            <small className="mr-2 text-muted"><i className="fa fa-calendar-alt"></i> {blog.date}</small>
                            <small className="mr-2 text-muted"><i className="fa fa-folder"></i> {blog.type}</small>
                        </div>
                        <p>
                            <div
                                dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}
                            />
                        </p>
                        <a className="btn btn-link p-0" href="">Read More <i className="fa fa-angle-right"></i></a>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Posts
