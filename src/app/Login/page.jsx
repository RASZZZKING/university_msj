
import ContentLog from "@/components/Content/ContentLog";
import NavbarWelcome from "@/components/utils/NavbarWelcome";

const Page = () => {
  return (
    <div className="min-h-svh max-h-svh bg-color-primary">
      <NavbarWelcome />
      <ContentLog />
    </div>
  );
};

export default Page;


