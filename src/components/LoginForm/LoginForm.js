
import React, { Component } from 'react';
import s from './LoginForm.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

import Paper from 'material-ui/lib/paper';

import TextField from 'material-ui/lib/text-field';
import Email from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

const style = {
  padding:20,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


@withStyles(s)
class LoginForm = React.createClass Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: ''};
  }

  onLogin = (e)  => {
    console.log(this.state);
  }

  emailChange = (event) => {
    this.setState({email: event.target.value});
  }

  passwordChange = (event) => {
    this.setState({password: event.target.value});
    //this.setState({value: event.target.value.substr(0, 140)});
  }

  render() {
    return (
      <Paper style={style} zDepth={1}>

        <TextField
          ref="email"
          hintText="Enter your email"
          floatingLabelText="Email"
          onChange={this.emailChange} />
        <br />
        <TextField
            ref="password"
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
            onChange={this.passwordChange} />
        <br />
        <RaisedButton label="Login" className="button-submit" onClick={ this.onLogin } />
      </Paper>
    );
  }

}

export default LoginForm;
