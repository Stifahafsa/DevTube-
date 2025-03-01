import { useSelector } from "react-redux"
import { ThumbsUp, ThumbsDown } from "lucide-react"

const VideoPlayer = () => {
  const currentVideoId = useSelector((state) => state.playlist.currentVideo)
  const playlists = useSelector((state) => state.playlist.playlists)
  const searchResults = useSelector((state) => state.playlist.searchResults)
  const isSearchActive = useSelector((state) => state.playlist.isSearchActive)

  const allVideos = playlists.flatMap((playlist) => playlist.videos)
  const videosToSearch = isSearchActive ? searchResults : allVideos
  const currentVideo = videosToSearch.find((video) => video.id === currentVideoId)

  if (!currentVideo) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
          <h2 className="text-xl text-gray-500">Sélectionnez une vidéo</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <iframe src={currentVideo.lien} allowFullScreen className="w-full h-100"></iframe>
      </div>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">{currentVideo.titre}</h1>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img  src={currentVideo.auteur.photo || "/placeholder.svg"} alt={`${currentVideo.auteur.prenom} ${currentVideo.auteur.nom}`} className="w-10 h-10 rounded-full mr-3"/>
            <div>
              <p className="font-semibold">
                {currentVideo.auteur.prenom} {currentVideo.auteur.nom}
              </p>
              <p className="text-sm text-gray-500">{currentVideo.duree}</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-1 text-purple-400">
              <ThumbsUp size={20} />
              <span>{currentVideo.likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-purple-400">
              <ThumbsDown size={20} />
              <span>{currentVideo.dislikes}</span>
            </button>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{currentVideo.description}</p>
      </div>
    </div>
  )
}

export default VideoPlayer

