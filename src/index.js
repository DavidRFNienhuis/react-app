import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Route} from 'react-router';
import NavBar from "./navbar";
import AllData from "./alldata";
import Home from "./home";
import Balance from "./balance";
import CreateAccount from "./createaccount";
import Login from "./login";
import Withdraw from "./withdraw";
import Deposit from "./deposit";
import {HashRouter} from "react-router-dom";
const userContext = React.createContext({user: {}});



const Spa = () => {
  return (
    <HashRouter>
      <div>
        <NavBar/>        
          <userContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
          <div className="container" style={{padding: "20px"}}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />
      
          </div>
          </userContext.Provider>
       
        
      </div>
    </HashRouter>
  );
}


export default Spa;



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
