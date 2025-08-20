export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-full grow relative">
            {children}
        </main>
    );
};