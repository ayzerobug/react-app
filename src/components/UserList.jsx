import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (res.status === 200) {
        const data = await res.json();
        setUsers(data);
      } else {
        setError("Failed to load users.");
      }
    } catch (error) {
      console.error(error);
      setError("Failed to load users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="size-6 border-amber-600 border-t-2 rounded-full animate-spin" />
    );
  }

  if (error != null) {
    return <p className="text-red-500 font-semibold">{error}</p>;
  }

  if (users.length === 0) {
    return <p>No User found</p>;
  }

  return (
    <div className="space-y-2">
      {users.map((user) => (
        <div className="border p-2 rounded-md px-4">
          <p className="font-semibold">{user.name}</p>
          <p className="text-sm text-slate-500">{user.email}</p>
          <div>
            <p>
              <span className="font-semibold">Address: </span>
              {user.address.street}, {user.address.suite}, {user.address.city}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
