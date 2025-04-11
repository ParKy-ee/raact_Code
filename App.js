import { useState } from 'react';
import "./Component/Grid";
import Header from "./Component/Header";
import CatGrid from "./Component/Grid";
import cats from "./Component/Cats";
import PostCat from "./Component/CatPost";
import Search from './Component/Search';


function App() {
    const [search, setSearch] = useState('')
    const [cat, setCat ] = useState(null);


    
    const catElement = cats.filter((cat) => {
        return cat.name.includes(search);
        }).map((cat, index) => {
            return <CatGrid key={index} cat={cat}  ClicktoPost = {ClicktoPost}/>;
        });

    function ClicktoPost(theCat) {
        setCat(theCat);
    }

    function ClicktoCllose() {
        setCat(null)
    }

    let catPost = null;
    if(!!cat) {
       catPost =  <PostCat  cat = {cat} clickClose = {ClicktoCllose}/>
    }

    return (
        <div className="App">
        <Header />
        <Search value={search} search={setSearch} />
        <div className="grid"v>
            {catElement}
        </div>
        {catPost}
        </div>
    );
}

export default App;
