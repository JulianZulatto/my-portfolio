import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalComponent({show, onClose, src}) {




  return (
      <Modal show={show} onHide={onClose} size='xl'>
        <Modal.Header closeButton>
        </Modal.Header>

        <Modal.Body>
          <img
          src={src}
          alt='Certificado en grande'
          style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
  );
}

export default ModalComponent;
