import {useState,useEffect} from 'react';
import axios from 'axios';
import MovieList from '../MovieList/MovieList';


function Home() {
    const [data, setData] = useState([]);
    const [cardInfo, setCardInfo] = useState({});
    const [show,setShow] = useState(false);

    const handleClose = ()=>setShow(false);

    // console.log(process.env.REACT_APP_BASE_URL);
    const getAllRecipes = async () => {
        return await axios.get(`https://hadeelappme.herokuapp.com/trending`)
            .then(result => {
                return result.data;
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(()=>{
        void(async()=>{
          let data = await getAllRecipes();
          setData(data);
        })();   
    },[]);
   

    return (
      <>
      <MovieList data={data}/>
      </>
    )
}
export default Home;