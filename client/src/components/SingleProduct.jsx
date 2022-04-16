const SingleProduct = ({product: {_id, name, price, desc, color}, onClick, onUpdate}) =>{
return (
    <section style={{display: "flex", flexWrap: "wrap"}}>
        <article >
            Name : {name}
            Price : {price}
            Desc : {desc}
            Color : {color}
            <button onClick={()=>onClick(_id)}>Vendu !</button>
            <button onClick={()=>onUpdate(_id)}>Update me</button>
        </article>
   </section>
)
}

export default SingleProduct