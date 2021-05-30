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
        <Card style={{marginBottom: '5%', boxShadow: '5px 5px 20px black'}}>
            <CardHeader style={{textAlign: 'center'}}>
                <CardImg src={'http://localhost:9000/images/' + props.item.photo} alt={props.item.name} style={{borderRadius: '50%'}} />
                {props.item.name}<br />
                {props.item.email}
            </CardHeader>
            <CardBody style={{overflow: 'scroll', height: '180px'}}>
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
            <div>
                <p className="content">It is very difficult to search a perfect person for the job. In this process an organization always looks for a person who has good theoretical knowledge about the work and also have good hands practically on the related projects. The organization also need to keep in mind that the respect of the employee is far most important, nice name and fame may attracts a large crowd but a skillful and hard working employee always looks for the organization that can provide full respect.</p>
                <p className="content">While applying to an organization, there are certain things that should be present in the mind of the user. He must maintain the respect of the organization and also of the person who is taking the interview. It is not easily to get selected by an organization for any job, there should be a nice theoretical and practical knowledge in the mind of the employer. Due to the increasing population of the world, the task to get hired by a company is very difficult job. So, always be sure about your ability.</p><br />
                <h4 style={{textAlign: 'center', textDecoration: 'underline'}}>Here are some Cards about Skills and Work Experience of People Who are in Search of Job</h4><br />
                <div className="container row">
                    {cards}
                </div>
            </div>
        );
    }
}

export default Profile;