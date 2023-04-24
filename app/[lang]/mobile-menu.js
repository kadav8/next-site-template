import '../../styles/css/mobile-menu.css'

export default function MobileMenu(props) {
  return (
    <nav className={`mobile-menu ${props.show ? 'open' : ''}`}>
      {props.children}
    </nav>
  );
}
