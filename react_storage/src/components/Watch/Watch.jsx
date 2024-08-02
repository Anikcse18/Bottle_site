const Watch = ({ watch }) => {
  const { name, price } = watch;
  console.log(name);
  console.log(price);
  return (
    <div>
      <h1> watch: {name}</h1>
      <p> Price: {name}</p>
    </div>
  );
};

export default Watch;
