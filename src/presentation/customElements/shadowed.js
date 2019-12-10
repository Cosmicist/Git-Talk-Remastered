import React from 'react';
import PropTypes from 'prop-types';

export default class Shadowed extends React.PureComponent {
  getStyles() {
    const {size, color} = this.props;
    return {
      textShadow: `${size}px ${size}px ${color}`
    };
  }

  render() {
    return (<div style={this.getStyles()}>
      {this.props.children}
    </div>)
  }
}

Shadowed.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Shadowed.defaultProps = {
  size: 5,
  color: 'rgba(0,0,0,0.75)',
};