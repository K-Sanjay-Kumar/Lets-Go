import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import AOS from "aos";
import "aos/dist/aos.css";


const ExploreNorthIndia = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <div className='bg-img'>
        <h1>North India Travel Guide</h1><br />
        <p>Ostensibly whimsical wandering lead the travellers to the northern destinations of India where there exists copious Himalayan Mountains, offbeat places, pilgrimage sites, famous cities and age-old sandstone creations. The places in this northern region can astound you by their cultural extravaganza, architectural marvels and local cuisine, all so different from each other yet sharing the same region.</p>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          <Card className='card' style={{ width: '250px', flexWrap: "wrap", textAlign: "center"}}>
            <Card.Img variant="top" src="https://media1.thrillophilia.com/filestore/q3k0w97kfbczq1puu6qaf0d5o1ap_ajit-sandhu-UCDp0JGQnHg-unsplash.jpg?w=340&dpr=1.0&q=70" />
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                <img src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png" style={{ width: "80px" }} alt="" />
                <h5 style={{ margin: "12px", fontSize: "14px" }}>95 Ratings</h5>
              </Card.Title>
              <Card.Text>
                Weekend Getaway to Alibaug from Pune.
                <p style={{ textDecoration: "line-through" }}>Rs.20000.00</p>
                <h5>Rs.17,500</h5>
              </Card.Text>
              <Button variant="primary" style={{ backgroundColor: "orangered", border: "none" }} onClick={handleShow}>Send Enquiry</Button>
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
            <Card.Img variant="top" style={{ height: "190px" }} src="https://media1.thrillophilia.com/filestore/vhqpb0olfj8ygcj7e5i1pv0do0ch_shutterstock_1134114548.jpg?w=340&dpr=2" />
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                <img src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png" style={{ width: "80px" }} alt="" />
                <h5 style={{ margin: "12px", fontSize: "14px" }}>195 Ratings</h5>
              </Card.Title>
              <Card.Text>
                Pink City Of India. | Jaipur City Tour.
                <p style={{ textDecoration: "line-through" }}>Rs.4000</p>
                <h5>Rs.2,750</h5>
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
            <Card.Img variant="top" src="https://media1.thrillophilia.com/filestore/5ioe1fyeddoxjkchbbmtxt1gpkwf_BJW.jpg?w=340&dpr=2" />
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                <img src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png" style={{ width: "80px" }} alt="" />
                <h5 style={{ margin: "12px", fontSize: "14px" }}>255 Ratings</h5>
              </Card.Title>
              <Card.Text>
                Sikkim Wonders with Gangtok | FREE Visit to Tsmogo Lake.
                <p style={{ textDecoration: "line-through" }}>Rs.20,099.00</p>
                <h5>Rs.17,500</h5>
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
            <Card.Img variant="top" src="https://media2.thrillophilia.com/images/photos/000/026/679/original/1613732399_shutterstock_1382805725.jpg?w=245&h=183&dpr=1.5" />
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                <img src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png" style={{ width: "80px" }} alt="" />
                <h5 style={{ margin: "12px", fontSize: "14px" }}>595 Ratings</h5>
              </Card.Title>
              <Card.Text>
                Women Special | Leh Ladakh Group Tour.
                <p style={{ textDecoration: "line-through" }}>Rs.27500.00</p>
                <h5>Rs.25500</h5>
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
            <Card.Img variant="top" style={{ height: "190px" }} src="https://media1.thrillophilia.com/filestore/lrf1nhvebgljitv5crs6wx60x1aa_Shri_Mahakaleshwer_Temple_-_panoramio-5b84135846e0fb002c73ad34.png?w=340&dpr=2" />
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                <img src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png" style={{ width: "80px" }} alt="" />
                <h5 style={{ margin: "12px", fontSize: "14px" }}>95 Ratings</h5>
              </Card.Title>
              <Card.Text>
                Visit Two Jyotirlinga Temples In Madhya Pradesh.
                <p style={{ textDecoration: "line-through" }}>Rs.2,999.00</p>
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
          <Card className='card' style={{ width: '250px', flexWrap: "wrap", textAlign: "center" }}>
            <Card.Img variant="top" src="https://media1.thrillophilia.com/filestore/n2pden9egknxp89iyrsv1rbwnbtz_Brahma%20Temple%201.jpg?w=340&dpr=2" />
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                <img src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png" style={{ width: "80px" }} alt="" />
                <h5 style={{ margin: "12px", fontSize: "14px" }}>295 Ratings</h5>
              </Card.Title>
              <Card.Text>
                Brahma Temple Sightseeing Tour, Pushkar.
                <p style={{ textDecoration: "line-through" }}>Rs.27500.00</p>
                <h5>Rs.25500</h5>
              </Card.Text>
              <Button variant='primary' onClick={handleShow} style={{ backgroundColor: "orangered", border: "none" }}>Send Enquiry</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '250px', flexWrap: "wrap", textAlign: "center" }}>
            <Card.Img variant="top" style={{ height: "190px" }} src="https://media1.thrillophilia.com/filestore/0bkkq4qwhn7fbnqej15i74w9flth_awsert.jpg?w=340&dpr=2" />
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                <img src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png" style={{ width: "80px" }} alt="" />
                <h5 style={{ margin: "12px", fontSize: "14px" }}>235 Ratings</h5>
              </Card.Title>
              <Card.Text>
                Hot Air Balloon Jaipur | Pink City Jaipur.
                <p style={{ textDecoration: "line-through" }}>Rs.14500.00</p>
                <h5>Rs.14000</h5>
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
            <Card.Img variant="top" style={{ height: "190px" }} src="https://media1.thrillophilia.com/filestore/kgf0kclu6h08jia4ku52ij2l0upf_NVR1.jpg?w=340&dpr=2" />
            <Card.Body>
              <Card.Title style={{ display: "flex" }}>
                <img src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png" style={{ width: "80px" }} alt="" />
                <h5 style={{ margin: "12px", fontSize: "14px" }}>195 Ratings</h5>
              </Card.Title>
              <Card.Text>
                Rishikesh Camping With Rafting | Uttarakhand.
                <p style={{ textDecoration: "line-through" }}>Rs.2900.00</p>
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

export default ExploreNorthIndia