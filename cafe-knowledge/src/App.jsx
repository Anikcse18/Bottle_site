import { useState } from "react";
import "./App.css";
import Blogs from "./Componets/Blogs/Blogs";
import Bookmarkes from "./Componets/Bookmarkes/Bookmarkes";
import Header from "./Componets/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [spendTime, setspendTime] = useState(0);

  const handelBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handelTime = (time, id) => {
    const newTime = spendTime + time;
    setspendTime(newTime);
    const setRemainBookMark = bookmarks.filter(
      (bookmarks) => bookmarks.id !== id
    );
    setBookmarks(setRemainBookMark);
  };
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="md:flex max-w-6xl mx-auto  mt-4">
        <Blogs handelBookmark={handelBookmark} handelTime={handelTime}></Blogs>
        <Bookmarkes bookmarks={bookmarks} spendTime={spendTime}></Bookmarkes>
      </div>
    </>
  );
}

export default App;
