import Link from "next/link"

const SiteHeader = () => {

  return (
    <header className={"site-header"}>
      <div className="wrapper">
        <figure className="logo">
          <Link href = '/'>📝 Notes</Link>
        </figure>
      </div>
    </header>
  )
}

export default SiteHeader