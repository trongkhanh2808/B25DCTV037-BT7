import { useState } from "react";
import Calculator from "./Calculator";
import CV from "./CV";

function App() {
  const [page, setPage] = useState("calculator");

  return (
    <div>
      <div className="menu">
        <button onClick={() => setPage("calculator")}>Calculator</button>
        <button onClick={() => setPage("cv")}>CV</button>
      </div>

      {page === "calculator" ? <Calculator /> : <CV />}
    </div>
  );
}

export default App;