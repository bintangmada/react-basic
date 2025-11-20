function ChildComponent(props) {
  console.log("props di child : ", props);
  return (
    <>
      <br />
      <h1>Ini Child Component</h1>
      <h1>COUNT : {props.count}</h1>
    </>
  );
}

export default ChildComponent;
