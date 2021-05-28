import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';


interface Props{
    FormOpen:(type:"create")=>void
}

export default function NavBar({FormOpen}:Props) {
    return(
        <Menu inverted stackable color="blue" fixed='top'>
            <Container>
                <Menu.Item header name='logo'>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight:'10px'}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item header name='Reactivities'/>
                    
                <Menu.Item header name='logo'>
                    <Button onClick={() => FormOpen("create")} inverted color='black' content='Create Activity'/>
                    
                </Menu.Item>
            </Container>
        </Menu>
    )
}