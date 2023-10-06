// Latest news

// List of news articles
export default function News ({local, articles, stock}) {
  return (
    <div className="news">
      <NewsHeader local={local}/>
      { articles.map(item => <NewsItem {...item}/> ) }
      <NewsFooter rates={stock}/>
    </div>
  );
}

// News header
function NewsHeader({localTitle, localHref}) {}

// News footer (Stock exchange)
function NewsFooter({rates}) {
  return (
    <div className="news-footer">
      { rates.map(item => <StockItem {...item}/> ) }
    </div>
  );
}

// Stock exchange item
function StockItem({ticker, rate, diff, href}) {}

// News article
function NewsItem({icon, text, href}) {}
