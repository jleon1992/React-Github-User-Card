import React from 'react';
import './App.css';
import axios from 'axios'
import UserCard from './components/UserCard'
// import FollowersList from './components/FollowersList'
// import Follower from './components/Follower'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      user: [],
      followers: [],
      followUser: []
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

  componentDidUpdate(prevProps, prevState) {
    console.log('CDU')
    if(this.state.followers !== prevState.followers){
      this.state.followers.map(follower => {
        return(
            axios.get(`https://api.github.com/users/${follower.login}`)
            .then(res => {
                const follow = res.data
                this.setState({
                  followUser: [...this.state.followUser, follow ]
                })
            })
        )
    })
    }
    
  }

  render(){
    // console.log(this.state.followUser)
    return(
      <div className="App">
        <UserCard user ={this.state.user} />
    
           
            {
              this.state.followUser.map(user => {
                return(
                  <UserCard user={user} />
                )
              })
            }
          </div>
    )
  }
}

export default App;
