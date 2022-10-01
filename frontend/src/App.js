import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import LoginComponent from './components/todo/LoginComponent';
import ErrorComponent from './components/todo/ErrorComponent';
import HeaderComponent from './components/todo/HeaderComponent';
import LogOutComponent from './components/todo/LogOutComponent';
import AuthenticatedRoute from './components/todo/AuthenticatedRoute';
import Worker from './components/todo/Worker';
import Admin from './components/todo/Admin';
import Flatowner from './components/todo/Flatowner';
import FWSideBar from './components/todo/FWSideBar';
import Navbar from './components/todo/Navbar';
import AddNewVisitor from './components/todo/AddNewVisitor';
import Complaints from './components/todo/Complaints';
import Bill from './components/todo/Bill';
import FBill from './components/todo/FBill';
import CreateNewBill from './components/todo/CreateNewBill';
import Notices from './components/todo/Notices';
import FNotices from './components/todo/FNotices';
import CreateNewNotice from './components/todo/CreateNewNotice';
import CreateNewComplaints from './components/todo/CreateNewComplaints';
import AddNewMember from './components/todo/AddNewMember';
import Visitor from './components/todo/Visitor';

function App() {
  
  return (
    <div className='App'>
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path='/' component={LoginComponent} />
          <Route exact path='/login' component={LoginComponent} />
           
           <AuthenticatedRoute
            exact
            path='/worker'
          ><Worker/>
            </AuthenticatedRoute>
          <Route path='/add-visitor' component={AddNewVisitor} />
          <Route path='/edit-visitor/:id' component={AddNewVisitor} />
          <Route path='/Admin/Notice/Add' component={CreateNewNotice}/>
          <Route path='/Admin/Bills/Add' component={CreateNewBill} />

          <Route path='/add-member' component={AddNewMember} />
          <Route path='/edit-member/:id' component={AddNewMember} />
          
   
          <AuthenticatedRoute
            exact
            path='/Admin'
           >
            <Admin/>
            <Navbar/>
            </AuthenticatedRoute>
            
            <Route path='/Admin/Complaints'>
              <Complaints/>
              <Navbar/>
              </Route>
             
              <Route path='/Admin/Bills'>
              <Bill/>
              <Navbar/>
              </Route>
              
              <Route path='/Admin/visitors'>
              <Visitor/>
              <Navbar/>
              </Route>

              <Route path='/Admin/Notice'>
              <Notices/>
              <Navbar/>
              </Route>

              <AuthenticatedRoute
            exact
            path='/flatowner'
          >
            <Flatowner/>
            <FWSideBar/>
            </AuthenticatedRoute>
            
            <Route path='/flatowner/Complaints/Add' component={CreateNewComplaints} />

              <Route path='/flatowner/Bills'>
              <FBill/>
              <FWSideBar/>
              </Route>
              
              <Route path='/flatowner/visitors'>
              <Visitor/>
              <FWSideBar/>
              </Route>

              <Route path='/flatowner/Notices'>
              <FNotices/>
              <FWSideBar/>
              </Route>
            
            <AuthenticatedRoute
            exact
            path='/logout'
            component={LogOutComponent}
          />
         <Route component={ErrorComponent}></Route>
          
        </Switch>
     </Router>
    </div>
  );
}

export default App;
