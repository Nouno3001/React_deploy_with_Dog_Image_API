import React from "react";

function DogImage(props) {
  return (
    <img
      src={[
        "https://images.dog.ceo/breeds/leonberg/n02111129_716.jpg",
        "https://images.dog.ceo/breeds/pointer-germanlonghair/hans3.jpg",
        "https://images.dog.ceo/breeds/terrier-scottish/n02097298_8911.jpg",
      ]}
      alt="Dog Images"
    />
  );
}

export default DogImage;
