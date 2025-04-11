import "./Grid.css";

function CatGrid(props) {
  const { cat, ClicktoPost } = props;
  return (
    <div className="item">
      <img src={cat.url} alt="cat"  onClick={() => {
        ClicktoPost(cat);
      }}/>
      <p>{cat.name}</p>
    </div>
  );
}

export default CatGrid;
