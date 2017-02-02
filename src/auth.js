import axios from 'axios';

module.exports = {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(true)
      this.onChange(true)
      return
    }
    authenticateUser(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },

  getToken() {
    console.log(localStorage.token);
    console.log(this.loggedIn());
    return localStorage.token
  },

  logout(cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {}
}

function authenticateUser(email, pass, cb) {
  axios.post('http://localhost:8080/authenticate',
            {email: email, password: pass})
            .then(
              (resp) => cb({authenticated: true, token: resp.data.auth_token})
            ).catch(
              (error) => cb({authenticated: false})
            );
}
