import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardContent, Card, Icon } from "semantic-ui-react";
function Userlist() {
  const [userList, SetUserlist] = useState([]);
  console.log(userList);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => SetUserlist(res.data))
      .catch((res) => console.dir(res));
  }, []);

  return (
    <div className="container-user">
      <h1>Userlist</h1>
      <div className="container"> 
        {userList.map((user) => (
          <Card>
            <CardContent header ={user.name} />
            <CardContent description={user.email}/>
            <CardContent extra>
              <Icon name="phone" />{user.phone}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Userlist;
