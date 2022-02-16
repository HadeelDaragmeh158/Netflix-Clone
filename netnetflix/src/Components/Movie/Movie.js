import {useState,useEffect} from 'react';
import {Button ,Container,Row ,Card ,Col} from 'react-bootstrap';
import './Movie.css';

function Movie(mov) {
    const[cardInfo,setCardInfo]=useState({});
    const[show,setShow]=useState(false);
   const handleClose = () =>{
        setShow(false);
    } 
    return (
    <>
    <div>
<Row md={3}>
        <Col key={mov.data.id} md={4}>
            <Card className='div-card'>
                <Card.Img className='div-card-img' variant="top" src={`https://image.tmdb.org/t/p/w500${mov.data.poster_path}`} />
                <Card.Body>
                <Card.Title className='div-card-title'>{mov.data.title}</Card.Title>
            
                <div>
                     <Button className='div-card-button' variant="primary"
                      onClick={() => {
                        mov.setCardInfo(mov)
                        mov.setShow(true);
                            }}>Add To Favorite</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
        </Row>
        {
         <ModalMovie CardInfo={CardInfo} show = {show} handleClose = {handleClose}/>
     }
    </div>
    </>)
}
export default Movie;
