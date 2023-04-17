export default function MobileMenu(props) {
  if (!props.show) {
    return null
  }
  return (
    <nav className={`fixed z-50 top-[40px] left-0 right-0 bottom-0 flex flex-col mobileMenu ${props.bg}`}>
      {props.children}
    </nav>
  );
}
