function Item(props) {
  return (
    <div>
      <img alt={props.title} src={props.image} />
    </div>
  );
}

export default Item;
