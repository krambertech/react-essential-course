var React = require('react');

require('./NoteColor.css');

var NoteColor = React.createClass({
    getInitialState: function() {
        return {
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
    },

    componentWillReceiveProps: function(nextProps) {
        if(this.props.defaultColor !== nextProps.defaultColor) {
            this.state.currentColor = nextProps.defaultColor;
        }
    },

    handleColor: function(event) {
        var checkedColor = event.target.value;
        this.setState({
            currentColor: checkedColor
        });

        this.props.onChangeColor(checkedColor);
    },

    render: function() {
        var self = this;
        return (
            <div className="colors">
                {
                    this.state.COLORS.map(function(color) {
                        var labelStyle = {
                            backgroundColor: color
                        };

                        return (
                            <div className="colors__item" key={color}>
                                <input
                                    className="colors__radio"
                                    id={`colors__label_${color}`}
                                    type="radio"
                                    value={color}
                                    checked={self.state.currentColor === color}
                                    onChange={self.handleColor}
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
});

module.exports = NoteColor;