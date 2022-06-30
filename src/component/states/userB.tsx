import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

const UserB = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  console.log(user)
  const handleLogin = () => {
    setUser({
        name: 'imole',
        email: 'imole@mail.com'
    })
  };
  
  return (
    <div>
      <button onClick={handleLogin}>login</button>
      {/* <button onClick={handleLogout}>logout</button> */}
      <div>user name is {user.name}</div>
      <div>user email is {user.email}</div>
    </div>
  );
};

export default UserB;

//in this component type assertion is used when we want our initial state to have an empty object of type auth user
//type assertion prevents the optional chaining operation as unlike in the user1 component
//it is used when we are confident user will be initialized soon after setup and will always have a value after.
