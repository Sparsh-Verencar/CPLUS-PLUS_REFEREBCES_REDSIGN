import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Forum() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState(null); 
  const [selectedTag, setSelectedTag] = useState(""); 
  const [replyContent, setReplyContent] = useState(""); 
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    fetch("/posts.json")
      .then((response) => response.json())
      .then((data) =>
        setPosts(
          data.map((post) => ({
            ...post,
            tags: post.tags || [], 
            upvotes: post.upvotes || 0, 
            downvotes: post.downvotes || 0, 
            replies: post.replies || [], 
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
          replies: [], 
        },
      ]);
      setNewPost({});
    }
  };

  const handleUpvote = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, upvotes: post.upvotes + 1 } : post
      )
    );
  };

  const handleDownvote = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, downvotes: post.downvotes + 1 } : post
      )
    );
  };

  const handleReply = (postId) => {
    if (replyContent.trim()) {
      const newReply = {
        id: selectedPost.replies.length + 1,
        author: user.fullName || "Anonymous",
        content: replyContent,
      };
  
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? { ...post, replies: [...post.replies, newReply] }
            : post
        )
      );
  
      setSelectedPost((prevSelectedPost) => ({
        ...prevSelectedPost,
        replies: [...prevSelectedPost.replies, newReply],
      }));
  
      setReplyContent(""); 
    }
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
        <h1 className="text-3xl font-bold mb-4">Forum</h1>

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
              <div className="flex gap-4 mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleUpvote(post.id);
                  }}
                  className="text-green-500"
                >
                  ▲ {post.upvotes}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleDownvote(post.id);
                  }}
                  className="text-red-500"
                >
                  ▼ {post.downvotes}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-white"
            onClick={() => setSelectedPost(null)} 
          >
            <motion.div
              className="bg-gray-900 p-4 md:p-6 rounded-lg w-[90vw] max-w-2xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()} 
            >
              <h2 className="text-2xl font-bold mb-4">{selectedPost.title}</h2>
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
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => handleUpvote(selectedPost.id)}
                  className="text-green-500"
                >
                  ▲ {selectedPost.upvotes}
                </button>
                <button
                  onClick={() => handleDownvote(selectedPost.id)}
                  className="text-red-500"
                >
                  ▼ {selectedPost.downvotes}
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Author: {selectedPost.author || "Unknown"}
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Replies</h3>
                {selectedPost.replies.map((reply) => (
                  <div key={reply.id} className="mb-4 p-4 bg-gray-800 rounded-lg">
                    <p className="text-gray-300">{reply.content}</p>
                    <p className="text-sm text-gray-400 mt-2">- {reply.author}</p>
                  </div>
                ))}
                {isSignedIn && (
                  <div className="mt-4">
                    <textarea
                      placeholder="Write a reply..."
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      className="w-full p-2 mb-2 border rounded bg-gray-800 text-white"
                    />
                    <button
                      onClick={() => handleReply(selectedPost.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Reply
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}