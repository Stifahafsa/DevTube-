"use client"

import { useState } from "react"
import { Provider } from "react-redux"
import { store } from "./store"
import Header from "./components/Header.jsx"
import PlaylistSidebar from "./components/PlaylistSidebar.jsx"
import VideoPlayer from "./components/VideoPlayer.jsx"
import VideoList from "./components/VideoList.jsx"
import CommentSection from "./components/CommentSection.jsx"

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="container mx-auto p-4">
          <PlaylistSidebar />
          <div className="mt-6">
            <div className="flex">
              
              <div className="flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  <div className="lg:col-span-8">
                    <VideoPlayer />
                    <CommentSection />
                  </div>
                  <div className="lg:col-span-4">
                    <VideoList />
                  </div>
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

