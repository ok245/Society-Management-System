
import axios from 'axios';
class AuthenticationService {

  authenticateUser(user, pwd) {
    //make api call for auth
    console.log('auth call', user, pwd);
    return axios.post('http://localhost:8080/api/auth/signin', {
      email: user,
      password: pwd,
    });

   
  }
   getBasicAuthToken(email, password) {
     return 'Basic ' + window.btoa(email + ':' + password);
   }
  storeUserDetails(email, jwt) {
    // console.log('add user');
    //since user has logged in : now for every request to the backend : add req auth interceptor
    this.setupRequestInterceptor(jwt);
    //user has logged in successfully : so add it's details under session storage
    sessionStorage.setItem('user_dtls', email);
  }
  storeEmail(email) {
    this.setupRequestInterceptor(email);
    //user has logged in successfully : so add it's details under session storage
    sessionStorage.setItem('user_dtls', email);
  }
  removeUserDetails() {
    console.log('rem user');
    sessionStorage.removeItem('user_dtls');
  }
  isUserLoggedIn() {
    console.log('chk user');
   
    return sessionStorage.getItem('user_dtls') === null ? false : true;
  }
  
  getUserName() {
    return sessionStorage.getItem('user_dtls');
  }

  //set up axios request interceptor for JWT
  setupRequestInterceptor(jwt) {
    // const basicAuth = 'Basic ' + window.btoa(userName + ':' + password);

    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        //adding the authorization header to config
        config.headers.authorization = 'Bearer ' + jwt;
      }
      //return config
      return config;
    });
  }
}
//export it's instance , so that it's methods can be called from components
export default new AuthenticationService();
