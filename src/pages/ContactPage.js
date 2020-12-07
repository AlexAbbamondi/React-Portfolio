import React from "react"
import Hero from "../components/Hero"
import {Form, FormGroup, Label, Input, Button, FormFeedback, Container} from "reactstrap"

class ContactPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            message: "",
            disabled: false,
            emailSent: null,
            touched: {
                name: false,
                email: false,
              }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })
    }

    //Sets the blur feature on click
    handleBlur = (field) => () => {
        this.setState({
          touched: {...this.state.touched, [field]: true}
        })
    }

    handleSubmit(values) {
        alert("Current values are: " + JSON.stringify(values));
      }

    //validate the input areas to make sure they are formatted properly
    validate(name, email, message) {
        const errors = {
            name: "",
            email: "",
        }

        if(this.state.touched.name) {
            if(name.length < 2) {
              errors.name = "Name name must be atleast 2 characters."
            } else if(name.length > 15) {
              errors.name  = "Name name must be 15 or less characters."
            }
        }

        if(this.state.touched.email && !email.includes("@")) {
            errors.email = "Email should contain a @."
        }

        return errors
    }

    render() {

        const errors = this.validate(this.state.name, this.state.email)

        return(
            <div>
                <Hero title={this.props.title}/>
                <Container>
                    <Form className="mb-5 mr-5 ml-5" onSubmit={values => this.handleSubmit(values)}>
                        <FormGroup>
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" name="name" type="text" value={this.state.name} invalid={errors.name} onChange={this.handleChange} onBlur={this.handleBlur("name")}/>
                            <FormFeedback>{errors.name}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" value={this.state.email} invalid={errors.email} onChange={this.handleChange} onBlur={this.handleBlur("email")}/>
                            <FormFeedback>{errors.email}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="message">Message</Label>
                            <Input id="message" name="message" type="textarea" rows="7" value={this.state.message} onChange={this.handleChange} onBlur={this.handleBlur("message")}/>
                        </FormGroup>
                        <Button className="btn button" type="submit">Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default ContactPage