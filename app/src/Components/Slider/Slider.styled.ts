import styled, { css } from 'styled-components'
import { SlideProps, SliderProps } from './types'

const animTime = '.5s'

export const Slider = styled.section<SliderProps>`
  display: flex;
  gap: ${({ spacing }) => spacing || '.625rem;' };
  max-width: ${({ width }) => width || '100%' };
  width: 100%;
  padding-top: 2rem;
  overflow: hidden;
`

export const AnimationWrap = styled.div<SlideProps>`
  display: flex;
  width: 100%;
  transform: translateX(
    ${({slideSize, slideSelected}) => slideSelected &&
      css`calc(-${slideSize} * ${slideSelected - 1})` || 0
    }
  );
  transition-duration: ${ animTime };
`
/**
 * Calc result = size + all css attrs with size
 * margin, border .etc
 * @TODO calc should be moved to a function
 * */
export const Item = styled.div<SlideProps>`
  transform: rotate3d(0, 1, 0.1, ${
    ({slideId, slideSelected}) => slideSelected && (
      (slideId === (slideSelected - 1) && '50deg') ||
        (slideId === (slideSelected + 1) && '-50deg')
    ) || 0
  }) scale(
    ${({slideId, slideSelected}) =>
      (slideId === (slideSelected - 1)) ||
      (slideId === (slideSelected + 1)) ?
        .95 : 1
    }
  ) translate(${({slideId, slideSelected}) =>
      slideSelected && (
        (slideId === (slideSelected - 1) && '2.5rem') || 
        (slideId === (slideSelected + 1) && '-2.5rem')
      ) || 0
  }, ${({slideId, slideSelected}) => 
      (slideId === (slideSelected - 1)) ||
      (slideId === (slideSelected + 1)) ? 
        '-1rem' : '0'
  });
  flex: 0 0 ${({slideSize}) => slideSize ? css`calc(${slideSize})` : css`calc(6.25rem)`};
  height: ${({slideSize}) => slideSize ? css`calc(${slideSize})` : css`calc(6.25rem)`};
  transition-duration: ${ animTime };
  background: white;
  overflow-x: auto;
`