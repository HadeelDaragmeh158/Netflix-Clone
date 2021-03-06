import Modal from 'react-bootstrap/Modal';
import {Button}  from 'react-bootstrap';
import {useRef} from 'react';
import axios from 'axios';
import './ModalMovie.css';

function ModalMovie({CardInfo,setCardInfo, show,setShow, handleClose }) {
 console.log(CardInfo);

const commentInputRef = useRef("");

const addToFav = async ()=>{
    let comment = commentInputRef.current.value;
   let fav = {title:CardInfo.title, release_date:CardInfo.release_date, overview:CardInfo.overview, poster_path:CardInfo.poster_path, comment:comment}
  
   await axios.post(`https://hadeelappme.herokuapp.com/addMovie`,fav)
              .then(()=>{
                  console.log("Movie is added successfully");
              }).catch((err)=>{
                  console.log(err);
              });

}

    return (
        <>
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <h3>{CardInfo.title}</h3>
                    <img alt="image not found" src={`https://image.tmdb.org/t/p/w500${CardInfo.poster_path}`} />
                    <div>
                        <label htmlFor="op">Write Your Opinion</label>
                        {/* <input placeholder="Write Your Opinion" type="text" id="op" /> */}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                    onClick={()=>{
                        addToFav();
                        handleClose();
                    }}> 
                        Add To Favorite 
                        </Button>
                </Modal.Footer>
            </Modal>
            </div>
        </>
    )
}

export default ModalMovie;