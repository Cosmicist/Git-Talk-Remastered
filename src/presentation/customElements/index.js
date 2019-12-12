import React from 'react';
import PropTypes from 'prop-types'
import * as S from 'spectacle';

import Shadowed from './shadowed';
import Bordered from './bordered';

class Img extends React.PureComponent {
  render() {
    return <S.Image margin={'30px auto'} {...this.props} />
  }
}

const Strong = props => <S.S type={'bold'} textColor={'tertiary'} {...props} />;

class P extends React.PureComponent {
  render() {
    return <S.Text textSize={22} lineHeight={1.5} textColor={'secondary'} margin={'30px 0'} {...this.props} />
  }
}

export {
  P,
  Img,
  Strong,
  Shadowed,
  Bordered,
}