import Header from './Header';
import Seo from './Seo';


const Layout = ({ seo, children, className }) => {
  return (
    <>
      <Seo seo={seo} />
      <div className={className}>
        <Header />
        {children}
      </div>
    </>
  )
}


export default Layout;
