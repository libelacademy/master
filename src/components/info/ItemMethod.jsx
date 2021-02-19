import React from "react";
import styled from "styled-components";
import { anims, colors } from "../../utils/theme";

const Item = styled.div`
  & .item {
    display: flex;
    align-items: flex-start;
    padding: 1rem 1rem;
    margin-bottom: 1rem;
    ${anims.transition};
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background: ${colors.pDark};
      & .icon {
        transform: translateY(20%);
      }
    }
    & .icon {
      display: block;
      position: relative;
      width: 60px;
      height: auto;
      margin: 0 2rem 0 1rem;
      ${anims.transition};
    }
    &-info {
      &-title {
        font-weight: 700;
        color: white;
        font-size: 0.9em;
      }
      &-desc {
        font-weight: 300;
        font-size: 0.7em;
        color: white;
      }
    }
  }
`;

function ItemMethod({ title, desc, icon }) {
  return (
    <Item>
      <div className="item">
        <img src={icon} alt="" className="icon" />
        <div className="item-info">
          <span className="item-info-title">{title}</span>
          <br />
          <span className="item-info-desc">{desc}</span>
        </div>
      </div>
    </Item>
  );
}

export default ItemMethod;
