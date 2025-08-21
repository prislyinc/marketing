import Navbar from "@/components/common/navbar";
import CTA from "@/components/common/cta";
import Footer from "@/components/common/footer";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-full grow relative">
            <div className="px-4 sm:px-6 lg:px-8">
                <Navbar />
                {children}
                <CTA />
                <Footer />
            </div>
        </main>
    );
};