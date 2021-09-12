import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';

const Formr = styled.form`
  display: flex;
  background: #495057;
`;

const Insert = styled.input`
  flex: 1;
  line-height: 1.5;
  color: white;
  outline: none;
  border: none;
  font-size: 1.125rem;
  background: none;
  &::placeholder {
    color: #dee2e6;
  }
`;

const Btn = styled.button`
  background: #868e96;
  outline: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    background: #adb5bd;
  }
`;

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value);
      console.log(value);
    },
    [value],
  );

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <Formr onSubmit={onSubmit}>
      <Insert
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      ></Insert>
      <Btn type="submit">
        <MdAdd />
      </Btn>
    </Formr>
  );
};

export default TodoInsert;
