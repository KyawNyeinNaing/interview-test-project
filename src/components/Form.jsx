
import styled from 'styled-components'
import colors from './Color'

const fontWeight = {
  xxl: 900,
  cu_w: 700,
  xl: 600,
  lg: 500,
  md: 400,
  sm: 300,
  xs: 100
}

const fontSize = {
  xxl: 31.25,
  xl: 24,
  lg: 20,
  md: 16,
  sm: 14,
  xs: 12
}

const InputGeneral = {
  border: '1px solid',
  borderRadius: '10px',
  padding: '7px 15px',
  transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out',
  checkLabel: {
    'position': 'relative',
    'padding-left': '20px',
    'margin-bottom': 0,
    'width': 'auto',
    'text-align': 'left',
    'cursor': 'pointer',
    'user-select': 'none'
  }
}

const InputGroup = styled.div`
  position: relative;
  &.custom-check {
    display: flex;
    align-items: center;
    input {
      opacity: 0;
      position: absolute;

      &[type='checkbox'] {
        &:checked {
          +label {
            &:before {
              background-color: var(--background-white);
            }
            &:after {
              opacity: 1;
            }
          }
        }

        &:not(:checked) {
          +label {
            &:before {
              background-color: ${colors.white};
            }
            &:after {
              opacity: 0;
            }
          }
        }
      }
    }

    label {
      ${InputGeneral.checkLabel}
      height: 24px;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        margin: auto;
        left: 0;
        border: 1px solid ${colors.primary};
        background: var(--background-white);
        border-radius: .15rem;
        width: 22px;
        height: 22px;
      }

      &:after {
        content: '';
        position: absolute;
        top: -3px;
        bottom: 0;
        margin: auto;
        left: 8px;
        width: 5px;
        height: 13px;
        border: 1px solid var(--background-green);
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
      }
    }
  }
`

const Input = styled.input`
  display: block;
  width: 100%;
  height: 35px;
  padding: ${InputGeneral.padding};
  font-size: ${fontSize.md}px;
  font-weight: ${fontWeight.md};
  line-height: 1.5;
  color: ${colors.inputColor};
  background-color: ${colors.white};
  background-clip: padding-box;
  border: ${InputGeneral.border} #cccccc;
  border-radius: ${InputGeneral.borderRadius};
  transition: ${InputGeneral.transition};
  outline: 0;
`

const Label = styled.label`
  max-width: 100%;
  color: ${colors.label};
  font-size: ${fontSize.md}px;
  font-weight: ${fontWeight.xl};
  white-space: wrap;
  overflow: hidden;
  margin-bottom: 5px;
`

export { InputGroup, Input, Label }
