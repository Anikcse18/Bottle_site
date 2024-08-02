export default function Friend({ friend }) {
  const { name, email } = friend;
  console.log(name, email);
  return (
    <div className="box">
      <h2>Name: {name} </h2>
      <h3>Email: {email}</h3>
     </div>
  );
}
