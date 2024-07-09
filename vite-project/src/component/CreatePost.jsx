import { useEffect, useState } from "react";
import axios from "axios";
import './post.css';
import { Link } from 'react-router-dom';
function CreatePost() {
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(null);
  const [detail, setDetail] = useState('');



  const [image, setImage] = useState(null);
  const [allImage, setAllImage] = useState(null);

  useEffect(() => {
    getImage();
  }, []);

  const submitImage = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('detail', detail);




    try {
      const result = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const newImage = result.data.image; // Assuming your backend returns the image filename
      setAllImage([...allImage, { image: newImage }]); // Update state with the new image
      setImage(null); // Clear the selected image
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const onInputChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
 const handlePriceChange = (e) => {
  setPrice(e.target.value);
 }

 const handleDetailChange = (e) => {
  setDetail(e.target.value);
 }

  const getImage = async () => {
    const result = await axios.get("http://localhost:5000/getImage");
    setAllImage(result.data.data);
  };

  return (
    <div className="create-post">
      <form onSubmit={submitImage} className="upload-form">
        <input type="file" accept="image/*" onChange={onInputChange}></input>
        <label>Description:</label>
          <input type="text" value={description} onChange={handleDescriptionChange} required />
          <label>Price:</label>
          <input type="text" value={price} onChange={handlePriceChange} required />
          <label>Rc detail:</label>
          <input type="text" value={detail} onChange={handleDetailChange} required />
        <button type="submit">Submit</button>
      </form>
      <div className="image-gallery">
        {allImage == null
          ? ""
          : allImage.map((data, index) => {
              return (
                <div className="image-card" key={index}>
                  
                  <img
                    src={`./src/pictures/${data.image}`}
                    alt={`uploaded-${index}`}
                    className="image"
                  />
                  <h4>{data.description}</h4>
                  <h4>Price: ₹ {data.price}</h4>
                  <h4>RC Number:{data.detail}</h4>
                  <Link to="/payment">
        <button>Book now</button>
      </Link>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default CreatePost;
