import styled, { css } from 'styled-components'

const media = {
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576
}

const percent = (val) => Number(val / 12) * 100

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
  ${({ fluid }) => fluid && css`
    max-width: unset;
  `}
`

const Row = styled.div`
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
  flex-wrap: wrap;
`

const Col = styled.div`
  width: 100%;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;

  &.pad0 {
    padding: 0;
  }

  &.pad-l0 {
    padding-left: 0;
  }

  &.pad-r0 {
    padding-reft: 0;
  }

  ${({ space }) => space && css`
    width: ${percent(space)}%;
  `}
  ${({ sm }) => sm && css`
    @media screen and (min-width: ${media.sm}px) {
      width: ${percent(sm)}%;
    }
  `}
  ${({ md }) => md && css`
    @media screen and (min-width: ${media.md}px) {
      width: ${percent(md)}%;
    }
  `}
  ${({ lg }) => lg && css`
    @media screen and (min-width: ${media.lg}px) {
      width: ${percent(lg)}%;
    }
  `}
  ${({ xl }) => xl && css`
    @media screen and (min-width: ${media.xl}px) {
      width: ${percent(xl)}%;
    }
  `}
  ${({ offset }) => offset && css`
    margin-left: ${percent(offset)}%;
  `}
  ${({ offset_sm }) => offset_sm && css`
    @media screen and (min-width: ${media.sm}px) {
      margin-left: ${percent(offset_sm)}%;
    }
  `}
  ${({ offset_md }) => offset_md && css`
    @media screen and (min-width: ${media.md}px) {
      margin-left: ${percent(offset_md)}%;
    }
  `}
  ${({ offset_lg }) => offset_lg && css`
    @media screen and (min-width: ${media.lg}px) {
      margin-left: ${percent(offset_lg)}%;
    }
  `}
`

export {
  Container,
  Row,
  Col
}
