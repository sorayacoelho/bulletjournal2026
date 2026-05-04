import '../stlyes/Card.scss'

const Card = ({title, description, image}) => {
return (
    <>
    <div className="card">
        <img src={image} alt="flower" className="card_flower"/>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>

    </>
)
}

export default Card;