import React from 'react';
import Button from './Button'

function App() {
  return (
    <div className="App">
      <Button />
      <Button type="submit" value="Click me" style={{ color: 'green' }} />
      <Button type="button" value="Click me" />
      <Button type="anchor" value="Go to google" to="https://google.com" />
    </div>
  );
}

export default App;
