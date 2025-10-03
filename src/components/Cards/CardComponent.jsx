import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent ({img, title, text, src}){
    return(
        <>
        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title><strong>{title}</strong></Card.Title>
                            <Card.Text>
                                {text}
                            </Card.Text>
                            <Button variant="primary" src={src}>Ver Certificado</Button>
                        </Card.Body>
                    </Card>
        </>
    )
};

export default CardComponent;

