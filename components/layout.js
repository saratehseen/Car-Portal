import Footer from "./footer";
import Header from "./header";

export default function Layout(props) {
  return (
    <div>
      <Header/>
      {props.children}
      <Footer/>
    </div>
  );
}