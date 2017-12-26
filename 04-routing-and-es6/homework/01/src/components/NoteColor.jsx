import React from 'react';
import PropTypes from 'prop-types';
import './NoteColor.less';

class NoteColor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            COLORS: [
                '#FFEB3B',
                '#9C27B0',
                '#F44336',
                '#2196F3',
                '#9E9E9E',
                '#607D8B',
                '#4CAF50',
                '#00BCD4'
            ],
            currentColor: this.props.defaultColor
        };

        this.handleColor = this.handleColor.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.defaultColor !== nextProps.defaultColor) {
            this.state.currentColor = nextProps.defaultColor;
        }
    }

    handleColor(event) {
        const checkedColor = event.target.value;
        this.setState({
            currentColor: checkedColor
        });

        this.props.onChangeColor(checkedColor);
    }

    render() {
        return (
            <div className="colors">
                {
                    this.state.COLORS.map((color) => {
                        const labelStyle = {
                            backgroundColor: color
                        };

                        return (
                            <div className="colors__item" key={color}>
                                <input
                                    className="colors__radio"
                                    id={`colors__label_${color}`}
                                    type="radio"
                                    value={color}
                                    checked={this.state.currentColor === color}
                                    onChange={this.handleColor}
                                    name="colors"
                                />
                                <label
                                    className="colors__label"
                                    htmlFor={`colors__label_${color}`}
                                    style={labelStyle}
                                />
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

NoteColor.propTypes = {
    defaultColor: PropTypes.string.isRequired,
    onChangeColor: PropTypes.func.isRequired
};

export default NoteColor;