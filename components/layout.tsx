import Link from "next/link"


export const Layout: React.FC = ({children}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand" >CardGames</a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/mental">
                  <a className="nav-link active" aria-current="page">Mental FlashCard</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/input">
                  <a className="nav-link">Input FlashCard</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/check">
                  <a className="nav-link">Check FlashCard</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <article>
        {children}
      </article>

    </div>
  )
}
