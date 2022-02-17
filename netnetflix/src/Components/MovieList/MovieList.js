import { Container, Row } from 'react-bootstrap';
import Movie from '../Movie/Movie';



function MovieList({ data }) {

    return (
        <>
        
            <Container className='div-container'>
                <Row md={3}>
                    {
                        data.length && data.map((mov, indx) => (
                            <div key={indx}>
                                <Movie mov={mov} />
                            </div>
                        ))
                    }

                    {
                        !data.length && <div><h2> No Such Resulte,Please try again later</h2></div>
                    }
                </Row>
            </Container>
        </>)
}
export default MovieList;