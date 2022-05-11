type GreetProps = {
  name: string;
  age: number;
  messageCount?: number;
};
export default function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;
  return (
    <>
      <h1>Hi {props.name}</h1>
      <h2>age: {props.age}</h2>
      <h3>messageCount: {messageCount}</h3>
    </>
  );
}
