import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalComponent({show, onClose, src}) {




  return (
      <Modal show={show} onHide={onClose} size='xl' >
        <Modal.Header closeButton style={{ backgroundColor: "#0F172A" }} className='border-0'>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:"#15223fff"}}>
          <img
          src={src}
          alt='Certificado en grande'
          style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#0F172A" }} className='border-0'>
          <Button variant="secondary"  onClick={onClose}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
  );
}

export default ModalComponent;
