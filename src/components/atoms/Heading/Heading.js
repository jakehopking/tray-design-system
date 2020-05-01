import React from "react";
import PropTypes from "prop-types";
import styled, {css} from "styled-components";
import {palette} from "styled-theme";
import {FONT} from "../../../themes/themeVariables";

// Based on level size prop, calculate size accordingly
// Note. This is very basic, would like to create an option here to choose scaling method (golden ratio, fibonacci etc)
export const fontSize = ({level}) => `${0.75 + 1 * (1 / level)}rem`;

const styles = css`
  font-family: ${FONT.primary};
  font-weight: 600;
  font-size: ${fontSize};
  margin: 0;
  margin-top: ${(props) => (props.collapse ? "0" : "0.85em")};
  margin-bottom: ${(props) => (props.collapse ? "0" : "0.57em")};
  color: ${palette({grayscale: 0}, 1)};
`;

export const StyledHeading = styled(
  ({level, children, collapse, reverse, palette, theme, ...props}) =>
    // Generate appropriate <h..></h..> tag from level prop
    React.createElement(`h${level}`, props, children)
)`
  ${styles}
`;

StyledHeading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
};

StyledHeading.defaultProps = {
  level: 1,
  palette: "grayscale",
};

const Heading = ({...props}) => {
  return <StyledHeading {...props} />;
};

export default Heading;
