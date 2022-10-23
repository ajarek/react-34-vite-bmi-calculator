import './Header.css'
type Props = {
  title: string,
  children: JSX.Element
};
const Header = ({title, children}:Props) => {
  
  return (
    <div className='header'>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default Header
