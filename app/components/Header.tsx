import Link from 'next/link';

const Header = () => {
    return (
        <div className="header" style={{ textAlign: 'center' }}>
            <Link href="/">Home</Link>
        </div>
    );
};

export default Header;
