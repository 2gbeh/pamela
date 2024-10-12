import { PromiseHelper } from "@/utils/helpers/common/promise.helper";
import { useState } from "react";

export function useListItem() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [isDeleting, setIsDeleteing] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState(-1);
  //
  const toggleIsCompleted = () => setIsCompleted((prev) => !prev);
  const toggleConfirmDelete = () => setShowConfirmDelete((prev) => !prev);
  //
  function cancelDeleteIntent() {
    setToBeDeleted(-1);
    setShowConfirmDelete(false);
  }
  function handleDeleteIntent(id: number) {
    setToBeDeleted(id);
    setShowConfirmDelete(true);
  }
  async function handleDelete() {
    setIsDeleteing(true);
    await PromiseHelper.mockApiCall();
    console.log("🚀 ~ toBeDeleted:", toBeDeleted);
    setIsDeleteing(false);
    cancelDeleteIntent();
  }

  return {
    isCompleted,
    toggleIsCompleted,
    toBeDeleted,
    showConfirmDelete,
    toggleConfirmDelete,
    handleDeleteIntent,
    cancelDeleteIntent,
    handleDelete,
    isDeleting,
  };
}
