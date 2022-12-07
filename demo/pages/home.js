import connect from "../lib/mongodb";
import { useEffect, useState } from "react";
import test from "./api/test";
export default function Home() {
  const [properties, setProperties] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await test();
      setProperties(data);
      //setProperties(JSON.parse(JSON.stringify(data)));
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Home</h1>
      {properties &&
        properties.map((property) => (
          <div key={property._id}>
            <p>{property.email}</p>
          </div>
        ))}
    </>
  );
}
