
const OneProduct = () => {
    const design = { margin: 10, borderStyle: "dashed" };
  return (
    <div className="card" style={design}>
      <img className="card-img-top" src='https://picsum.photos/200' alt='neki alt tekst' />
      <div className="card-body">
        <h3 className="card-title">Product name</h3>
        <p className="card-text">
          Product description where we can read more details about it.
        </p>
        <a className="btn">+</a>
        <a className="btn">-</a>
      </div>
    </div>
  )
}

export default OneProduct