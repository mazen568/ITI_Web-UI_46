import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export default function ReactionButton({ type, count, handleReaction }) {
  return (
    <button onClick={handleReaction}>
      {type === "like" ? <FaThumbsUp /> : <FaThumbsDown />}
      {count}
    </button>
  );
}