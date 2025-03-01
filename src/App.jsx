import { useState } from "react"
import { Provider } from "react-redux"
import { store } from "./store"
import Header from "./components/Header.jsx"
import Sidebar from "./components/Sidebar.jsx"
import PlaylistSidebar from "./components/PlaylistSidebar.jsx"
import VideoPlayer from "./components/VideoPlayer.jsx"
import VideoList from "./components/VideoList.jsx"
import CommentSection from "./components/CommentSection.jsx"

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <div className="flex-1 p-4">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-3">
                  <PlaylistSidebar />
                </div>
                <div className="lg:col-span-6">
                  <VideoPlayer />
                  <CommentSection />
                </div>
                <div className="lg:col-span-3">
                  <VideoList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default App

