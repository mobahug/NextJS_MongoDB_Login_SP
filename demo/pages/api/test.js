import connect from "../../lib/mongodb";


export default async function handler(req, res) {
	connect().db("test").collection("users").find({}).toArray(function (err, result) {
		if (err) throw err;
		console.log(result)
		res.json(result);
	});
};
