import React from 'react';
import { Segment, Form } from 'semantic-ui-react';

class FinanceEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'costs',
            title: '',
            sum: ''
        };

        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSumChange = this.handleSumChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTypeChange(event, data) {
        this.setState({
            type: data.value
        });
    }

    handleTitleChange(event) {
        this.setState({
            title: event.target.value
        });
    }

    handleSumChange(event) {
        this.setState({
            sum: event.target.value
        });
    }

    handleSubmit() {
        let item = {
            type: this.state.type,
            title: this.state.title,
            sum: this.state.sum,
            id: Date.now()
        };

        this.props.onItemAdd(item);

        this.setState({
            title: '',
            sum: ''
        });
    }

    render() {
        const stateOptions = [
            {
                key: 'costs',
                value: 'costs',
                text: 'costs'
            },
            {
                key: 'income',
                value: 'income',
                text: 'income'
            }
        ];

        return (
            <Segment>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group style={{marginBottom: 0}}>
                        <Form.Select fluid width={4}
                            options={stateOptions}
                            defaultValue={this.state.type}
                            onChange={this.handleTypeChange} />
                        <Form.Input width={7} placeholder="Title"
                                    value={this.state.title}
                                    onChange={this.handleTitleChange} />
                        <Form.Input type="number" placeholder="Sum" width={3}
                                    value={this.state.sum}
                                    onChange={this.handleSumChange} />
                        <Form.Button content="Add" />
                    </Form.Group>
                </Form>
            </Segment>
        );
    }
}

export default FinanceEditor;