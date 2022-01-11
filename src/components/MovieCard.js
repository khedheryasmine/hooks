import React,{useState} from 'react'
import Card from 'react-bootstrap/Card'
import data from './Data'


const MovieCard = ({movies}) => {
    const[search,setSearch]=useState('')
    let dataSearch = movies.filter(item=>
            item.title.toLowerCase().includes(search.toLowerCase())
            )
    return (
      
        <div className="card1">
            <div className="col">
                <div className="mb">
                    
                    <input className="form-control" type="text" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                   

                </div>
               
            </div>
           <div className="card3">
            {dataSearch.map((item, index)=>(
                <div className="card2"> 
                
                <Card style={{ width: '18rem' }}>
                  
                <Card.Img className="img" variant="top" src={item.img} />
                
                <Card.Body>
                  <Card.Title className="title"><h1>{item.title}</h1></Card.Title>
                  <Card.Text className="text">{item.desc}</Card.Text>
                  <Card.Text className="link">{item.link}</Card.Text>
                  <Card.Text  className="rate">{item.rate}</Card.Text>
                  <div className="rate1">
                 
                </div>
                  
               </Card.Body>
                
              </Card> 
              </div>

               ) 
            )}</div>
 

        </div>
    )
}
export default MovieCard
