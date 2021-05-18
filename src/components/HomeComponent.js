import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap';

class Home extends Component {
    renderCard ( {con} ) {
    return(<div className="col-12 col-md-4">
        <Card style={{marginBottom: '3%', boxShadow: '5px 5px 5px black'}}>
            <CardHeader style={{textAlign: 'center'}}>
                <i className="fa fa-user fa-lg"></i>
                <CardTitle style={{lineHeight: '10px'}}>
                <p></p>
                    <p>Name: User</p>
                </CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>
                    {con}
                </CardText>
            </CardBody>
        </Card>
    </div>);
    }
    render() {
        const cardcontent = 'Here is the content provided by the users regarding the views for the page.';
        const card = <this.renderCard con={cardcontent} />
        return (
            <renderCard>
                <div>
                    <p className="content">This is the main content of this web page. Here we will display all the main matter of thr home page and content as the views of our users.</p>
                    <div className="container">
                        <div className="row">
                            {card}
                            {card}
                            {card}
                        </div>
                    </div>
                </div>
            </renderCard>
        );
    }
}

export default Home;
