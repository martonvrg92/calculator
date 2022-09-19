function Button({ name, handleClick, className }) {
  return <button
  onClick={() => handleClick(name)}
  className={className}
  >{name}</button>
};

export default Button;