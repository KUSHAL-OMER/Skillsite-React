import React, { Component } from 'react';
import { Button, Card, CardText, Form, FormGroup, Input, Label, Toast, ToastBody, ToastHeader } from 'reactstrap';


//--------------------------------------------------SELECTION BUTTON----------------------------------------------------------------

class Butn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            color: 'success',
            msg: 'Select',
            item: props.item
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            color: 'danger',
            msg: 'Remove'
        });
        
    }
    work() {
        if(this.state.color === 'success') {
            this.handleClick();
            this.props.setContent(this.state.item);
        }
        else {
            this.setState({
                color: 'success',
                msg: 'Select',
            });
            this.props.removeElement(this.state.item);
        }
        this.setState({
            value: this.props.item
        });
    }
    render() { 
        return ( 
            <div className="col" style={{marginBottom: '5%'}}>
                <Button color={this.state.color} onClick={() => this.work()}>{this.state.msg}</Button>
            </div>
        );
    }
}

//-----------------------------------------------------------------SLIDER COMPONENT---------------------------------------------------------

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: props.item.val
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        });
        console.log(this.state.value);
        this.props.changeValue(this.props.item, this.state.value);
    }
    render() { 
        return (<>
            <Input type="range" name="level" id="level" step="10" onClick={this.handleChange} onChange={this.handleChange} />
        </>);
    }
}

//---------------------------------------------------------------------PARENT SKILL COMPONENT-------------------------------------------------

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selected: [],
            value: '0'
        };
    }
    RenderItems(item) {
        return(
            <div className="row">
                    <div className="col-6">
                        <h6>{item.name}</h6>
                    </div>
                        <Butn item={item} setContent={this.setContent.bind(this)} removeElement={this.removeElement.bind(this)} />
                    <hr />
                </div>
        );
    }
    setContent(val) {
        this.setState({
            selected: this.state.selected.concat(val)
        });
    }
    removeElement(val) {
        let i = this.state.selected.indexOf(val);
        let items = this.state.selected;
        items.splice(i,1);
        this.setState({
            selected: items
        });
    }

    RenderForm() {
        return(<>
            <Form>
                <FormGroup>
                    <Label htmlFor="photo"><h6>Profile image</h6></Label>
                    <Input type="file" name="photo" id="photo" />
                </FormGroup> <br />
                <FormGroup>
                    <Label htmlFor="exp"><h6>Experience and projects</h6></Label>
                    <Input type="textarea" name="exp" id="exp" />
                </FormGroup>
            </Form>
        </>);
    }

    changeValue(tal, val) {
        let items = this.state.selected;
        let ind = items.indexOf(tal);
        items[ind].val = val;
        this.setState({
            selected: items
        });
    }

    RenderItem() {
        const skills = this.state.selected.map((skill) => {
            return(
                <div className="row" style={{marginBottom: '2%'}}>
                    <div className='col-12 col-md-6'><h6>{skill.name}</h6></div>
                    <div className='col-12 col-md-6'>
                    <p>{skill.val}</p>
                    <Slider item={skill} changeValue={this.changeValue.bind(this)} />
                    </div>
                    <hr />
                </div>
            );
        });
        if( skills ) {
            return(
            <>
                <Card style={{margin: '5%'}}>
                    <CardText style={{paddingLeft: '5%'}}>
                    <div className="container">
                        {skills}
                    </div>
                    </CardText>
                </Card>
            </>
        );
        }
        else {
            return(
                <></>
            );
        }
    }

    render() { 
        const list = [{name: 'Python', val: '0'}, {name: 'Java', val: '0'}, {name: 'Java Script', val: '0'}, {name: 'Ruby', val: '0'}, {name: 'C++', val: '0'}, {name: 'Type Script', val: '0'}, {name: 'Rust', val: '0'}, {name: 'Go', val: '0'}];
        const cont = list.map((item) => {
            return(
                <>
                    {this.RenderItems(item)}
                </>
            );
        });
        
        return ( <div className="container row">
        <div className="col-12 col-md-6">
            <Toast style={{width: '100%', marginBottom: '10%'}}>
                <ToastHeader>
                    <h4>List</h4>
                </ToastHeader>
                <ToastBody>
                <div className="container" style={{height: '50vh',overflow: 'auto'}}>
                <br />
                    {cont}
                </div>
                </ToastBody>
            </Toast>
        </div>
        <div className="col">
            <Toast style={{width: '100%'}}>
                <ToastHeader>
                    <h4>View</h4>
                </ToastHeader>
                <ToastBody>
                <div className="container">
                    {this.RenderForm()}
                </div>
                </ToastBody>
                <div className="container" style={{height: '25vh',overflow: 'auto'}}>
                    {this.RenderItem()}
                </div>
                <div className='container' style={{marginBottom: '2%'}}>
                    <Button color='primary'>Submit</Button>
                </div>
            </Toast>
        </div>
        </div>
        );
    }
}

export default Skills;