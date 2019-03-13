import React, { Component } from 'react';
import axios from 'axios';

const ProuductContext = React.createContext();

class ProuductProvider extends Component {

  state = {
    prouduct: [],
    picks: [],
    buttons: false
  }

  componentDidMount() {
/*
    var uiConfig = {
      signInSuccessUrl: '<url-to-redirect-to-on-success>',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
      ],
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      tosUrl: '<your-tos-url>',
      // Privacy policy url/callback.
      privacyPolicyUrl: function() {
        window.location.assign('<your-privacy-policy-url>');
      }
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);  
*/
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    console.log(response);
    this.setState({prouduct: response.data});
  })
  .catch(function (error) {
    console.log(error);
  });

  }

  buttonHandeler = () => {
    console.log("button clicked");
  }

  render() { 
    return ( 
      <ProuductContext.Provider value={{
        ...this.state,
        buttonHandeler: this.buttonHandeler
      }}>
        {this.props.children}
      </ProuductContext.Provider>
     );
  }
}

const ProuductConsumer = ProuductContext.Consumer;

export { ProuductProvider, ProuductConsumer };