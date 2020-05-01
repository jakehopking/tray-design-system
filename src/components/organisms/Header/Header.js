import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../../atoms/Button/Button";
import Heading from "../../atoms/Heading/Heading";
import {SPACING} from "../../../themes/themeVariables";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${SPACING.default} ${SPACING.X3};
  border-bottom: 2px solid #e7e7eb;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`;

const Header = ({header: {title, button}}) => {
  return (
    <Wrapper>
      <Heading level={2} collapse>
        {title}
      </Heading>
      <Button id={button.id} onButtonClick={button.onButtonClick}>
        {button.title}
      </Button>
    </Wrapper>
  );
};

Header.propTypes = {
  heading: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.any,
  }),
  button: PropTypes.shape({
    id: PropTypes.any,
    title: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired,
  }),
};

export default Header;
