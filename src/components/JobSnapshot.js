import React from 'react';
import styled from 'styled-components';
import A1 from './assets/job-logo.svg';
import Fade from 'react-reveal/Fade';

import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const SnapshotCard = ({ ...props }) => (
  <Snapshot>
      <Fade duration={1200}>
        <SnapshotCardContainer>
          <Title>
            <div>
              <p>Info</p>
            </div>
            <div>
              <img src={A1} />
            </div>
          </Title>
          <Description>
            <h4>Type</h4>
            <p>Full-time</p>
            <h4>Location</h4>
            <p>Remote</p>
            <h4>Role</h4>
            <p>{props.role}</p>
            <a href={props.link} target="_blank">Apply now</a>
          </Description>
        </SnapshotCardContainer>
      </Fade>
  </Snapshot>
);

const SnapshotCardContainer = styled.div`
  border: solid 1px #3a3a3a;
  max-width: 50%;
  margin: 0;
  width: 350px;
  min-width: auto;
  max-width: 100%;

  ${medium('min-width: 24%; margin: 0 15px;')};
`;
  const Snapshot = styled.div`
    position: inherit;
    top: 0;
    transition: all 2s ease-in-out;
    right: 0;
    ${medium('position: sticky; top: 50px;')};
  `;

const Title = styled.div`
  border-bottom: solid 1px #3a3a3a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  div {
    padding: 0 30px;
  }
  p {
    margin: 0;
    font-family: 'FontRegular';
    line-height: 3.42rem;
    font-size: 1.71rem;
  }
`;

const Description = styled.div`
  padding: 30px;
  font-family: 'FontRegular';
  p {
    line-height: 2.64rem;
    font-size: 1.57rem;
    margin-bottom: 30px;
  }
  h4 {
    line-height: 1;
    font-size: 1rem;
    letter-spacing: 2.6px;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.5;
    text-transform: uppercase
  }
  a {
    border: solid 1px #FF7671;
    font-size: 1rem;
    text-align: center;
    letter-spacing: 2.6px;
    text-transform: uppercase;
    width: 100%;
    display: inherit;
    padding: 15px;
    cursor: pointer;
    color: white!important;
    text-decoration: none!important;
  }
  a:hover {
    background: #FF7671;
  }
`;
export default SnapshotCard;
