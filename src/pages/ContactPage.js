import React from "react"
import Hero from "../components/Hero"
import Content from "../components/Content"
import {Form, FormGroup, Label, Input, Button} from "reactstrap"

class ContactPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            message: "",
            disabled: false,
            emailSent: null
        }
    }

    render() {
        return(
            <div>
                <Hero title={this.props.title}/>
                <Content>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="fullname">Full Name</Label>
                            <Input id="fullname" name="name" type="text" value={this.state.name}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" value={this.state.email}/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="message">Message</Label>
                            <Input id="message" name="comments" type="textarea" value={this.state.message}/>
                        </FormGroup>
                        <Button className="btn btn-success">Submit</Button>
                    </Form>
                </Content>
            </div>
        )
    }
}

export default ContactPage