function Card(props){
    return(

        <div className="card bg-primary text-black w-96 shadow-xl">
  <figure>
    <img
      src={props.imageurl}
      alt="shoes" className="w-[360px] h-[300px]" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-bold mt-3">RS : {props.price}</h2><br />
    <p>{props.descripton}</p>
    <p className="mt-3">{props.address}</p>
    <p className="mt-3 my-4">{props.time} ago</p>
    
  </div>

</div>

)
}

export default Card
