import images from './data/images.json'
import {useState} from 'react';

function App() {
    const [imageurl, setImage] = useState(images);
    const [selectedIndex, setIndex] = useState(null);
    //const [count, setCount] = useState(0);

    const ImageButton = ({ name, onClick}) => {
        return (
            <button onClick={onClick}  >
                <img src={"src/assets/question.svg"} alt={name}/>
            </button>
    
        )
    }


    const select = (index) => {
        setIndex(index);
    }


    const open = () => {
        setImage();
    }
    
    return  (
    <>
    <div>
       
       {selectedIndex !== null && imageurl[selectedIndex] && (
         <img src={imageurl[selectedIndex].url} alt="selected"/>
            
        )
        }
    </div>

    <div>
        {imageurl.map((item, index) => (
            <ImageButton key={item.id} src={item.url} onClick={() => select(index)} />
        ))}
         {imageurl.map((item, index) => (
            <ImageButton key={item.id} src={item.url} onClick={() => select(index)} />
        ))}
         {imageurl.map((item) => (
            <ImageButton key={item.id} src={item.url} onClick={() => open()} />
        ))}
    </div>


    </>);
}

export default App;
