import React, { useEffect, useState } from "react";
import Header from "./Components/header";
import { ChildContainer, Container, Btn } from "./styledComponents";
import Cardcontainer from "./Components/Cardcontainer";

// const defaultList: listType[] = [
//   { title: "todo1", id: "1", is_active: false },
//   { title: "todo2", id: "2", is_active: true },
//   { title: "todo3", id: "3", is_active: false },
// ];

type listType = {
  title: string;
  id: string;
  is_active: boolean;
};

function sendToLocalStorage(List: listType[]) {
  const jsonTodoList = JSON.stringify(List);
  localStorage.setItem("todoListDataType", jsonTodoList);
}

function getTodosfromLocalStorage(): listType[] | any {
  let stringTodoList: string | null = localStorage.getItem("todoListDataType");
  if (stringTodoList !== null) {
    let localTodoList: listType[] = JSON.parse(stringTodoList);
    return localTodoList;
  } else {
    return stringTodoList;
  }
}

function App(): JSX.Element {
  const [list, setList] = useState<listType[]>([]);

  useEffect(() => {
    let localList: listType[] = getTodosfromLocalStorage();

    const fetching = async () => {
      const response = await fetch(
        "https://6325a6b74cd1a2834c41e69e.mockapi.io/todo-list/todos"
      );
      const Data: listType[] = await response.json();
      let newData = [...Data];
      setList(newData);
      sendToLocalStorage(Data);
    };

    if (localList === null) {
      fetching();
    } else {
      let newlist = [...localList];
      setList(newlist);
    }
  }, []);

  const handleChanges = (list: listType[]) => {
    let newlist: listType[] = list;
    setList([...newlist]);
  };

  const handleSave = (event: React.MouseEvent<HTMLElement>) => {
    sendToLocalStorage(list);
  };

  return (
    <Container>
      <ChildContainer>
        <Header list={list} onChangelist={handleChanges} />
        <Cardcontainer list={list} onChangelist={handleChanges}></Cardcontainer>
        <Btn onClick={handleSave}>Save</Btn>
      </ChildContainer>
    </Container>
  );
}

export default App;
