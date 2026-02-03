import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalComponent({ show, onClose, src, children }) {




  return (
    <Modal show={show} onHide={onClose} size='xl' >
      <Modal.Header closeButton style={{ backgroundColor: "#23272e" }} className='border-0'>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#2a2f36" }}>
        {children ? children : (<img
          src={src}
          alt='Certificado en grande'
          style={{ maxWidth: '100%', height: 'auto' }}
        />)}

      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#23272e" }} className='border-0'>
        <Button variant="secondary" onClick={onClose}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
