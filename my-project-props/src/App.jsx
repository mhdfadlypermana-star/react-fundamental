import Students from "./assets/Students";

function App() {
  return (
    <>
      <Students name="Fadly" age={23} isStudent={true} />
      <Students name="Patrick" age={30} isStudent={false} />
      <Students name="Squidward" age={42} isStudent={false} />
      <Students name="Patrick" age={40} isStudent={true} />
    </>
  );
}

export default App;
