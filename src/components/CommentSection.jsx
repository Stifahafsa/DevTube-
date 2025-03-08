"use client"

import { useState, useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { User } from "lucide-react"
import { addComment } from "../slices/playlistSlice"

const CommentSection = () => {
  const [newComment, setNewComment] = useState("")
  const [isInputFocused, setIsInputFocused] = useState(false)
  const commentInputRef = useRef(null)
  const dispatch = useDispatch()
  const currentVideoId = useSelector((state) => state.playlist.currentVideo)
  const playlists = useSelector((state) => state.playlist.playlists)
  const currentPlaylist = useSelector((state) => state.playlist.currentPlaylist)

  const currentPlaylistVideos = playlists.find((p) => p.idPlaylist === currentPlaylist)?.videos || []
  const currentVideo = currentVideoId ? currentPlaylistVideos.find((v) => v.id === currentVideoId) : null

  // Handle clicks outside the comment form to reset focus state
  useEffect(() => {
    function handleClickOutside(event) {
      if (commentInputRef.current && !commentInputRef.current.contains(event.target) && newComment.trim() === "") {
        setIsInputFocused(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [newComment])

  if (!currentVideo) {
    return null
  }

  const handleSubmitComment = (e) => {
    e.preventDefault()
    if (newComment.trim()) {
      dispatch(addComment({ videoId: currentVideoId, comment: newComment }))
      setNewComment("")
      setIsInputFocused(false)
    }
  }

  const handleCancel = () => {
    setNewComment("")
    setIsInputFocused(false)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-6 transition-colors duration-200">
      <h2 className="text-lg font-medium mb-6 text-gray-800 dark:text-white">
        {currentVideo.commentaires?.length || 0} Commentaires
      </h2>

      {/* YouTube-style comment form */}
      <div className="mb-8">
        <form ref={commentInputRef} onSubmit={handleSubmitComment} className="flex">
          <div className="flex-shrink-0 mr-3">
            <User className="h-10 w-10 text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-300 rounded-full p-2" />
          </div>
          <div className="flex-grow">
            <div className="relative">
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onFocus={() => setIsInputFocused(true)}
                placeholder="Ajouter un commentaire..."
                className={`w-full px-4 py-2 bg-transparent border-b ${
                  isInputFocused ? "border-purple-600 dark:border-purple-400" : "border-gray-300 dark:border-gray-600"
                } focus:outline-none text-gray-700 dark:text-gray-200 transition-colors duration-200`}
              />
              {isInputFocused && (
                <div className="flex justify-end mt-3 space-x-2">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-4 py-2 text-gray-600 dark:text-gray-300 font-medium rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={!newComment.trim()}
                    className={`px-4 py-2 text-white font-medium rounded-full transition-colors duration-200 ${
                      newComment.trim() ? "bg-purple-600 hover:bg-purple-700" : "bg-purple-400 cursor-not-allowed"
                    }`}
                  >
                    Commenter
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* Comments list */}
      <div className="space-y-6">
        {currentVideo.commentaires && currentVideo.commentaires.length > 0 ? (
          currentVideo.commentaires.map((comment, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <User className="h-10 w-10 text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-300 rounded-full p-2" />
              </div>
              <div className="flex-grow">
                <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm mb-1">Utilisateur {index + 1}</p>
                <p className="text-gray-700 dark:text-gray-300">{comment}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400 italic text-center">
            Aucun commentaire pour cette vidéo. Soyez le premier à commenter !
          </p>
        )}
      </div>
    </div>
  )
}

export default CommentSection

