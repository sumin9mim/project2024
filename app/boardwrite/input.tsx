import styled from 'styled-components';

interface IInputDeafultProps {
  register?: any;
  type?: any;
  placeholder?: string;
  defaultValue?: any;
  value?: any;
  readOnly?: boolean;
  name?: string;
}
const Inputt = styled.input`
  width: 100%;
  height: 45px;
  padding: 10px;
  border: 1px solid gray;
`;
export default function Input(props: IInputDeafultProps) {
  return (
    <Inputt
      {...props.register}
      type={props.type}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      value={props.value}
      readOnly={props.readOnly}
      name={props.name}
    />
  );
}
