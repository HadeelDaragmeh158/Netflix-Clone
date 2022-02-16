import Modal from 'react-bootstrap/Modal';
import {Button , Card,Col} from 'react-bootstrap';

function ModalMovie({cardInfo, show, handleClose}) {
 
    return (
        <>
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <h3>{cardInfo.title}</h3>
                    <img alt="image not found" src={`https://image.tmdb.org/t/p/w500${cardInfo.data.poster_path}`} />
                    <div>
                        <label htmlFor="op">Write Your Opinion</label>
                        <input placeholder="Write Your Opinion" type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"> Add To Favorite </Button>
                </Modal.Footer>
            </Modal>
            </div>
        </>
    )
}

export default ModalMovie;