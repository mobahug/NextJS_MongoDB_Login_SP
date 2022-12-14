import { useEffect, useState } from "react";

export default function Home() {
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("/api/register")
    .then((response) => response.json())
    console.log(response)
      .then((json) => {
        if (json.error) {
          setError(json.error);
        }
      });
  }, []);
  return (
    <div>
      <h1>Home</h1>
      {error && <p>{error}</p>}
      <div>
        <h1>Update your email</h1>
        <form action="api/updateEmail" method="post">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email address" />
          <input type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
}
