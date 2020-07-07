import React from 'react'
import UserCard from './UserCard'
import axios from 'axios'

class FollowersList extends React.Component{
    constructor(){
        super()
        this.state = {
            user: []
        }
    }
    componentDidMount(){
        console.log(this.props.followers)
    }
    render(){
        return(
            <div>
                {/* {props.followers.map(follower => {
                    axios.get(`https://api.github.com/users/${follower.login}`)
                    .then(res => {
                        console.log(res)
                        
                        return(
                            // <UserCard user={res.data} />
                            <h1>WTF </h1>
    
                        )
                    })
                })} */}
                
            </div>
       
        )
    }
    
}

export default FollowersList