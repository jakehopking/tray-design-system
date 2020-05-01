import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {palette} from "styled-theme";
import {FONT, UI} from "../../../themes/themeVariables";

const StyledBadge = styled.span`
  font-family: ${FONT.primary};
  font-size: 0.75rem;
  line-height: 1.5em;
  padding: 0.2em 0.4em;
  color: ${palette("grayscale", 0, true)};
  background-color: ${palette(2)};
  border-radius: ${UI.borderRadius};
`;

StyledBadge.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  size: PropTypes.string,
};

StyledBadge.defaultProps = {
  palette: "primary",
};

const Badge = ({...props}) => {
  return <StyledBadge {...props} />;
};

export default Badge;
