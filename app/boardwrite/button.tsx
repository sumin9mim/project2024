import styled from 'styled-components';

interface ILightPinkStyledProps {
  isActive: boolean;
}
interface IButtonLightpinkProps {
  type?: any;
  title: string;
  isActive?: boolean;
  isEdit?: boolean;
}
const LightPinkStyled = styled.button`
  align-items: center;
  border: none;
  width: auto;
  height: auto;
  font-size: 16px;
  padding: 10px 20px;

  border-radius: 5px;

  :hover {
    cursor: pointer;
  }
`;

export default function Button(props: IButtonLightpinkProps) {
  return (
    <LightPinkStyled isActive={props.isEdit ? true : props.isActive}>
      {props.title}
    </LightPinkStyled>
  );
}
