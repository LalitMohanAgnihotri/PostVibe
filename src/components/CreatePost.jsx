import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitelElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const hendleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitel = postTitelElement.current.value;
    const postBody = postBodyElement.current.value;

    // FIX 1: Convert reactions to a Number for consistency
    const reactions = Number(reactionsElement.current.value);

    const tags = tagsElement.current.value.split(/\s+/).filter(tag => tag.length > 0);

    userIdElement.current.value = "";
    postTitelElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
    
    addPost(userId, postTitel, postBody, reactions, tags);
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md max-w-xl mx-auto my-8">
      <h2 className="text-xl font-bold mb-4 create-post">Create New Post</h2>
      <form className="create-post" onSubmit={hendleSubmit}>
        <div className="mb-3">
          <label
            htmlFor="userId"
            className="form-label block text-sm font-medium text-gray-700"
          >
            Enter your Used Id here
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control w-full p-2 border border-gray-300 rounded-md"
            id="userId"
            placeholder="your user id"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="titleInput"
            className="form-label block text-sm font-medium text-gray-700"
          >
            Post Title
          </label>
          <input
            type="text"
            ref={postTitelElement}
            className="form-control w-full p-2 border border-gray-300 rounded-md"
            id="titleInput"
            placeholder="A great day..."
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="bodyTextarea"
            className="form-label block text-sm font-medium text-gray-700"
          >
            Post Content
          </label>
          <textarea
            type="text"
            ref={postBodyElement}
            className="form-control w-full p-2 border border-gray-300 rounded-md"
            id="bodyTextarea"
            rows="4"
            placeholder="Tell us more..."
          ></textarea>
        </div>
        <div className="mb-3">
          <label
            htmlFor="reaction"
            className="form-label block text-sm font-medium text-gray-700"
          >
            Number of reactions
          </label>
          <input
            type="number"
            ref={reactionsElement}
            className="form-control w-full p-2 border border-gray-300 rounded-md"
            id="reaction"
            placeholder="How many people reacted to this post"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="tag"
            className="form-label block text-sm font-medium text-gray-700"
          >
            Enter your tags here
          </label>
          <input
            type="text"
            ref={tagsElement}
            className="form-control w-full p-2 border border-gray-300 rounded-md"
            id="tag"
            placeholder="Please enter your hastags using space"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;