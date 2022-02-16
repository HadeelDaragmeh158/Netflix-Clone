import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row,Card, Col } from 'react-bootstrap';
import './favorite.css';


function Fav(){
    const [data, setData] = useState([]);

    const getFavRecipes = async () => {
        // await // here the thing that will happen (fetching from API or getting from database )
        return await axios.get(`${process.env.REACT_APP_BASE_URL}/favRecipes`)
            .then(result => {
                console.log(result.data);
                return result.data;
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(()=>{
        void(async()=>{
          let data = await getFavRecipes();
          setData(data);
        })();   
    },[]);


    return (
        <>
        <Container className='div-container'>
        <Row md={3}>
            {
                data.length && data.map((ele) => (
                    <Col key={ele.id} md={4}>
                        <Card className='div-card'>
                            <Card.Img className='div-card-img' variant="top" src={ele.image} />
                            <Card.Body>
                                <Card.Title className='div-card-title'>{ele.title}</Card.Title>
                                <Card.Link className='div-card-link'>
                                    {ele.sourceUrl}
                                </Card.Link>
                                <div>
                                    <Button className='div-card-button' variant="primary" >Update</Button>
                                    <Button className='div-card-button' variant="danger" >Delete</Button>

                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    </Container>

    {
        !data.length && <div><h2>No Such Results, Please try again later</h2></div>
    }

</>
    )
}

export default Fav;