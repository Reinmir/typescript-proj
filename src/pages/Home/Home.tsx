import React, { useState } from "react";

import { Title } from "components/Title/Title";
import { Button } from "components/Button/Button";

const catImg =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg";
const dogImg =
  "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg";


function Home() {
  const [changeImg, setChangeImg] = useState(true);

  const handleChangeImg = () => {
    changeImg ? setChangeImg(false) : setChangeImg(true);
  };

  return (
    <>
      <Title>Welcome to home page</Title>
      <Button onClick={handleChangeImg}>
        {changeImg ? "Cat Image" : "Dog Image"}
      </Button>
      <p>
        <img src={changeImg ? catImg : dogImg} alt="" />
      </p>
    </>
  );
}
export default Home;
