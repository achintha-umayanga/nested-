
import './App.css'
import CommentSection from './components/comments-section'

function App() {

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Discussion</h1>
      <div>
        <CommentSection />
      </div>
    </main>
  )
}

export default App
