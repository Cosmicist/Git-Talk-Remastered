import React from 'react';
import PropTypes from 'prop-types';

export default class Bordered extends React.PureComponent {
  getStyles() {
    const {size, color} = this.props;
    return {
      textShadow: `
        ${size}px ${size}px ${color},
        -${size}px -${size}px ${color},
        -${size}px ${size}px ${color},
        ${size}px -${size}px ${color}
      `
    };
  }

  render() {
    return (<div style={this.getStyles()}>
      {this.props.children}
    </div>)
  }
}

Bordered.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Bordered.defaultProps = {
  size: 5,
  color: 'white',
};