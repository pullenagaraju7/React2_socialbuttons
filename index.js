const Button = (props) => {
  const { name, className } = props;
  return <button className={className}>{name}</button>;
};

const element = (
  <div className="container">
    <h1 className="title">Social Buttons</h1>
    <div className="card">
      <Button name="Like" className="b1" />
      <Button name="comment" className="b2" />
      <Button name="share" className="b3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
