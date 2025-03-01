import { useState } from "react"
import { useDispatch } from "react-redux"
import { Menu, Search, Video, Bell, User, X } from "lucide-react"
import { searchVideos, clearSearch } from "../slices/playlistSlice"

const Header = ({ onMenuClick }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      dispatch(searchVideos(searchTerm))
    } else {
      dispatch(clearSearch())
    }
  }

  const handleClearSearch = () => {
    setSearchTerm("")
    dispatch(clearSearch())
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={onMenuClick} className="mr-4">
            <Menu className="h-6 w-6 text-gray-500" />
          </button>
          <h1 className="text-xl font-bold text-purple-600">DevTube</h1>
        </div>
        <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <input type="text" placeholder="Rechercher..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            {searchTerm && (
              <button type="button" onClick={handleClearSearch} className="absolute right-12 top-0 mt-2 mr-2">
                <X className="h-5 w-5 text-gray-500" />
              </button>
            )}
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
              <Search className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </form>
        <div className="flex items-center space-x-4">
          <Video className="h-6 w-6 text-gray-500" />
          <Bell className="h-6 w-6 text-gray-500" />
          <User className="h-6 w-6 text-gray-500" />
        </div>
      </div>
    </header>
  )
}

export default Header

