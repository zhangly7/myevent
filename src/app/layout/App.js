import React from "react";
import { Button } from "semantic-ui-react";

function App() {
  return (
    <div>
      <h1>Re-vents</h1>
      <button className="ui icon button">
        <i className='smile icon'></i>
        &nbsp; CSS Button
      </button>
      <Button icon='smile' content='React Button' />
    </div>
  );
}

export default App;
