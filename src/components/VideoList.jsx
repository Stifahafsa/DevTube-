"use client"

import { useSelector, useDispatch } from "react-redux"
import { setCurrentVideo } from "../slices/playlistSlice"

const VideoList = () => {
  const dispatch = useDispatch()
  const {
    playlists,
    currentPlaylist,
    currentVideo: currentVideoId,
    searchResults,
    isSearchActive,
  } = useSelector((state) => state.playlist)

  const currentPlaylistVideos = playlists.find((p) => p.idPlaylist === currentPlaylist)?.videos || []
  const videosToDisplay = isSearchActive ? searchResults : currentPlaylistVideos

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-4 dark:text-white">
        {isSearchActive ? "Résultats de recherche" : "Playlist Vidéos"}
      </h2>
      <div className="space-y-4">
        {videosToDisplay.map((video) => (
          <div
            key={video.id}
            className={`flex space-x-3 p-2 rounded-md cursor-pointer transition-colors ${
              currentVideoId === video.id
                ? "bg-purple-50 dark:bg-purple-900/30"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            onClick={() => dispatch(setCurrentVideo(video.id))}
          >
            <img
              src={video.miniature || "/placeholder.svg"}
              alt={video.titre}
              className="w-24 h-16 object-cover rounded"
            />
            <div className="flex-grow">
              <h3 className="font-medium dark:text-white">{video.titre}</h3>
              <div className="flex items-center mt-1">
                <img
                  src={video.auteur.photo || "/placeholder.svg"}
                  alt={`${video.auteur.prenom} ${video.auteur.nom}`}
                  className="w-6 h-6 rounded-full mr-2"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {video.auteur.prenom} {video.auteur.nom}
                </p>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{video.duree}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VideoList

