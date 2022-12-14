import connect from "../../lib/mongodb";
import User from "../../model/schema";

connect();

export default async function handler(req, res) {
  const { email } = req.body;
  const userExsist = await User.findOne({ email });
  if (userExsist?.email === email) {
    res.status(401).json({
      status: "fail",
      reason: "User already exsist",
    });
    return;
  } else {
    try {
      const user = await User.create(req.body);
      res.redirect("/");
      if (!user) {
        return res.json("User not created");
      }
    } catch (error) {
      res.status(400).json("Not able to create a new user!");
    }
  }
}
