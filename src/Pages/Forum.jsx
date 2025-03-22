import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

export default function Forum() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const { isSignedIn } = useUser();

  useEffect(() => {
    fetch("/posts.json")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error loading posts:", error));
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const addPost = () => {
    if (newPost.title && newPost.content) {
      setPosts([...posts, { id: posts.length + 1, ...newPost }]);
      setNewPost({});
    }

  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="w-screen h-[10vh]"></div>
      <div className="w-screen mx-auto p-4 flex flex-col justify-center items-center text-white
        bg-gradient-to-tr from-gray-900 via-stone-900 to-sky-900">
        <h1 className="text-3xl font-bold mb-4">Forum</h1>

        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[50vw] p-2 mb-4 border rounded"
        />

        {/* create post*/}
        {isSignedIn&&
          <div className="mb-6 p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Create a Post</h2>
            <input
              type="text"
              name="title"
              placeholder="Post Title"
              value={newPost.title}
              onChange={handleInputChange}
              className="w-full p-2 mb-2 border rounded"
            />
            <textarea
              name="content"
              placeholder="Post Content"
              value={newPost.content}
              onChange={handleInputChange}
              className="w-full p-2 mb-2 border rounded"
            ></textarea>
            <button
              onClick={addPost}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Post
            </button>
          </div>
        
        }
        

        <div className="grid grid-cols-12 gap-10">
          {filteredPosts.map((post) => (
            <div key={post.id} className="w-full h-full p-4 border rounded-lg shadow-sm col-span-6">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-300">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
