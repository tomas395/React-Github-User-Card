import React from "react";
import axios from "axios";
import UserCard from "./components/Githubcard";
import "./App.css";

class App extends React.Component {
  state = {
    email: "",
    login: "",
    location: "",
    avatar: "",
    followers: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/tomas395")
      .then(res => {
        console.log("Fetched!", res);
        this.setState({
          email: res.data.email,
          login: res.data.login,
          location: res.data.location,
          avatar: res.data.avatar_url
        });
      })
      .catch(err => {
        console.log("Error: The data was not returned!", err);
      });

    axios
      .get("https://api.github.com/users/tomas395/followers")
      .then(res => {
        console.log("Fetched!", res);
        this.setState({
          followers: res.data
        });
      })
      .catch(err => {
        console.log("Error: The data was not returned!", err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="App">
          <h1>Tomas395's Followers</h1>
          {this.state.followers.map(follower => (
            <div className="card-img">
              <UserCard
                login={follower.login}
                avatar_url={follower.avatar_url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
