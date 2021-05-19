import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {

  const [activities , setActivities] = useState([]);   
  //[] is initial state for activities value

  useEffect(()=>{
    axios.get("http://localhost:5000/api/activities")
    .then(res=>{
      console.log(res)
      setActivities(res.data)
    })
  },[])   ///the deps list is empty to prevent rerender (just run once)


  return (
    <div className="App">
      <header className="App-header">
        <Header as='h2' content='Reactivities' color='yellow' icon='plug'/>
        <List>
          {activities.map( (a:any) => (
              <List.Item key={a.id}>
                {a.title}
              </List.Item>
            )
          )}
        </List>
        
      </header>
    </div>
  );
}

export default App;
