import "./App.css";
import { useState, useEffect } from "react";

function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} />
    </div>
  );
}


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/Praveen10`
    ).then((response) => response.json() )
    .then(setData);
    }, []);
    if (data)
      return (
        <GithubUser 
          name ={data.name}
          location={data.url}
          avatar={data.avatar_url}
        />
      );

  return (
    <h1>Data</h1>
  );
}

export default App;
