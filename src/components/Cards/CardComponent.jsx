import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CardComponent.css";

function CardComponent({ name, img, title, text, onButtonClick, width }) {
    return (
        <Card
            className="mx-auto h-100"
            style={{
                maxWidth: width || '18rem',
                width: "100%",
                backgroundColor: "#1f2329"
            }}
        >
            {/* Imagen con altura fija */}
            {img && (
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
            )}

            <Card.Body className="d-flex flex-column">
                <Card.Title style={{ color: "#ffffff" }}>
                    <strong>{title}</strong>
                </Card.Title>

                <Card.Text style={{ color: "#ffffff" }}>
                    {text}
                </Card.Text>

                {name && onButtonClick && (
                    <div className="mt-auto">
                        <Button
                            className='border-radius custom-button'
                            onClick={onButtonClick}
                        >
                            {name}
                        </Button>
                    </div>
                )}

            </Card.Body>
        </Card>
    );
}

export default CardComponent;



