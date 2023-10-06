import Ads from "./Ads";
import News from "./News";
import Fun from "./Fun";
import Search from "./Search";
import Weather from "./Weather";
import Popular from "./Popular";
import Map from "./Map";
import TVProgram from "./TV";
import Broadcast from "./Broadcast";

export default function App() {
  return (
    <div className='body'>
      <section className='header'>
        <News articles={newsArticles} local={localNews} stock={stockExchange} />
        <Fun box={funBox}/>
      </section>
      <main className='main'>
        <Search/>
        <Ads banner={adsBanner}/>
      </main>
      <section className='footer'>
        <Weather report={weatherReport}/>
        <Popular links={popularLinks}/>
        <Map local={localMap}/>
        <TVProgram reports={tvReports}/>
        <Broadcast streams={pupularStreams}/>
      </section>
    </div>
  );
}