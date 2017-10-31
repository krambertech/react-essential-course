import React from 'react';
import FinanceList from './FinanceList.jsx';
import FinanceEditor from './FinanceEditor.jsx';

import './FinanceApp.less';

class FinanceApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            type: ''
        };

        this.handleItemAdd = this.handleItemAdd.bind(this);
    }

    componentDidMount() {
        let items = JSON.parse(localStorage.getItem('transactions'));
        if(items) {
            this.setState({
                items: items
            });
        }
    }

    componentDidUpdate() {
        this._updateLocalStorage();
    }

    handleItemAdd(newItem) {
        let items = this.state.items.slice();

        items.unshift(newItem);

        this.setState({
            items: items
        });
    }

    _updateLocalStorage() {
        let items = JSON.stringify(this.state.items);
        localStorage.setItem('transactions', items);
    }

    _getVisibleItems(items, type) {
        if(type === 'costs') {
            return items.filter((item) => (item.type === 'costs'));
        } else if(type === 'income') {
            return items.filter((item) => (item.type === 'income'));
        } else {
            return items;
        }
    }

    render() {
        return (
            <div className="finance">
                <h2 className="finance__header">FinanceApp</h2>
                <FinanceEditor onItemAdd={this.handleItemAdd} />
                <FinanceList items={this._getVisibleItems(this.state.items, this.state.type)} />
            </div>
        );
    }
}

export default FinanceApp;