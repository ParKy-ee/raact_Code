import './Search.css'
function Search(props) {
    const { value, search } = props
    return(
       <div className="input-box">
             <input className="input" type="text" value={value} 
        placeholder='fine a cat u want' 
        onChange={(event) => {
            search(event.target.value);
        }} />
       </div>
    );
}

export default Search;