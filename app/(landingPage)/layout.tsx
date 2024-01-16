import Header from "./_components/header";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-20 max-w-screen-2xl mx-auto min-w-[300px]">{children}</main>
    </>
  );
}
