import React from 'react';
import FinanceItem from './FinanceItem.jsx';

import './FinanceList.less';

class FinanceList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="finance__list">
                <table className="transactions" width="100%">
                    <thead className="transactions__thead">
                    <tr className="transactions__tr">
                        <th className="transactions__th">Type</th>
                        <th className="transactions__th">Title</th>
                        <th className="transactions__th">Sum</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.items.map((item) => {
                            return (
                                <FinanceItem
                                    key={item.id}
                                    type={item.type}
                                    title={item.title}
                                    sum={item.sum}
                                />
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FinanceList;