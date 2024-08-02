export default function Singer({ singer }) {
  console.log(singer);

  return (
    <div>
      <h2>Name: {singer?.name}</h2>
      <h3>Age: {singer?.Age}</h3>
      <hr />
    </div>
  );
}
