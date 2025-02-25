const Age = ({ age }) => {
  return <p>Age: {age}</p>;
};

const Message = ({ age }) => {
  return <p>{age > 18 ? "Welcome to adulthood!" : "You are very young!"}</p>;
};

const AlertClock = ({ onClick }) => {
  return <button onClick={onClick}>Show Time</button>;
};

const Welcome = ({ name, age }) => {
  const showAlertWithTime = () => {
    alert(`Current time: ${new Date().toLocaleTimeString()}`);
  };

  return (
    <div>
      <p>Welcome, {name}!</p>
      <Message age={age} />
      {age > 18 && <Age age={age} />}
      {age && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {age > 18 && name === "John" && <Age age={age} />}
      <AlertClock onClick={showAlertWithTime} />
    </div>
  );
};

export default Welcome;
