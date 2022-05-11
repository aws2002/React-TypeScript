import {Personprops} from "./Person.types"
export default function Person(props: Personprops) {
  return (
    <>
      <h1>
        <em>
          {props.name.first} {props.name.last}
        </em>
      </h1>
    </>
  );
}
