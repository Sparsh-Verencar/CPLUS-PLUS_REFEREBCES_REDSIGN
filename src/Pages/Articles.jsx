import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

export default function Articles() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    fetch("/articles.json")
      .then((response) => response.json())
      .then((data) =>
        setPosts(
          data.map((post) => ({
            ...post,
            upvotes: post.upvotes || 0,
            downvotes: post.downvotes || 0,
            upvotedBy: post.upvotedBy || [],
            downvotedBy: post.downvotedBy || [],
          }))
        )
      )
      .catch((error) => console.error("Error loading posts:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const addPost = () => {
    if (newPost.title && newPost.content) {
      setPosts([
        ...posts,
        {
          id: posts.length + 1,
          ...newPost,
          author: user.fullName || "Anonymous", // Add the author's name
          upvotes: 0,
          downvotes: 0,
          upvotedBy: [],
          downvotedBy: [],
        },
      ]);
      setNewPost({});
    }
  };

  const handleVote = (postId, type) => {
    if (!isSignedIn) {
      alert("You must be signed in to vote.");
      return;
    }

    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          const userId = user.id;

          // Check if the user has already upvoted or downvoted
          const hasUpvoted = post.upvotedBy.includes(userId);
          const hasDownvoted = post.downvotedBy.includes(userId);

          if (type === "upvote") {
            if (hasUpvoted) {
              // Remove upvote
              return {
                ...post,
                upvotes: post.upvotes - 1,
                upvotedBy: post.upvotedBy.filter((id) => id !== userId),
              };
            } else {
              // Add upvote and remove downvote if exists
              return {
                ...post,
                upvotes: post.upvotes + 1,
                downvotes: hasDownvoted ? post.downvotes - 1 : post.downvotes,
                upvotedBy: [...post.upvotedBy, userId],
                downvotedBy: post.downvotedBy.filter((id) => id !== userId),
              };
            }
          } else if (type === "downvote") {
            if (hasDownvoted) {
              // Remove downvote
              return {
                ...post,
                downvotes: post.downvotes - 1,
                downvotedBy: post.downvotedBy.filter((id) => id !== userId),
              };
            } else {
              // Add downvote and remove upvote if exists
              return {
                ...post,
                downvotes: post.downvotes + 1,
                upvotes: hasUpvoted ? post.upvotes - 1 : post.upvotes,
                downvotedBy: [...post.downvotedBy, userId],
                upvotedBy: post.upvotedBy.filter((id) => id !== userId),
              };
            }
          }
        }
        return post;
      })
    );
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="w-screen h-[10vh]"></div>
      <div
        className="w-screen mx-auto p-4 flex flex-col justify-center items-center text-white
        bg-gradient-to-tr from-gray-900 via-stone-900 to-sky-900"
      >
        <h1 className="text-3xl font-bold mb-4">Articles</h1>

        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[50vw] p-2 mb-4 border rounded"
        />

        {/* Create Post */}
        {isSignedIn && (
          <div className="mb-6 p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Post an Article</h2>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newPost.title}
              onChange={handleInputChange}
              className="w-full p-2 mb-2 border rounded"
            />
            <textarea
              name="content"
              placeholder="Content"
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
        )}

        {/* Display Posts */}
        <div className="grid grid-cols-12 gap-10">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="w-full h-full p-4 border rounded-lg shadow-sm col-span-6"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-300">{post.content}</p>
              <p className="text-sm text-gray-400 mt-2">
                Author: {post.author || "Unknown"}
              </p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => handleVote(post.id, "upvote")}
                  className="text-green-500 hover:text-green-600"
                >
                  ▲ {post.upvotes}
                </button>
                <button
                  onClick={() => handleVote(post.id, "downvote")}
                  className="text-red-500 hover:text-red-600 ml-2"
                >
                  ▼ {post.downvotes}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}