import styled from 'styled-components'
import colors from './Color'

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  min-height: 50px;
  padding: 0 20px;
  display: inline-block;
  border: 2px solid transparent;
  border-radius: .4rem;
  text-align: center;
  transition: box-shadow .15s ease;
  outline: 0;
  color: var(--text-color-2);
  font-size: 16px;
  color: var(--text-color-1);
  margin-bottom: 0;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
  
  &.btn {
    color: var(--text-color-2);
    margin-bottom: 15px;
    &.btn-login {
      background: ${colors.success};
    }
  
    &.btn-fb-login {
      background: ${colors.secondary};
    }
    &.btn-gm-login {
      background: ${colors.danger};
    }
  }

`
export { Button }