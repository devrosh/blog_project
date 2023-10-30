import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    [{ align: [] }],

    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],

    [{ size: ["small", false, "large", "huge"] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["link", "image", "video"],
    [{ color: [] }, { background: [] }],

    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "bold",
  "italic",
  "underline",
  "strike",
  "align",
  "list",
  "indent",
  "size",
  "header",
  "link",
  "image",
  "video",
  "color",
  "background",
  "clean",
];

function CreatePost() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = await axios.post("http://localhost:8080/post/create", {
        title,
        body: value,
        image,
      });
      console.log(newPost);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mx-auto text-gray-800 text-lg h-fit py-16">
      <h1 className="flex justify-center text-2xl">Create a post</h1>
      <form
        className="flex flex-col gap-3 items-center my-5"
        encType="multipart/form-data"
      >
        <input
          className="w-[600px] px-3 text-xs py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-red-500"
          type="text"
          placeholder="Enter a post title.."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="text-xs text-gray-700"
          type="file"
          placeholder="Upload image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <ReactQuill
          className="w-[600px] h-auto border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
          placeholder="Write something amazing.."
          modules={modules}
          formats={formats}
          value={value}
          onChange={setValue}
        />
        <button
          onClick={handleSubmit}
          className="w-[600px] bg-gray-800 text-white text-sm rounded-sm mt-3 px-8  py-2"
        >
          Create post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
