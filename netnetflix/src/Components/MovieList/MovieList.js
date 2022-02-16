
import Movie from '../Movie/Movie';
import { useState, useEffect } from 'react';
import Modal from '../ModalMovie/ModalMovie';



function MovieList(prop) {
    const [cardInfo, setCardInfo] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    return (<>
        {
            prop.data.length && prop.data.map((data, indx) => (
                <div key={indx}>
                <Movie data={data} setCardInfo={setCardInfo }  setShow={setShow}/>
                </div>
            ))
        }
            {
                <Modal cardInfo={cardInfo} show={show} handleClose={handleClose} />
            }
        {
            !prop.data.length && <div><h2> No Such Resulte,Please try again later</h2></div>
        }
    </>)
}
export default MovieList;