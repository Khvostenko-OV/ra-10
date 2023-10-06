// Popular streams

// List of streams
export default function Broadcast({streams}) {
  return(
    <div className="broadcast">
      <div className="broadcast-header">
        /** Link */
      </div>
      {streams.map(item => <Stream {...item}/>)}
    </div>
  )
}

// Stream
function Stream({title, href, producer, producerHref}) {}
