import React from 'react';
import { Container, Header, Button, Icon } from 'semantic-ui-react';

class ShopHome extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <Container text>
                <Header
                    as='h1'
                    content='React shop'
                    inverted
                    style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
                />
                <Header
                    as='h2'
                    content='Carry out a random act of kindness, with no expectation of reward, safe
in the knowledge that one day someone might do the same for you.'
                    inverted
                    style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                />
                <Button primary size='huge'>
                    View goods
                    <Icon name='right arrow' />
                </Button>
            </Container>
        );
    }
}

export default ShopHome;