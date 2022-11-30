export default function index() {
  return (
    <>
      <div>
        <h1>Sign up</h1>
        <form action="api/register" method="post">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email address" />

          <label>Password</label>
          <input type="password" name="password" placeholder="Password" />
          <input type="submit" value="Sign up" />
        </form>
      </div>


      <div>
        <h1>Login</h1>
        <form action="api/login" method="post">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email address" />

          <label>Password</label>
          <input type="password" name="password" placeholder="Password" />
          <input type="submit" value="Login" />
        </form>
      </div>
    </>
  );
}
