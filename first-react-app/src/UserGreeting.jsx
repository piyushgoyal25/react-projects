
function UserGreeting(props) {
    
        return (props.isLoggedIn ? <h2>Welcome</h2> :  <h2>Nope</h2>)
}

export default UserGreeting