import Hello from "./Hello";

function App() {
  return (
    <div>
      <Hello />
      <Hello />
      {/* Rendering Hello component more than once works fine */}
      {/* Rendering Message directly here */}
      <p>Rendering Message directly in App works fine.</p>
    </div>
  );
}

export default App;
