import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleDemoLogin(e) {
    e.preventDefault();
    const user = {email: "demouser@gmail.com",password:"123456"};
    this.props.processForm(user)
      .then(()=>this.props.history.push("/"));
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(()=>this.props.history.push("/"));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="form">
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {this.renderErrors()}
            <div className="login-form">
              <div className="auth_item">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  className="login-input"
                  />
              </div>
              <div className="auth_item">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="login-input"
                />
              </div>
              <br />
              <button className="btn btn-submit">
                {this.props.formType}
              </button>
              <button onClick={this.handleDemoLogin} className="btn btn-demo">
                Demo Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
