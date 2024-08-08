import "./App.css";
import Blogs from "./Componets/Blogs/Blogs";
import Bookmarkes from "./Componets/Bookmarkes/Bookmarkes";
import Header from "./Componets/Header/Header";

function App() {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="md:flex max-w-6xl mx-auto  mt-4">
        <Blogs></Blogs>
        <Bookmarkes></Bookmarkes>
      </div>
    </>
  );
}

export default App;
