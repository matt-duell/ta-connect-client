import $ from 'jquery';

let authenticateUser = (email, password, callback) =>
  $.ajax('http://localhost:8080/authenticate', {
    type: 'POST',
    data: {email, password},
    success(resp) {
      return callback({authenticated: true, token: resp.auth_token});
    },
    error(resp) {
      return callback({authenticated: false});
    }
  });

export default {
  login(email, pass, callback) {
    if (this.loggedIn()) {
      if (callback) { callback(true); }
      this.onChange(true);
      return;
    }

    return authenticateUser(email, pass, res => {
      let authenticated = false;
      if (res.authenticated) {
        localStorage.token = res.token;
        authenticated = true;
      }
      
      if (callback) { callback(authenticated); }
      return this.onChange(authenticated);
    });
  },

  getToken() {
    return localStorage.token;
  },

  logout(callback) {
    delete localStorage.token;
    if (callback) { callback(); }
    return this.onChange(false);
  },

  loggedIn() {
    return !!localStorage.token;
  },

  onChange() {}
};
