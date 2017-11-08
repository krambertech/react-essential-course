import React from 'react';
import { Segment } from 'semantic-ui-react';

import './FinanceEditor.less';

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
        this.handleItemAdd = this.handleItemAdd.bind(this);
    }

    handleTypeChange(event) {
        this.setState({
            type: event.target.value
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

    handleItemAdd() {
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
        return (
            <Segment color='purple'>
                <div className="editor">
                    <select className="editor__select" value={this.state.type} onChange={this.handleTypeChange} >
                        <option value="costs">costs</option>
                        <option value="income">income</option>
                    </select>
                    <input className="editor__field editor__field_title" type="text" placeholder="Title"
                           value={this.state.title}
                           onChange={this.handleTitleChange} />
                    <input className="editor__field editor__field_sum" type="number" placeholder="Sum"
                           value={this.state.sum}
                           onChange={this.handleSumChange} />
                    <button className="editor__button" onClick={this.handleItemAdd} >Add</button>
                </div>
            </Segment>
        );
    }
}

export default FinanceEditor;