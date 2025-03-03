"use client";

import { useRouter } from "next/navigation";

const DeleteTodo = ({ id }) => {
  const router = useRouter();

  async function HandleDelete() {
    try {
      console.log("Deleting ID:", id); // Debugging

      const response = await fetch("http://localhost:3000/api/todos", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        console.log("Deleted successfully");
        router.refresh(); // 
      } else {
        console.error("Failed to delete todo");
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }

  return <button onClick={HandleDelete}>Delete</button>;
};

export default DeleteTodo;
