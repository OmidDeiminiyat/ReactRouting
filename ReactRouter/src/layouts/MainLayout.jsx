import { Outlet } from 'react-router-dom';
import  {Navbar}  from '../components/Navigation';

export function MainLayout() {
    return(
        <>
        <Navbar />
        <main>
            <Outlet />
        </main>

        </>
    );
}