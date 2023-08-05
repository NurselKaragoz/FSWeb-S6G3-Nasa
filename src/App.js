import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [nasaPic, setNasapic] = useState("");

  useEffect(() => {
    // This axios GET request will return a single image
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=4v42nsnRoQBAGf8Bl9kZ2j6IeU8xgFmNJzY5sH0M "
      )
      // Which we then set to state
      .then((response) => setNasapic(response.data.url));
    console.log(nasaPic);
    // handle success

    // Always include error handling
  }, []);

  return (
    <div className="App">
      <p>
        NASA uygulamasını yapmak için README.md dosyasıdaki talimatları takip
        edin İyi eğlenceler!{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
      <div src={nasaPic}></div>
    </div>
  );
}

export default App;
