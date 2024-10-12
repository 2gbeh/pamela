import { useState } from "react";

export function useListItem() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState(-1);
  //
  const toggleIsCompleted = () => setIsCompleted((prev) => !prev);
  const toggleConfirmDelete = () => setShowConfirmDelete((prev) => !prev);
  //
  function handleDeleteIntent(id: number) {
    setToBeDeleted(id);
    setShowConfirmDelete(true);
  }
  function handleDelete() {
    console.log("🚀 ~ toBeDeleted:", toBeDeleted);
    setShowConfirmDelete(false);
  }

  return {
    isCompleted,
    toggleIsCompleted,
    showConfirmDelete,
    toggleConfirmDelete,
    handleDeleteIntent,
    handleDelete,
  };
}
