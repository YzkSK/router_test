import './App.css'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <>
      <div>
        <Link to="/PageB">Go to Page B</Link>
      </div>
      <Link to="/PageB">
        <button>
          Go to Page B
        </button>
      </Link>
    </>
  )
}