import React from 'react';
import Weather from './weather/weatherapi';
import WttrUebersicht from './weather/wttr-uebersicht';

function App() {
  return (
    <div className="App">
      <h1 className="text-center text-2xl font-bold my-4">Thời tiết hôm nay</h1>
      <Weather />
      <WttrUebersicht />
    </div>
  );
}

export default App;
