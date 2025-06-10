import '../App.css';

interface cardProps {
    img: string;
    title: string;
    desc: string;
    link: string;
}

function Card({ img, title, desc, link }: cardProps) {

    const handleClick = () => {
        window.open(link, '_blank');
    };

    return(
        <div className='card'>
            <img src="src\assets\thumbtack.webp" className='thumbtack'/>
            <img src={img}/>
            <div className='info'>
            <h3>{title}</h3>
            <p>{desc}</p>
            <button onClick={handleClick}>More Information</button>
            </div>
        </div>
    );
}

export default Card;