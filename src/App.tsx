import "./App.css";
const res = await fetch("https://api.discogs.com/releases/249504");
const data = await res.json();

console.table(data);

function App() {
  return (
    <>
      <h1>{data.artists_sort}</h1>
      <h2>{data.title}</h2>
      <a href={data.uri}>{data.uri}</a>
    </>
  );
}

export default App;
