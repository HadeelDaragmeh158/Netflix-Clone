import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';

function UpdateModal( {show,handleClose,ele,getFavMovies,
    titleInput,
    setTitleInput,
    poster_path,
    setImageInput,
    commentInput,
    setCommentInput
}){    
    const update = async(id)=>{

        let fav = {title:titleInput, summary:ele.overview, image:poster_path, comment:commentInput}
        
      await axios.put(`https://hadeelappme.herokuapp.com/updatemove/${id}`,fav)
                  .then(()=>{
                    getFavMovies();
                  }).catch(err=>{
                      console.log(err);
                  })
    }
     

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <div>
                        <p>Edite Title</p>
                        <input value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
                        <p style={{ "marginTop": "10px" }}>Edit Image</p>
                        <textarea value={poster_path} onChange={(e) => setImageInput(`https://image.tmdb.org/t/p/w500${e.target.value}`)} />
                    </div>
                    <div>
                        <label htmlFor="op">Write Your Opinion</label>
                        <textarea value={commentInput} onChange={(e) => setCommentInput(e.target.value)} placeholder="Write Your Opinion" type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                     onClick={()=>{
                        update(ele.id);
                        handleClose();
                     }}
                    >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateModal;