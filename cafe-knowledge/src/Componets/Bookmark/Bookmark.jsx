import PropTypes from "prop-types";

const Bookmark = ({ bookmark, idx }) => {
  const { title } = bookmark;

  return (
    <div className="">
      <h1 className="text-lg p-2 my-2 mx-2 bg-white rounded-lg">
        {idx + 1} | {title}
      </h1>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,

  idx: PropTypes.number,
};

export default Bookmark;
