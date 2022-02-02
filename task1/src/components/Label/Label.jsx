import '../App.css';

export default function Label(props) {
  return <label htmlFor="name">{props.children}</label>
}