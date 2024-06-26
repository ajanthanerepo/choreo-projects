import './App.css';
import { useAuthContext } from "@asgardeo/auth-react";
import React, { useState, useEffect } from 'react';

function App() {
  const { state, signIn, signOut } = useAuthContext();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("Executing the call...");
    const fetchPost = async () => {
       const response = await fetch('https://b8427943-6ba9-4aaf-b410-9ee8377dcb41-prod.e1-eu-north-azure.choreoapis.dev/rentcarquoteservice/ballerinabackend/quotes-services-73f/v1.0/allCarQuotes', {
        method: 'GET',
        headers: new Headers({
          'Access-Control-Allow-Origin': '*'
        })

       });
       const data = await response.json();
       console.log("Response Received: " + data);
       setPosts(data);
    };
    fetchPost();
 }, []);

  return (
    <div>
      {
        state.isAuthenticated
          ? (
            <div>
              <ul>
                You are logged into the system as: <b>{state.username}</b>
              </ul>
              <button class="login-button"  onClick={() => signOut()}>Logout</button>
              <br/><br/><br/><br/>
              <p><b>Note:</b> Below table will be populated from the Ballerina Backend API</p>
              <div className="tbl-container">
                <div className="styled-table">
                <table>
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Value</th>
                    <th>Rent</th>
                  </tr>
                </thead>
                <tbody>
                {posts.map((post) => {
                  return (
                    <tr key={post.quote_id}>
                      <td>{post.model}</td>
                      <td>{post.value}</td>
                      <td>{post.rent}</td>
                    </tr>
                  );
                })}
                </tbody>
              </table>
              </div>
              </div>
            </div>
          )
          : <button class="login-button"  onClick={() => signIn()}>Login</button>
      }
    </div>
  );
}

export default App;

