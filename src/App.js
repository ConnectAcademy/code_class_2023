import React, { useState } from "react";
import axios from "axios";

//axios docs
// https://axios-http.com/docs/intro

// jsonPlaceholder docs
// https://jsonplaceholder.typicode.com/guide/

function App() {
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [serverResponse, setServerResponse] = useState(null);
  // fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
  //   console.log(res)
  // );
  // axios
  //   .get("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => console.log(res));
  // axios
  //   .post("https://jsonplaceholder.typicode.com/posts", {
  //     title: "foo",
  //     body: "bar",
  //     userId: 1,
  //   })
  //   .then((res) => console.log(res));
  const onFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      title: e.target.title.value,
      body: e.target.body.value,
      userId: 1,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((res) => {
        setIsLoading(false);
        setSuccessMessage(res.statusText);
        setServerResponse(res.data);
      })
      .catch((err) => setIsLoading(false));
  };
  console.log(serverResponse);
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input name="title" placeholder="Title" />
        <input name="body" placeholder="Body" />
        <button>Submit</button>
      </form>
      {isLoading && <p>Loading ...</p>}
      {successMessage && <p>{successMessage}</p>}
      {serverResponse && (
        <p>Post so id: {serverResponse.id} beshe uspeshno kreiran</p>
      )}
    </div>
  );
}

export default App;
