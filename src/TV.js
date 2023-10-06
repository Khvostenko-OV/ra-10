// TV program

// List of closest tv reports
export default function TVProgram({reports}) {
  return(
    <div className="tv-program">
      <div className="tv-header">
        /** Links */
      </div>
      {reports.map(item => <TVItem {...item}/>)}
    </div>
  )
}

// TV program item
function TVItem({time, title, href, producer, producerHref}) {}
