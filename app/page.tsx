import Link from 'next/link';

export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center  ">
                <Link href="/todo">Welcome to todo lỏ Nextjs</Link>
                <Link href="/products">Products</Link>
            </main>
        </>
    );
}
