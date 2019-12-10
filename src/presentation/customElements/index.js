import React from 'react';
import PropTypes from 'prop-types'
import * as S from 'spectacle';

import Shadowed from './shadowed';
import Bordered from './bordered';

const Img = props => <S.Image margin={'30px auto'} {...props} />;

const Strong = props => <S.S type={'bold'} textColor={'tertiary'} {...props} />;

class P extends React.PureComponent {
  render() {
    return <S.Text textSize={22} textColor={'secondary'} margin={'0 0 30px'} {...this.props} />
  }
}

export {
  P,
  Img,
  Strong,
  Shadowed,
  Bordered,
}