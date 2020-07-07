import React from 'react'

const Follower = props => {
    console.log(props)
    return(
        <div className="card">
            <img className="img" src={props.follower.avatar_url} />
    <p>Login: {props.follower.login}</p>
        </div>
    )
}

export default Follower