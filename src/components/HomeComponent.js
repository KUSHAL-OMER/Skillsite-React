import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardText, CardTitle } from 'reactstrap';

class Home extends Component {
    renderCard () {
    return(<div>
        <Card style={{marginBottom: '3%', boxShadow: '5px 5px 5px black'}}>
            <CardHeader style={{textAlign: 'center'}}>
                <CardTitle style={{lineHeight: '10px'}}>
                <h4>Thought</h4>
                </CardTitle>
            </CardHeader>
            <CardBody>
                <CardText style={{textAlign: 'center'}}>
                    <p>Thinking is the capital, Enterprise is the way, Hard work is the solution</p>
                </CardText>
            </CardBody>
        </Card>
    </div>);
    }
    render() {
        const card = <this.renderCard />
        return (
                <div>
                    <p className="content">The hard work and an imagination can create anything in this universe. Yes! we human beings can change whole universe, as there is no end of the imagination and also the new growing technologies are increasing our eagerness to know more. It might seems silly but the increasing mentality of human in the field of Science is causing a great impact on his own day to day life.</p>
                        <div className="row">
                            <div className="col-12 col-md-9">
                                <p className="content">The increasing demand of new technologies has given a big rise in the field of employment and every person knows that today's world is all about money. All the important stuff that we required is bought by the money that we earn by our hard work. Thus it has become very difficult to grab a job and to maintain it. A person who has nice working experience can handel it easily, but to find such person is a very difficult task for an organization.</p>
                            </div>
                            <div className="col">
                                {card}
                            </div>
                        </div>
                        <p className="content">To sort the problem for displaying the work experience of a user to other organizations and to make it easy for organizations to find a well experienced person, it was important to create a platform where the people who are in search of jobs can show their skills. Though there are large number of unemployed people, the organizations are unable to find people with any. Because it is not important that the person is unemployed or free but skillful. The increasing population is making this task more complex, so we have created this website where people can get employment and organizations can able to find employees.</p>
                    </div>
        );
    }
}

export default Home;
