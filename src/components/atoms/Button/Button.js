import React from "react";
import PropTypes from "prop-types";
import styled, {css} from "styled-components";
import {Link} from "react-router-dom";
import {palette} from "styled-theme";
import {FONT, UI} from "../../../themes/themeVariables";

// Depending on height prop, adjust font size accordlingly
export const fontSize = ({height}) => `${height / 40}rem`;

// If prop transparent set transparent
// If !transparent && !disabled set palette(1)
// If !transparent && disabled set palette(3)
export const backgroundColor = ({transparent, disabled}) =>
  transparent ? "transparent" : palette(disabled ? 3 : 1);

// If prop transparent && !disabled set palette(1)
// If transparent && disabled set palette(3)
// Else set palette("greyscale")
export const foregroundColor = ({transparent, disabled}) =>
  transparent ? palette(disabled ? 3 : 1) : palette("grayscale", 0, true);

export const hoverBackgroundColor = ({disabled, transparent}) =>
  !disabled && !transparent && palette(0);

export const hoverForegroundColor = ({disabled, transparent}) =>
  !disabled && transparent && palette(0);

// Base button styles
const styles = css`
  display: inline-flex;
  font-family: ${FONT.primary};
  align-items: center;
  white-space: nowrap;
  font-weight: 300;
  font-size: ${fontSize};
  border: 1px solid ${(props) => (props.transparent ? "currentcolor" : "transparent")};
  justify-content: center;
  text-decoration: none;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  appearance: none;
  padding: 0.6em 1em;
  border-radius: ${UI.borderRadius};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  transition: ${UI.transition.default};
  background-color: ${backgroundColor};
  color: ${foregroundColor};
  height: 2.6em;
  &:hover,
  &:focus,
  &:active {
    background-color: ${hoverBackgroundColor};
    color: ${hoverForegroundColor};
  }

  &:focus {
    outline: none;
  }
`;

// Wrap router <Link /> in <StyledLink />
export const StyledLink = styled(
  ({disabled, transparent, reverse, palette, height, theme, ...props}) => (
    <Link {...props} />
  )
)`
  ${styles}
`;

// <Anchor />
export const Anchor = styled.a`
  ${styles}
`;

// <StyledButon />
export const StyledButton = styled.button`
  ${styles}
`;

// Depending on propType return appropriate button type.
const Button = ({id, type, onButtonClick, ...props}) => {
  const {to, href} = props;
  if (to) {
    // Router, no onClick action required
    return <StyledLink {...props} />;
  }
  if (href) {
    // Anchor, no onClick action required
    return <Anchor {...props} />;
  }
  // Default
  return <StyledButton {...props} type={type} onClick={() => onButtonClick(id)} />;
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  palette: PropTypes.string,
  transparent: PropTypes.bool,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
};

Button.defaultProps = {
  palette: "primary",
  type: "button",
  height: 40,
};

export default Button;
