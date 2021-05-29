import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Progress, CardImg } from 'reactstrap';

const RenderProgress = (props) => {
    var color='';
    if((Number(props.value)) > 75) {
        color='danger';
    }
    else if((Number(props.value)) > 50) {
        color = 'warning';
    }
    else {
        color = 'primary';
    }
    return (<>
        <Progress color={color} value={props.value} />
    </>);
}

const RenderCard = (props) => {

    const data = props.item.selected.map((skill) => {
        return(
            <>
                <div>
                    {skill.name}:
                </div>
                <div>
                    <RenderProgress value={skill.val} />
                </div>
            </>
        );
    });

    return ( 
        <Card style={{marginBottom: '5%'}}>
            <CardHeader style={{textAlign: 'center'}}>
                <CardImg src={'http://localhost:9000/images/' + props.item.photo} alt={props.item.name} />
                {props.item.name}<br />
                {props.item.email}
            </CardHeader>
            <CardBody>
                {props.item.exp}
            </CardBody>
            <CardFooter>
                {data}
            </CardFooter>
        </Card>
    );
}

const Profile = (props) => {
    if(props.cards == null) {
        return(<></>);
    }
    else {
        const cards = props.cards.map((card) => {
            return(<div className="col-12 col-md-3">
                <RenderCard item={card} />
            </div>);
        });
        return(
            <div className="container row">
                {cards}
            </div>
        );
    }
}

export default Profile;