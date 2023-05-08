import {
  HeaderCompo,
  Subheaader1,
  Inputtag,
  MyTask,
  Btn,
} from "../styledComponents";

function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

type listType = {
  title: string;
  id: string;
  is_active: boolean;
};

type props = {
  list: listType[];
  onChangelist: any;
};

const Header = (props: props) => {
  const handleAdd = () => {
    let inputvalue: string = (
      document.getElementById("inputValue") as HTMLInputElement
    ).value;
    let object: listType = {
      title: inputvalue,
      id: random(11, 99).toString(),
      is_active: false,
    };
    props.list.push(object);
    props.onChangelist(props.list);
    (document.getElementById("inputValue") as HTMLInputElement).value = "";
  };

  return (
    <div>
      <HeaderCompo>Todos</HeaderCompo>
      <Subheaader1>
        <b>Create</b> Task
      </Subheaader1>
      <Inputtag
        id="inputValue"
        placeholder="Whats needs to be Done?"
      ></Inputtag>
      <Btn onClick={handleAdd}>Add</Btn>
      <MyTask>
        <b>My</b> Task
      </MyTask>
    </div>
  );
};

export default Header;
