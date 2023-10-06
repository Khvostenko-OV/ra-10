// Yandex search

// Search header
function SearchHeader() {}

// Search footer
function SearchFooter() {}

//Search query
function Query() {}

export default function Search() {
  return (
    <div className="search">
      <SearchHeader/>
      <Query/>
      <SearchFooter/>
    </div>
  );
}