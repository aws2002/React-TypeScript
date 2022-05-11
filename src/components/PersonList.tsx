import {Name} from "./Person.types"
type PersonListProps = {
  names: Name[];
};
export default function PersonList({names}: PersonListProps) {
  return (
    <>
      <h1>
        {names.map((item,i) => (
          <div key={i}>
            <em>
              {item.first} {item.last}
            </em>{" "}
            <br />
          </div>
        ))}
      </h1>
    </>
  );
}
