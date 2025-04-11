import './CatPost.css'

function PostCat(props) {
    const {cat, clickClose} = props
    return (
      <div>
        <div className="post">
        <div className="bg-post">
          <div className='content-post'>
            <img src={cat.url} alt="" onClick={() => {
              clickClose();
            }}/>
            <h3>{cat.name}</h3>
          </div>
        </div>
      </div>
      </div>
    );
}

export default PostCat;