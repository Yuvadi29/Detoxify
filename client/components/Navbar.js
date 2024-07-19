import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">Detoxify</div>
                <div>
                    <Link href="/">
                        <p className="text-gray-300 hover:text-white mx-2">Home</p>
                    </Link>
                    <Link href="/select-topic">
                        <p className="text-gray-300 hover:text-white mx-2">Select Topics</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
