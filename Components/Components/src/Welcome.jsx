const Age = ({ age }) => {
  return <p>Age: {age}</p>;
};

const Message = ({ age }) => {
  return <p>{age > 18 ? "Welcome to adulthood!" : "You are very young!"}</p>;
};

const Welcome = ({ name, age }) => {
  return (
    <div>
      <p>Welcome, {name}!</p>
      <Message age={age} />
      {age > 18 && <Age age={age} />}
      {age && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {age > 18 && name === "John" && <Age age={age} />}
    </div>
  );
};

export default Welcome;
