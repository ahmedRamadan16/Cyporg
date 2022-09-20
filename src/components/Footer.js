import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
        <div>
            <p>Copyright &copy; 2036 Cyborg Gaming Company. All rights reserved.</p>
            <span>
                Design <Link to="/home">Template Mo</Link>
            </span>
        </div>
    </footer>
  )
}
