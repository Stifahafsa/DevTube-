"use client"

import { X, Home, Compass, PlaySquare, Clock, ThumbsUp, Film, Lightbulb, Gamepad2, Newspaper } from "lucide-react"

const SidebarItem = ({ icon: Icon, title }) => (
  <div className="flex items-center space-x-4 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
    <Icon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
    <span className="dark:text-white">{title}</span>
  </div>
)

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-30`}
    >
      <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
        <h2 className="text-xl font-bold text-red-600 dark:text-red-400">EduTube</h2>
        <button onClick={onClose}>
          <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
        </button>
      </div>
      <nav className="mt-4">
        <SidebarItem icon={Home} title="Accueil" />
        <SidebarItem icon={Compass} title="Explorer" />
        <SidebarItem icon={PlaySquare} title="Abonnements" />
        <hr className="my-2 border-gray-200 dark:border-gray-700" />
        <SidebarItem icon={Clock} title="Historique" />
        <SidebarItem icon={ThumbsUp} title="Vidéos J'aime" />
        <hr className="my-2 border-gray-200 dark:border-gray-700" />
        <h3 className="px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">Explorer</h3>
        <SidebarItem icon={Film} title="Films" />
        <SidebarItem icon={Lightbulb} title="Apprentissage" />
        <SidebarItem icon={Gamepad2} title="Jeux vidéo" />
        <SidebarItem icon={Newspaper} title="Actualités" />
      </nav>
    </div>
  )
}

export default Sidebar

