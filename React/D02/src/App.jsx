import Header from './components/Header/Header'
import PostForm from './components/PostForm/PostForm'
import PostList from './components/PostList/PostList'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <section className="form-section">
          <PostForm />
        </section>
        <section className="list-section">
          <PostList />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
