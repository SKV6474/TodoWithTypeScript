import React, { useState } from "react";
import {
  TodoCard,
  Checkbox,
  LabelDelteContainer,
  ImgDiv,
  Label,
} from "../styledComponents";

type listObject = {
  title: string;
  id: string;
  is_active: boolean;
};

type listType = {
  title: string;
  id: string;
  is_active: boolean;
};

type props = {
  object: listObject;
  list: listType[];
  onChange: any;
};

const Card = (props: props) => {
  const { id, title, is_active } = props.object;

  const [check, setCheck] = useState(is_active);

  const handleCheck = () => {
    setCheck(!check);
    let index = props.list.findIndex((ele) => ele.id === id);
    props.list[index].is_active = !check;
    props.onChange(props.list);
  };

  const handleDeletEvent = () => {
    let index = props.list.findIndex((ele) => ele.id === id);
    props.list.splice(index, 1);
    props.onChange(props.list);
  };

  return (
    <TodoCard>
      <Checkbox checked={check} onClick={handleCheck} onChange={(e) => {}} />
      <LabelDelteContainer>
        <Label isActive={check}>{title}</Label>
        <ImgDiv onClick={handleDeletEvent}>
          <img
            src="https://i.ibb.co/H2sDsqX/icons8-trash-20.png"
            alt="icons8-trash-20"
          ></img>
        </ImgDiv>
      </LabelDelteContainer>
    </TodoCard>
  );
};

export default Card;
