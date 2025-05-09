
import { Outlet } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-[60vh]">
              <Loader2 className="h-10 w-10 animate-spin text-bike" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
