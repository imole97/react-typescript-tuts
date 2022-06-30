import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
        name: 'imole',
        email: 'imole@mail.com'
    })
  };
  const handleLogout = () => {
    setUser(null)
  };
  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <div>user name is {user?.name}</div>
      <div>user email is {user?.email}</div>
    </div>
  );
};

export default User;

//this component uses type on usestate because the future user value can be different from the initial 