import  { useState }  from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ExploreSouthIndia = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='bg-img'>
        <h1>South India Travel Guide</h1><br />
        <p>South India reminds you of places you wished to see in your dreams. Pristine beaches, vast stretch of ocean, high hills of the Western Ghats and centuries old history. Nothing disappoints you on your journey to the south. Walking down a road with trees on both sides on a sunny morning, the journey itself is as beautiful as the destination. Magnificent rock-cut cave temples depict stories of the ancient Dravidians..</p>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          <Card className='card' style={{ width: '250px', flexWrap: "wrap", textAlign: "center" }}>
            <Card.Img variant="top" style={{ height: "190px" }} src="https://media1.thrillophilia.com/filestore/53njj9nki36qvob2ashdxrpcmd3r_1591171878_shutterstock_1075957706.jpg?w=360&dpr=2" />
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                <img src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png" style={{ width: "80px" }} alt="" />
                <h5 style={{ margin: "12px", fontSize: "14px" }}>95 Ratings</h5>
              </Card.Title>
              <Card.Text>
                South India Temple Tour.Temples of India.
                <p style={{ textDecoration: "line-through" }}>Rs.27,899</p>
                <h5>Rs.24,500</h5>
              </Card.Text>
              <Button variant='primary' onClick={handleShow} style={{ backgroundColor: "orangered", border: "none" }}>Send Enquiry</Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Enquiry form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Ask your Question..?</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}> Save Changes</Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card className='card' style={{ width: '250px', flexWrap: "wrap", textAlign: "center" }}>
            <Card.Img variant="top" style={{ height: "190px" }} src="https://media1.thrillophilia.com/filestore/4p5h7onm2iroo1to7y3aqt3cjggi_kyran-low-MvkLKGtBcUA-unsplash.jpg?w=340&dpr=2" />
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                <img src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png" style={{ width: "80px" }} alt="" />
                <h5 style={{ margin: "12px", fontSize: "14px" }}>195 Ratings</h5>
              </Card.Title>
              <Card.Text>
                South India Tour Package From Bangalore.
                <p style={{ textDecoration: "line-through" }}>Rs.29,800</p>
                <h5>Rs.23,550</h5>
              </Card.Text>
              <Button variant='primary' onClick={handleShow} style={{ backgroundColor: "orangered", border: "none" }}>Send Enquiry</Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Enquiry form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Ask your Question..?</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}> Save Changes</Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card className='card' style={{ width: '250px', flexWrap: "wrap", textAlign: "center" }}>
            <Card.Img variant="top" style={{ height: "190px" }} src="https://media1.thrillophilia.com/filestore/7dcfvcq0kkz634fgcbclek4zc0x0_1591168632_shutterstock_156157688.jpg?w=340&dpr=2" />
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                <img src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png" style={{ width: "80px" }} alt="" />
                <h5 style={{ margin: "12px", fontSize: "14px" }}>255 Ratings</h5>
              </Card.Title>
              <Card.Text>
                South India Tour Package From Chennai.
                <p style={{ textDecoration: "line-through" }}>Rs.14,099.00</p>
                <h5>Rs.12,500</h5>
              </Card.Text>
              <Button variant='primary' onClick={handleShow} style={{ backgroundColor: "orangered", border: "none" }}>Send Enquiry</Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Enquiry form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Ask your Question..?</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}> Save Changes</Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card className='card' style={{ width: '250px', flexWrap: "wrap", textAlign: "center" }}>
            <Card.Img variant="top" style={{ height: "190px" }} src="https://media1.thrillophilia.com/filestore/vu2sj9gc9v90r2g2tqfmuyneax1b_Goa%20Backpacking.png?w=340&dpr=2" />
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                <img src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png" style={{ width: "80px" }} alt="" />
                <h5 style={{ margin: "12px", fontSize: "14px" }}>595 Ratings</h5>
              </Card.Title>
              <Card.Text>
                Friends Tour | Backpacking Tour to Goa.
                <p style={{ textDecoration: "line-through" }}>Rs.27,500.00</p>
                <h5>Rs.25,500</h5>
              </Card.Text>
              <Button variant='primary' onClick={handleShow} style={{ backgroundColor: "orangered", border: "none" }}>Send Enquiry</Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Enquiry form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Ask your Question..?</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}> Save Changes</Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </div>
        <div style={{ marginTop: "30px", flexWrap: "wrap", display: "flex", justifyContent: "space-around" }}>
          <Card className='card' style={{ width: '250px', flexWrap: "wrap", textAlign: "center" }}>
            <Card.Img variant="top" style={{ height: "190px" }} src="https://media1.thrillophilia.com/filestore/y3hw5o0hhxsawbgd3h447y81obit_1593385578_154942132.jpg?w=340&dpr=1.0&q=70" />
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                <img src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png" style={{ width: "80px" }} alt="" />
                <h5 style={{ margin: "12px", fontSize: "14px" }}>95 Ratings</h5>
              </Card.Title>
              <Card.Text>
                Le Pondy Resort, Pondicherry | Luxury Staycation Deal.
                <p style={{ textDecoration: "line-through" }}>Rs.22,999.00</p>
                <h5>Rs.20,500</h5>
              </Card.Text>
              <Button variant='primary' onClick={handleShow} style={{ backgroundColor: "orangered", border: "none" }}>Send Enquiry</Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Enquiry form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Ask your Question..?</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}> Save Changes</Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card className='card' style={{ width: '250px', flexWrap: "wrap", textAlign: "center" }}>
            <Card.Img variant="top" style={{ height: "190px" }} src="https://media1.thrillophilia.com/filestore/2s1kmz7hk9xbme0fupi9m9psx8yz_shutterstock_1911230902.jpg?w=340&dpr=2" />
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                <img src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png" style={{ width: "80px" }} alt="" />
                <h5 style={{ margin: "12px", fontSize: "14px" }}>295 Ratings</h5>
              </Card.Title>
              <Card.Text>
                 Nizamis Old city | Hyderabad City Tour.
                <p style={{ textDecoration: "line-through" }}>Rs.17,500.00</p>
                <h5>Rs.10,500</h5>
              </Card.Text>
              <Button variant='primary' onClick={handleShow} style={{ backgroundColor: "orangered", border: "none" }}>Send Enquiry</Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Enquiry form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Ask your Question..?</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}> Save Changes</Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card className='card' style={{ width: '250px', flexWrap: "wrap", textAlign: "center" }}>
            <Card.Img variant="top" style={{ height: "190px" }} src="https://media1.thrillophilia.com/filestore/4q2a6kti7gjnzotoidtl8ix0mhx9_1591622876_shutterstock_1009388653.jpg?w=340&dpr=2" />
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                <img src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png" style={{ width: "80px" }} alt="" />
                <h5 style={{ margin: "12px", fontSize: "14px" }}>235 Ratings</h5>
              </Card.Title>
              <Card.Text>
                Hyderabad to Srisailam Package.
                <p style={{ textDecoration: "line-through" }}>Rs.10,500.00</p>
                <h5>Rs.8,000</h5>
              </Card.Text>
              <Button variant='primary' onClick={handleShow} style={{ backgroundColor: "orangered", border: "none" }}>Send Enquiry</Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Enquiry form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Ask your Question..?</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}> Save Changes</Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card className='card' style={{ width: '250px', flexWrap: "wrap", textAlign: "center" }}>
            <Card.Img variant="top" style={{ height: "190px" }} src="https://media1.thrillophilia.com/filestore/uug5p6pfl02vvuwcjftgy48zxkks_shutterstock_1107423779-min.jpg?w=340&dpr=1.0&q=70" />
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                <img src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png" style={{ width: "80px" }} alt="" />
                <h5 style={{ margin: "12px", fontSize: "14px" }}>195 Ratings</h5>
              </Card.Title>
              <Card.Text>
                Tirupati Package from Hyderabad.
                <p style={{ textDecoration: "line-through" }}>Rs.2500.00</p>
                <h5>Rs.2500</h5>
              </Card.Text>
              <Button variant='primary' onClick={handleShow} style={{ backgroundColor: "orangered", border: "none" }}>Send Enquiry</Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Enquiry form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Ask your Question..?</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}> Save Changes</Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>

  )
}

export default ExploreSouthIndia