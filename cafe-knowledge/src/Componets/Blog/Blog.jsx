import PropTypes from "prop-types";
import { BsBookmarks } from "react-icons/bs";
const Blog = ({ blog, handelBookmark, handelTime }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
    id,
  } = blog;

  return (
    <div className="border-b-[1px] mb-8 pb-4">
      <img
        src={cover}
        className="w-full rounded-md"
        alt={`Cover Picture of the title ${title}`}
      />
      {/* Author Section */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 mt-5 items-center">
          <img
            src={author_img}
            className="w-16"
            alt={`Author Image ${author}`}
          />
          <div className="space-y-[2px] ">
            <h1 className="text-lg font-semibold">{author}</h1>
            <p className="text-gray-500">{posted_date}</p>
          </div>
        </div>
        <div className="">
          <p className="flex items-center gap-[4px] text-gray-500">
            {reading_time} min read
            <button
              className="text-xl"
              onClick={() => {
                handelBookmark(blog);
              }}
            >
              <BsBookmarks> </BsBookmarks>
            </button>
          </p>
        </div>
      </div>
      <h1 className="text-4xl mt-3 font-semibold">{title}</h1>
      <div className="my-2">
        {hashtags.map((tag, idx) => (
          <span key={idx} className="mr-2 text-gray-500">
            #{tag}
          </span>
        ))}
      </div>

      <button
        className="text-blue-700 underline font-medium"
        onClick={() => handelTime(reading_time, id)}
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handelBookmark: PropTypes.func,
  handelTime: PropTypes.func,
};

export default Blog;
