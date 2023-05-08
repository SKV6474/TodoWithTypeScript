import Card from "./card";
import { Tododiv } from "../styledComponents";

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

type list = {
  list: listType[];
};

type props = {
  list: listType[];
  onChangelist: any;
};

const Cardcontainer = (props: props) => {
  const handleChanges = (list: list) => {
    props.onChangelist(list);
  };

  const newlist: any = props.list.map((ele: listObject) => (
    <Card
      key={ele.id}
      object={ele}
      list={props.list}
      onChange={handleChanges}
    />
  ));

  return <Tododiv>{newlist}</Tododiv>;
};

export default Cardcontainer;
