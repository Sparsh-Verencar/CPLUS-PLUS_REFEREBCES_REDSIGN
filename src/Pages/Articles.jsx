import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Articles() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState(null); 
  const [selectedTag, setSelectedTag] = useState("");
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    fetch("/articles.json")
      .then((response) => response.json())
      .then((data) =>
        setPosts(
          data.map((post) => ({
            ...post,
            tags: post.tags || [], 
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
          author: user.fullName || "Anonymous",
          tags: newPost.tags ? newPost.tags.split(",") : [], 
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

          const hasUpvoted = post.upvotedBy.includes(userId);
          const hasDownvoted = post.downvotedBy.includes(userId);

          if (type === "upvote") {
            if (hasUpvoted) {
              return {
                ...post,
                upvotes: post.upvotes - 1,
                upvotedBy: post.upvotedBy.filter((id) => id !== userId),
              };
            } else {
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
              return {
                ...post,
                downvotes: post.downvotes - 1,
                downvotedBy: post.downvotedBy.filter((id) => id !== userId),
              };
            } else {
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

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const allTags = [...new Set(posts.flatMap((post) => post.tags))];

  return (
    <>
      <div className="w-screen h-[10vh]"></div>
      <div
        className="w-screen mx-auto p-4 flex flex-col justify-center items-center text-white
        bg-gradient-to-tr from-gray-900 via-stone-900 to-sky-900"
      >
        <h1 className="text-3xl font-bold mb-4">Articles</h1>

        <motion.input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-[50vw] p-2 mb-4 border rounded"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        />

        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelectedTag("")}
            className={`px-4 py-2 rounded-full ${
              selectedTag === ""
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full ${
                selectedTag === tag
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {isSignedIn && (
          <motion.div
            className="mb-6 p-4 border rounded-lg shadow-sm w-full md:w-[50vw] bg-gray-900"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
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
            <input
              type="text"
              name="tags"
              placeholder="Tags (comma-separated)"
              value={newPost.tags || ""}
              onChange={handleInputChange}
              className="w-full p-2 mb-2 border rounded"
            />
            <motion.button
              onClick={addPost}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Post
            </motion.button>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              className="w-full p-4 border rounded-lg shadow-sm cursor-pointer bg-gray-900"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              whileHover="hover"
              onClick={() => setSelectedPost(post)} 
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-300 line-clamp-3">{post.content}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Author: {post.author || "Unknown"}
              </p>
              <div className="flex items-center mt-2">
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleVote(post.id, "upvote");
                  }}
                  className="text-green-500 hover:text-green-600"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ▲ {post.upvotes}
                </motion.button>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleVote(post.id, "downvote");
                  }}
                  className="text-red-500 hover:text-red-600 ml-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ▼ {post.downvotes}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={() => setSelectedPost(null)} 
          >
            <motion.div
              className="bg-gray-900 p-6 rounded-lg w-[90vw] max-w-2xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()} 
            >
              <h2 className="text-2xl font-bold mb-4 text-white">{selectedPost.title}</h2>
              <p className="text-gray-300">{selectedPost.content}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Author: {selectedPost.author || "Unknown"}
              </p>
              <div className="flex items-center mt-4">
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleVote(selectedPost.id, "upvote");
                  }}
                  className="text-green-500 hover:text-green-600"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ▲ {selectedPost.upvotes}
                </motion.button>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleVote(selectedPost.id, "downvote");
                  }}
                  className="text-red-500 hover:text-red-600 ml-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ▼ {selectedPost.downvotes}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}