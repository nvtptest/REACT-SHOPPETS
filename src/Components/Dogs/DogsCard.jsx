import { useState } from 'react';
import './Dogs.css';
import { CartContext } from '../../Contexts/CartContext';
import { useContext } from 'react';

const DogsCard = (props) => {
    const { dog } = props;
    const [isAdded, setAdded] = useState(false);
    const { addToCart } = useContext(CartContext);
    const { setTotal } = useContext(CartContext);

    const handleClickAdd = () => {
        setAdded(true);
        const newItems = {
            dog
        }

        addToCart((item) => [...item, dog]);
        setTotal((total) => total += parseInt(dog.price));
    }

    return (
        <>
            <section className="dogs">
                <div className="dogs-info">
                    <p>{dog.name}</p>
                    <p>{dog.breed}</p>
                </div>
                <div className="dogs-img-container">
                    <img className="dog-img" src={dog.imageUrl} alt={`Picture of ${dog.name}`}></img>
                </div>
                <div className="dogs-desc">{dog.description}</div>
                <div className="dogs-price">{dog.price}$</div>
                {isAdded ?
                    (<button disabled className="dogs-btn-disabled">ADDED</button>)
                    :
                    (<button className="dogs-btn" onClick={handleClickAdd}>Add to cart</button>)
                }

            </section>
        </>
    );
}

export default DogsCard;