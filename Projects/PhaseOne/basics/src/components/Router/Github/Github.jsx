import { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/The-Parthib')
      .then((res) => res.json())
      .then((data) => {
        console.log("data : ", data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div>Followers : {data.followers} </div>
      <img width={300} src={data.avatar_url} alt="git_photo" />
    </>
  );
};

export default Github;
