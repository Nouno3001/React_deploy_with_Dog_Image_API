import React, { Component } from "react";
import DogImage from "./DogImage";
import profileImage from "./img/Nouno3001.JPG";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogImages: [],
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ dogImages: data.message });
      });
  }
  render() {
    const dogList = this.state.dogImages.map((url, i) => {
      return <DogImage key={i} url={url} />;
    });

    return (
      <div className="App">
        <h1>Dog Images</h1>
        <h2>author: M.SEBILLOT</h2>
        <img src={profileImage} alt="profile-image" />
        <br />
        <img src={dogList} alt="dog-images" />
      </div>
    );
  }
}
export default App;
