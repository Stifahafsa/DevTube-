import { useSelector, useDispatch } from "react-redux"
import { setCurrentPlaylist } from "../slices/playlistSlice"

const PlaylistSidebar = () => {
  const playlists = useSelector((state) => state.playlist.playlists)
  const currentPlaylist = useSelector((state) => state.playlist.currentPlaylist)
  const dispatch = useDispatch()

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Playlists</h2>
      <div className="space-y-2">
        {playlists.map((playlist) => (
          <button
            key={playlist.idPlaylist}
            className={`w-full text-left px-4 py-2 rounded-md cursor-pointer transition-colors ${
              currentPlaylist === playlist.idPlaylist ? "bg-purple-600 text-white" : "hover:bg-gray-100"
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

