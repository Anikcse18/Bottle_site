import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarkes = ({ bookmarks, spendTime }) => {
  return (
    <div className="md:w-1/3 ml-3">
      <div className="p-4 my-3 mx-2 border-blue-700 border rounded-md bg-blue-100">
        <h1 className="text-blue-700 font-semibold">
          Spent time on read : {spendTime}
        </h1>
      </div>

      <div className=" p-2 my-1 mx-2 bg-slate-200 rounded-md">
        <h1 className="text-[23px] font-semibold p-2 my-1 mx-2">
          Book Markes length: {bookmarks.length}
        </h1>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark} idx={idx}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarkes.propTypes = {
  bookmarks: PropTypes.array,
  spendTime: PropTypes.number,
};

export default Bookmarkes;
