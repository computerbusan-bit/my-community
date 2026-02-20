import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import PostDetailPage from './pages/PostDetailPage'
import CreatePostPage from './pages/CreatePostPage'
import { Box } from '@mui/material'

function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/create" element={<CreatePostPage />} />
      </Routes>
    </Box>
  )
}

export default App
