import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9fbfe;
  height: 100vh;
`;

export const ChildContainer = styled.div`
  padding: 50px 30px;
  max-width: 600px;
  margin: 0 auto;
  font-family: Roboto;
`;

export const HeaderCompo = styled.div<{ children: string }>`
  text-align: center;
  font-size: 48px;
  font-weight: 600;
`;

export const Subheaader1 = styled.div`
  font-size: 36px;
  margin: 30px 0;
`;

export const Inputtag = styled.input`
  border: 1px solid #e4e7eb;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  padding: 0 20px;
  outline: none;
  width: 93%;
`;

export const MyTask = styled.div`
  font-size: 36px;
  margin: 30px 0;
`;

export const Btn = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  border: 0;
  border-radius: 5px;
  background-color: #4c63b6;
  color: white;
  margin-top: 20px;
  cursor: pointer;
`;

// see from here

export const Tododiv = styled.div`
  margin-top: 20px;
`;

export const TodoCard = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

export const Checkbox = styled.input.attrs({
  type: "checkbox",
})`
  width: 20px;
  height: 20px;
`;

export const LabelDelteContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  border-left: 5px solid #096f92;
  background-color: #e6f6ff;
  border-radius: 5px;
  margin-left: 10px;
`;

export const ImgDiv = styled.div`
  cursor: pointer;
`;

export const Label = styled.label<{ isActive: boolean }>`
  text-decoration: ${(props) =>
    props.isActive === true ? "line-through" : "none"};
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
