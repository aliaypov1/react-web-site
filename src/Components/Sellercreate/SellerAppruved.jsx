
import CreateCourse from './CreateCourse';
const SellerAppruved = ({open,close}) => {
  if(!open) return null
   return(
    <>
  <CreateCourse close={close} />
  </>
   )
  };
export default SellerAppruved;