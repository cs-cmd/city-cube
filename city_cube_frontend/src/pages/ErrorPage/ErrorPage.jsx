import { Link } from "react-router-dom"
export default function ErrorPage() {
  return (
    <div>
      <h1>Error!</h1>
      <p>Page not found!</p>
      <p><Link to='/'>Return to home page!</Link></p>
    </div>
  )
}