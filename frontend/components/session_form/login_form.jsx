import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
