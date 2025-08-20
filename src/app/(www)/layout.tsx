import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-full grow relative">
            <Navbar/>
            {children}
            <Footer/>
        </main>
    );
};