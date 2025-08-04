/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 24,
    padding: 4,
    radius: 8,
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size]

  return (
      <StyledProgress
        id = 'progress'
        role = 'progressbar'
        aria-valuemin = '0'
        aria-valuemax = '100'
        aria-valuenow = { value }
        style={{
          '--padding': styles.padding + 'px',
          '--radius': styles.radius + 'px',
        }}
      >
        <BarWrapper>
          <Bar 
            style = {{ 
              '--width': value + '%',
              '--height': styles.height + 'px',
            }} 
          />
        </BarWrapper>  
      </StyledProgress>
  );
};

const StyledProgress = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
  padding: var(--padding);
`

const BarWrapper = styled.div `
  border-radius: 4px;

  /* To hide progress overflow from container */
  overflow: hidden;
`

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`

export default ProgressBar;
