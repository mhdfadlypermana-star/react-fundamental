function UserGreeting(props) {
  const welcomeText = <h2 className="welcome-text">
                      Welcome {props.username}
                      </h2>

  const loginFailed = <h2 className="login-failed">Please Login Ngab</h2>

  return(props.isLoggedIn ? welcomeText : loginFailed );
}

export default UserGreeting;
