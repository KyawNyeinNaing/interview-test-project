import styled from 'styled-components'
import colors from './Color'

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, .37);
  padding-bottom: 15px;

  li {
    position: relative;
    width: 100%;
    text-align: center;
    padding-bottom: 5px;

    &.active {
      position: relative;
      font-weight: 600;
      &:after {
        content: '';
        width: 100%;
        height: 4px;
        position: absolute;
        left: 0;
        bottom: -6px;
        background: ${colors.danger};
        border-radius: var(--radius);
      }
    }
  }
`

const BulletList = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 25px;

    &.list-circle {
      svg {
        width: 10px;
        margin-right: 10px;
        &.danger {
          color: ${colors.danger};
        }
  
        &.success {
          color: ${colors.success};
        }
      }
    }
  }
`

export { List, BulletList }