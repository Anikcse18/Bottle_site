import profile_image from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b-2 max-w-6xl mx-auto">
      <h1 className="text-3xl">Knowledge Cafe</h1>
      <img src={profile_image} />
    </div>
  );
};

export default Header;
