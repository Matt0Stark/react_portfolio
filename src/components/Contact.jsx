import { useState } from "react"
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



// or (props)
export default function Contact({ user }) {

    const [error, setError] = useState("")
    const defaultInfo = { name: "", email: "", question: "" }
    const [contactInfo, setContactInfo] = useState(defaultInfo)


    function handleInputChange(e) {

        console.log(e.target.name)
        console.log(e.target.value)

        const clone = {
            ...contactInfo,

            [e.target.name]: e.target.value

            // [e.target.name]: e.target.value
        }

        setContactInfo(clone);

    }

    function submitForm(e) {
        e.preventDefault()
        if (!contactInfo.name || !contactInfo.email || !contactInfo.question) {

            setError("missing text")

        } else {

            setError("success")
            setContactInfo(defaultInfo)

        }

        // alert user
        //clear the state (clears the form)
    }

    return (

        <>
            <h1>Contact page</h1>
         
                <Form onSubmit={submitForm}>

                    <Row>
                  
                        <Col className="form-field">
                         <label>Name:</label>
                            <input type="text" name="name" value={contactInfo.name} onChange={handleInputChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="form-field">
                        <label>Email:</label>
                            <input type="email" name="email" value={contactInfo.email} onChange={handleInputChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="form-field">
                        <label>Question:</label>
                            <textarea name="question" value={contactInfo.question} onChange={handleInputChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="primary">submit info</Button>
                        </Col>
                    </Row>

                </Form>
            
            <p>{error}</p>
        </>


    )
}