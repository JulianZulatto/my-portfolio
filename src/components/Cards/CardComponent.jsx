import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent ({name ,img, title, text, onButtonClick}){
    return(
        <>
        <Card style={{ width: '18rem', backgroundColor:"#15223fff" }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title style={{color:"#22D3EE"}}><strong>{title}</strong></Card.Title>
                            <Card.Text style={{color:"#22D3EE"}}>
                                {text}
                            </Card.Text>
                            <Button  style={{backgroundColor:"#15223fff", borderColor:"#22D3EE"}} onClick={onButtonClick}>{name}</Button>
                        </Card.Body>
                    </Card>
        </>
    )
};

export default CardComponent;

