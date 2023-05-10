import React, { useState, useEffect } from "react";
import { Container } from "@mui/system";

function Home() {
  const [users, setUsers] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:8080/getUser`);
      const data = await res.json();
      setUsers(data);
    }
    fetchData();
  }, []);

  return (
    <div className="Home">
      <Container>
        <h1>User Information</h1>
        {users?.map((user,index) => (
            <div className = "userDiv" key={index}>
              <div>
              <p>Name: {user.userName}</p>
              <p>Email: {user.email}</p>
              <p>Joined Date: {user.joinedDate}</p>
              <p>Review Score: {user.reviewScore}</p>
              <p>Active Ads: {user.activeAdListings}</p>
              </div>
            </div>
          ))}
      </Container>
    </div>
  );
}

export default Home;

