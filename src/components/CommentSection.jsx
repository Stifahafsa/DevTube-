import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { User } from "lucide-react"
import { addComment } from "../slices/playlistSlice"

const CommentSection = () => {
  const [newComment, setNewComment] = useState("")
  const dispatch = useDispatch()
  const currentVideoId = useSelector((state) => state.playlist.currentVideo)
  const playlists = useSelector((state) => state.playlist.playlists)
  const currentPlaylist = useSelector((state) => state.playlist.currentPlaylist)

  const currentPlaylistVideos = playlists.find((p) => p.idPlaylist === currentPlaylist)?.videos || []
  const currentVideo = currentVideoId ? currentPlaylistVideos.find((v) => v.id === currentVideoId) : null

  if (!currentVideo) {
    return null
  }

  const handleSubmitComment = (e) => {
    e.preventDefault()
    if (newComment.trim()) {
      dispatch(addComment({ videoId: currentVideoId, comment: newComment }))
      setNewComment("")
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Commentaires</h2>
      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="mb-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Ajouter un commentaire..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-gray-700"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-200 ease-in-out"
        >
          Publier
        </button>
      </form>
      <div className="space-y-6">
        {currentVideo.commentaires && currentVideo.commentaires.length > 0 ? (
          currentVideo.commentaires.map((comment, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <User className="h-10 w-10 text-purple-600 bg-purple-100 rounded-full p-2" />
              </div>
              <div className="flex-grow">
                <p className="font-semibold text-purple-600 mb-1">Visiteur {index + 1}</p>
                <p className="text-gray-700">{comment}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic text-center">
            Aucun commentaire pour cette vidéo. Soyez le premier à commenter !
          </p>
        )}
      </div>
    </div>
  )
}

export default CommentSection

