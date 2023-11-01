import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { logout } from '../store/authSlice';
import { useRouter } from 'next/navigation';

const Header = () => {
    const dispatch = useDispatch<AppDispatch>();
    const authLogin = useSelector((state: RootState) => state.auth);
    const router = useRouter();

    const handleLogout = () => {
        dispatch(logout());
        router.push('/login');
    };
    return (
        <div className="header" style={{ textAlign: 'center' }}>
            <Link href="/">Home</Link>
            {authLogin ? <button onClick={handleLogout}>Logout</button> : null}
        </div>
    );
};

export default Header;
