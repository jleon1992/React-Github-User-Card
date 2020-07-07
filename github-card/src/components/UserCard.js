import React from 'react'

const UserCard = props => {
    // console.log(props)
    return(
        <div className="card">
            <img src={props.user.avatar_url} className="img" />
            <div className="card-info">
                <h1>{props.user.name}</h1>
                <p className="username">{props.user.login}</p>
                <p>Company: {props.user.company}</p>
                <p>Following: {props.user.following}</p>
                <p>Followers: {props.user.followers}</p>
                <p>Bio: {props.user.bio}</p>
            </div>
            
        </div>
    )
}

export default UserCard