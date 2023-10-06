// Most popular links

// List of popular links
export default function Popular({links}) {
  return(
    <div className="popular">
      <div className="popular-header">
        /** Link */
      </div>
      {links.map(item => <Link {...item}/>)}
    </div>
  )
}

// Popular link
function Link({category, categoryHref, title, href}) {}
