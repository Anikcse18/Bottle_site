import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handelBookmark, handelTime }) => {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setblogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog
          blog={blog}
          handelBookmark={handelBookmark}
          handelTime={handelTime}
          key={blog.id}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handelBookmark: PropTypes.func,
  handelTime: PropTypes.func,
};

export default Blogs;
