import './App.css'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <>
      <div>
        <p>この<Link to="/PageB">ボタン</Link>を押すとPageBにいけます</p>
      </div>
      <Link to="/PageB">
        <button>
          Go to Page B
        </button>
      </Link>
    </>
  )
}