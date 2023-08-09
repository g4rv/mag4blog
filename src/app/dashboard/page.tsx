import Link from "next/link";

const Dashboard = () => {
    return (
        <main className="h-full">
            <Link href='/dashboard/login'>log</Link>
            <br />
            <Link href='/dashboard/register'>reg</Link>
        </main>
    );
};
export default Dashboard;