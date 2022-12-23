import '/src/App.scss'
import User from "/src/components/User";
import React from "react";
import Articles from "/src/components/Articles";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Skeleton</h1>
      </header>
      <div className="content">
        <Articles/>
        <User/>
      </div>
    </div>
  )
}

export default App
