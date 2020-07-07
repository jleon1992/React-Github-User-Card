import React from 'react';
import './App.css';
import axios from 'axios'
import UserCard from './components/UserCard'
import FollowersList from './components/FollowersList'
import Follower from './components/Follower'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      user: [],
      followers: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/jleon1992')
    .then(res => {
      this.setState({
        user: res.data
      })
    })
    axios.get('https://api.github.com/users/jleon1992/followers')
    .then(res => {
      this.setState({
        followers: res.data
      })
    })
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log('CDU')
  //   this.state.followers.map(follower => {
  //     axios.get(`https://api.github.com/users/${follower.login}`)
  //     .then(res => {
  //       console.log(res)
  //       this.setState({
  //         user: [...this.state.user, res.data]
  //       })
  //     })
  //   })
  // }

  render(){
    return(
      <div className="App">
        <UserCard user ={this.state.user} />
    
            {this.state.followers.map(follower => {
              return(
                <Follower follower={follower} />
              )
            })}
          </div>
    )
  }
}

export default App;
