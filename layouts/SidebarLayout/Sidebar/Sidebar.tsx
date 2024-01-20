
import { GetServerSideProps } from 'next';
import SidebarMenu from './SidebarMenu/SidebarMenu';
import Header from '../Header/Header';
import Scrollbar from '@/components/scrollbar/Scrollbar';

const Sidebar = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
        <div className="wrapper">

            {/* TopBar */}
            <Header/>

            {/* Sidebar */}
            <SidebarMenu/>

            {/* Contenido de la pagin */}
            <div className='content-wrapper'>
                <div>{children}</div>
            </div>
            
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {


    return {
        props:{

        }
    }
}

export default Sidebar