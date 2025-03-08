"use client"

import { useSelector, useDispatch } from "react-redux"
import { setCurrentPlaylist } from "../slices/playlistSlice"

const PlaylistSidebar = () => {
  const playlists = useSelector((state) => state.playlist.playlists)
  const currentPlaylist = useSelector((state) => state.playlist.currentPlaylist)
  const dispatch = useDispatch()

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Playlists</h2>
      <div className="flex overflow-x-auto space-x-4 pb-2">
        {playlists.map((playlist) => (
          <button
            key={playlist.idPlaylist}
            className={`px-6 py-3 rounded-md whitespace-nowrap transition-colors cursor-pointer ${
              currentPlaylist === playlist.idPlaylist ? "bg-purple-600 text-white " : "bg-gray-100 hover:bg-purple-200"
            }`}
            onClick={() => dispatch(setCurrentPlaylist(playlist.idPlaylist))}
          >
            {playlist.titre}
          </button>
        ))}
      </div>
    </div>
  )
}

export default PlaylistSidebar

