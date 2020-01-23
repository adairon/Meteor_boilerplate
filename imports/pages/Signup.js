import React       from'react'
import { 
    Form, 
    Button, 
    Container 
}                  from 'semantic-ui-react'

function Signup(props){
    return(
        <Container>
            <h1>Inscrivez-vous !</h1>
            <Form>
                <Form.Input required label="Email" type="email" placeholder="ex: toto@yopmail.com"/>
                <Form.Input required label="Mot de passe" type="password"/>
                <Button color="blue">M'inscrire</Button>
            </Form>
        </Container>
    )
} 

export default Signup