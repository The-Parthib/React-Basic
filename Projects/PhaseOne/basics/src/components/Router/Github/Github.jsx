import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const Github = () => {
  //const [data, setData] = useState([]);
  const data = useLoaderData();

  // useEffect(() => {
  //   fetch('https://api.github.com/users/The-Parthib')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("data : ", data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <>
      <div>Followers : {data.followers} </div>
      <img width={300} src={data.avatar_url} alt="git_photo" />
    </>
  );
};

export default Github;

export const githubDatainfo = async () => {
  const res = await fetch('https://api.github.com/users/The-Parthib')
  return res.json();
}
