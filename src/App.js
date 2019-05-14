import React from 'react';
import Button from './Button'

function App() {
  return (
    <div className="App">
      <Button type="submit" value="Click me" style={{ color: 'green' }} />
      <Button type="buttonz" value="Click me" />
      <Button type="anchor" value="Go to google" to="https://google.com" />
    </div>
  );
}

export default App;
