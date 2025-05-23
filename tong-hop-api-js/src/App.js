import React from "react";
import DadJoke from "./dadJoke/DadJoke";
import MultiJoke from "./dadJoke/MultiJoke";
import DadJokeGraphQL from "./dadJoke/DadJokeGraphQL";
import DadJokeSearch from "./dadJoke/DadJokeSearch";
import DadJokeSearchImage from "./dadJoke/DadJokeSearchImage";
import SlackDadJoke from "./dadJoke/SlackDadJoke";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <DadJoke />
      <MultiJoke />
      <DadJokeGraphQL/>
      <DadJokeSearch />
      <DadJokeSearchImage/>
      <SlackDadJoke/>
    </div>
  );
}

export default App;
