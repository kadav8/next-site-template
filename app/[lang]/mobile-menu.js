import '../../styles/css/mobile-menu.css'

export default function MobileMenu(props) {
  return (
    <nav className={`mobile-menu ${props.show ? 'open' : ''}`} /* {`fixed z-50 top-[40px] left-0 right-0 bottom-0 flex flex-col mobileMenu ${props.bg}`} */>
      {props.children}
    </nav>
  );
}
