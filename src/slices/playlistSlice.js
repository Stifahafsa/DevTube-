import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  playlists: [
    {
      idPlaylist: 1,
      titre: "Programmation Javascript",
      videos: [
        {
          id: 101,
          titre: "Introduction à JavaScript",
          description: "Une vidéo expliquant les bases de JavaScript.",
          miniature: "/js.jpeg",
          duree: "10:05",
          likes: 150,
          dislikes: 5,
          lien: "https://www.youtube.com/embed/01ysRUHZbJI",
          auteur: {
            nom: "Gahi",
            prenom: "Said",
            photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fr-a6CwG4LOsgv6QEp0OjukRcUzvfOckX.png",
          },
              commentaires: [
            "Excellente introduction ! Merci pour cette vidéo.",
            "J'ai enfin compris les bases de JavaScript grâce à vous.",
            "Pourriez-vous faire une vidéo sur les fonctions fléchées ?",
          ],      },
        {
            id: 102,
            titre: "Les fonctions de JavaScript",
            description: "Une vidéo expliquant les bases de JavaScript.",
            miniature: "/js.jpeg",
            duree: "20:05",
            likes: 12000,
            dislikes: 5,
            lien: "https://www.youtube.com/embed/01ysRUHZbJI",
            auteur: {
              nom: "Gahi",
              prenom: "Said",
              photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fr-a6CwG4LOsgv6QEp0OjukRcUzvfOckX.png",
            },
            commentaires: [
            "Vidéo très claire, idéale pour débuter en JavaScript !",
            "Merci pour cette explication simple et efficace.",
            "J'aimerais voir une vidéo sur les événements en JavaScript."
          ],          },
          {
            id: 103,
            titre: "Promise en JavaScript",
            description: "Une vidéo expliquant les bases de JavaScript.",
            miniature: "/js.jpeg",
            duree: "01:30:00",
            likes: 12000,
            dislikes: 5,
            lien: "https://www.youtube.com/embed/01ysRUHZbJI",
            auteur: {
              nom: "Gahi",
              prenom: "Said",
              photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fr-a6CwG4LOsgv6QEp0OjukRcUzvfOckX.png",
            },
            commentaires: [
            "Excellente introduction ! Merci pour cette vidéo.",
            "J'ai enfin compris les bases de JavaScript grâce à vous.",
            "Pourriez-vous faire une vidéo sur les fonctions fléchées ?",
          ],          },
          {
            id: 104,
            titre: "Introduction à JavaScript",
            description: "Une vidéo expliquant les bases de JavaScript.",
            miniature: "/js.jpeg",
            duree: "10:05",
            likes: 200,
            dislikes: 3,
            lien: "https://www.youtube.com/embed/01ysRUHZbJI",
            auteur: {
              nom: "Gahi",
              prenom: "Said",
              photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fr-a6CwG4LOsgv6QEp0OjukRcUzvfOckX.png",
            },
            commentaires: [
            "Excellente introduction ! Merci pour cette vidéo.",
            "J'ai enfin compris les bases de JavaScript grâce à vous.",
            "Pourriez-vous faire une vidéo sur les fonctions fléchées ?",
          ],          
        },
      ],
    },
    {
      idPlaylist: 2,
      titre: "Programmation PYTHON",
      videos: [
        {
            id: 1,
            titre: "Introduction à Python",
            description: "Une vidéo expliquant les bases de Python.",
            miniature: "/python.jpg",
            duree: "15:05",
            likes: 150,
            dislikes: 5,
            lien: "https://www.youtube.com/embed/_uQrJ0TkZlc?si=kriEpF-vkUGz335B",
            auteur: {
              nom: "Mosh",
              prenom: "Programming with",
              photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fr-a6CwG4LOsgv6QEp0OjukRcUzvfOckX.png",
            },
            commentaires: [
              "Super explication, très clair et précis !",
              "Python semble vraiment simple avec cette méthode d'explication.",
              "J'aimerais une vidéo sur les dictionnaires et leurs utilisations.",
              "Merci pour cette introduction, hâte de voir les prochaines vidéos !",
              "Pouvez-vous expliquer plus en détail les structures de contrôle en Python ?"
          ],          },
          {
            id: 2,
            titre: "les Basics de Python",
            description: "Une vidéo expliquant le cours complet de Python.",
            miniature: "/python.jpg",
            duree: "04:10:05",
            likes: 2300,
            dislikes: 5,
            lien: "https://www.youtube.com/embed/ix9cRaBkVe0?si=GGVE4OsDcdEi3_d4",
            auteur: {
              nom: "Bro",
              prenom: "Code",
              photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fr-a6CwG4LOsgv6QEp0OjukRcUzvfOckX.png",
            },
            commentaires: [
              "Super explication, très clair et précis !",
              "Python semble vraiment simple avec cette méthode d'explication.",
              "J'aimerais une vidéo sur les dictionnaires et leurs utilisations.",
              
          ],          },
          {
            id: 3,
            titre: "Les fonctions en Python",
            description: "Une vidéo expliquant les bases de Python.",
            miniature: "/python.jpg",
            duree: "12:10:05",
            likes: 2300,
            dislikes: 2,
            lien: "https://www.youtube.com/embed/rfscVS0vtbw?si=t2r_ZW8jNi74RhQI",
            auteur: {
              nom: "FreeCodeCamping",
              prenom: "Code",
              photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fr-a6CwG4LOsgv6QEp0OjukRcUzvfOckX.png",
            },
            commentaires: [
              "Super explication, très clair et précis !",
              "Python semble vraiment simple avec cette méthode d'explication.",       
          ],          },
      ],
    },
    {
      idPlaylist: 3,
      titre: "Gestion des données",
      videos: [
        {
            id: 1,
            titre: "Introduction à Gestion des données",
            description: "Une vidéo expliquant les bases de Gestion des données.",
            miniature: "/base.jpg",
            duree: "10:05",
            likes: 5000,
            dislikes: 5,
            lien: "https://www.youtube.com/embed/ig3mLq0AhUg?si=kS7SihRQY0hDk1PX",
            auteur: {
              nom: "Gahi",
              prenom: "Said",
              photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fr-a6CwG4LOsgv6QEp0OjukRcUzvfOckX.png",
            },
            commentaires: [
            "Super vidéo pour débuter avec MySQL !",
            "Enfin une explication simple sur les bases de données.",
            "J'aimerais voir une vidéo sur les jointures en MySQL.",
          ],          },
          {
            id: 2,
            titre: "MySQL basics",
            description: "Une vidéo expliquant les bases de MySQL.",
            miniature: "/base.jpg",
            duree: "10:05",
            likes: 1500,
            dislikes: 2,
            lien: "https://www.youtube.com/embed/ig3mLq0AhUg?si=kS7SihRQY0hDk1PX",
            auteur: {
              nom: "Gahi",
              prenom: "Said",
              photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fr-a6CwG4LOsgv6QEp0OjukRcUzvfOckX.png",
            },
            commentaires: [
            "Super vidéo pour débuter avec MySQL !",
            "Enfin une explication simple sur les bases de données.",
            "J'aimerais voir une vidéo sur les jointures en MySQL.",
            
          ],          },
      ],
    },
    {
      idPlaylist: 4,
      titre: "Cloud computing",
      videos: [
        {
            id: 1,
            titre: "DÉCOUVRIR LE CLOUD",
            description: "Une vidéo expliquant les bases de Cloud.",
            miniature: "/cloud.jpg",
            duree: "19:05",
            likes: 3000,
            dislikes: 0,
            lien: "https://www.youtube.com/embed/01ysRUHZbJI",
            auteur: {
              nom: "Gahi",
              prenom: "Said",
              photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fr-a6CwG4LOsgv6QEp0OjukRcUzvfOckX.png",
            },
            commentaires: [
            "Explication claire et précise sur le Cloud Computing, merci !",
            "J'aimerais voir une vidéo sur AWS et ses services.",
            "Super introduction, pouvez-vous parler des avantages et inconvénients du Cloud ?",
          ],          },
          {
            id: 2,
            titre: "Approche Cloud Native",
            description: "Une vidéo expliquant l'approche de Cloud Native.",
            miniature: "/cloud.jpg",
            duree: "10:05",
            likes: 1450,
            dislikes: 1,
            lien: "https://www.youtube.com/embed/2LaAJq1lB1Q",
            auteur: {
              nom: "Tech",
              prenom: "Academy",
              photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fr-a6CwG4LOsgv6QEp0OjukRcUzvfOckX.png",
            },
            commentaires: [
            "Explication claire et précise sur le Cloud Computing, merci !",
            "J'aimerais voir une vidéo sur AWS et ses services.",
            "Super introduction, pouvez-vous parler des avantages et inconvénients du Cloud ?",
            "Merci pour cette vidéo ! Une prochaine sur Azure serait top.",
            "Les types de Cloud (privé, public, hybride) mériteraient plus d'explications."
          ],          },
      ],
    },
    {
      idPlaylist: 5,
      titre: "Modélisation UML & Merise",
      videos: [
        {
            id: 100,
            titre: "Introduction à UML",
            description: "Une vidéo expliquant les bases de la modélisation UML, les principaux diagrammes et leur utilité.",
            miniature: "/merise.jpg",
            duree: "12:30",
            likes: 15000,
            dislikes: 15,
            lien: "https://www.youtube.com/embed/fpxjv5rwXc4?si=7Y4m1-vQwpfbTGkb",
            auteur: {
              nom: "Coursaline",
              prenom: "Code",
              photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fr-a6CwG4LOsgv6QEp0OjukRcUzvfOckX.png",
            },
            commentaires: [
            "Très bonne explication sur UML, merci !",
            "Pouvez-vous détailler le diagramme de classe ?",
            "J'aimerais voir un exemple concret d'utilisation d'UML.",
            "Super clair, est-ce que vous pouvez parler du diagramme de séquence ?",
            "Vidéo intéressante, une suite sur les cas d'utilisation serait top."
          ],         
         },
         {
          "id": 101,
          "titre": "Méthode Merise : MCD, MLD et MPD",
          "description": "Présentation des modèles conceptuel, logique et physique des données en Merise, avec un exemple concret.",
          "miniature": "/merise.jpg",
          "duree": "15:40",
          "likes": 200,
          "dislikes": 5,
          "lien": "https://www.youtube.com/embed/rfscVS0vtbw?si=t2r_ZW8jNi74RhQI",
          "auteur": {
            "nom": "  Fabino",
            "prenom": "Code",
            "photo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fr-a6CwG4LOsgv6QEp0OjukRcUzvfOckX.png"
          },
          "commentaires": [
            "Explication claire sur la méthode Merise, merci !",
            "J'aimerais voir un projet complet avec Merise.",
            "Superbe vidéo ! Un tuto sur la normalisation serait utile.",
            "Bonne explication des différences entre MCD et MLD.",
            "Est-ce que vous pouvez expliquer la transformation MCD vers MPD ?"
          ]
        },
      ],
    },
  ],
  currentPlaylist: 1,
  currentVideo: null,
  searchResults: [],
  isSearchActive: false,
}

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentPlaylist: (state, action) => {
      state.currentPlaylist = action.payload
      state.currentVideo = null
      state.isSearchActive = false
    },
    setCurrentVideo: (state, action) => {
      state.currentVideo = action.payload
    },
    searchVideos: (state, action) => {
      const searchTerm = action.payload.toLowerCase()
      state.searchResults = state.playlists.flatMap((playlist) =>
        playlist.videos.filter(
          (video) =>
            video.titre.toLowerCase().includes(searchTerm) || video.description.toLowerCase().includes(searchTerm),
        ),
      )
      state.isSearchActive = true
      if (state.searchResults.length > 0) {
        state.currentVideo = state.searchResults[0].id
      }
    },
    clearSearch: (state) => {
      state.searchResults = []
      state.isSearchActive = false
    },
    addComment: (state, action) => {
      const { videoId, comment } = action.payload
      const video = state.playlists.flatMap((playlist) => playlist.videos).find((v) => v.id === videoId)
      if (video) {
        video.commentaires.push(comment)
      }
    },
  },
})

export const { setCurrentPlaylist, setCurrentVideo, searchVideos, clearSearch, addComment } = playlistSlice.actions
export default playlistSlice.reducer



