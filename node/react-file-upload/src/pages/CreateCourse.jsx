import React, {useState} from "react";
import axios from "axios";

function CreateCourse() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    instructor: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('instructor', formData.instructor);
    if (formData.image) {
      data.append('image', formData.image);
    }

    try {
        // await fetch('xyz',{
        //     headers:{
        //         'Content-Type':'multipart/form-data'
        //     },
        //     body:data
        // })
        let token = localStorage.getItem('token')
      const response = await axios.post('http://localhost:5000/api/course', data,
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
      );
      alert('Course created successfully!');
      console.log(response.data);
    } catch (error) {
      alert('Failed to create course');
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="title">Title *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="instructor">Instructor</label>
        <input
          type="text"
          id="instructor"
          name="instructor"
          value={formData.instructor}
          onChange={handleChange}
        />

        <label htmlFor="image">Image</label>
        <input type="file" id="image" name="image" onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateCourse;
