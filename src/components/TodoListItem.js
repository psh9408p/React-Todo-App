import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import styled from 'styled-components';

const Tlim = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  &:nth-child(even) {
    background: #f8f9fa;
  }
`;

const Cbox = styled.div`
  display: flex;
  flex: 1;
  cursor: pointer;
  align-items: center;
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;

  text-decoration: ${(props) => (props.checked ? 'line-through' : 'none')};
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { text, checked, id } = todo;

  return (
    <Tlim>
      <Cbox checked={checked} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <Text checked={checked}>{text}</Text>
      </Cbox>
      <Remove onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </Remove>
    </Tlim>
  );
};

export default TodoListItem;
