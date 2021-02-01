import logo from "../assets/covid-img-small.png";
export default function Logo() {
  return (
    <div className="logo">
      <span>Covid</span>
      <img src={logo} alt="logo" />
      <span>Romania</span>
    </div>
  );
}
