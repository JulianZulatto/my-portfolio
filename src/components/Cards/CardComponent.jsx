import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent({ name, img, title, text, onButtonClick }) {
    return (
        <Card
            className="mx-auto h-100"
            style={{ width: '18rem', backgroundColor: "#15223fff" }}
        >
            {/* Imagen con altura fija */}
            <div style={{ height: "180px", overflow: "hidden" }}>
                <Card.Img
                    variant="top"
                    src={img}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover" // <-- recorta para que quede igual
                    }}
                />
            </div>

            <Card.Body className="d-flex flex-column">
                <Card.Title style={{ color: "#22D3EE" }}>
                    <strong>{title}</strong>
                </Card.Title>

                <Card.Text style={{ color: "#22D3EE" }}>
                    {text}
                </Card.Text>

                {/* Empuja el botón abajo */}
                <div className="mt-auto">
                    <Button
                        style={{ backgroundColor: "#15223fff", borderColor: "#22D3EE" }}
                        onClick={onButtonClick}
                    >
                        {name}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;



