import Container from "../container/Container";
import Logo from "../logo/Logo";
import FooterCols from "./footerCols/FooterCols";

const Footer = () => {
  return (
    <div className="bg-surface pt-8 border-t-2 border-border ">
      <Container>
        <Logo />

        <FooterCols />
        <hr className="border-border mt-8" />
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 mt-1">
              <span className="bg-red-600 w-3 h-3"></span>
              <span className="bg-yellow-400 w-3 h-3"></span>
              <span className="bg-blue-600 w-3 h-3"></span>
            </div>
            <p className="text-sm text-muted-foreground">
              Precision in every pixel
            </p>
          </div>
          <p className="text-muted-foreground max-[500px]:text-sm">
            All Rights Reserved ©2026 . Created By Ahmed Adel{" "}
          </p>
        </div>
      </Container>
    </div>
    // <div className=" pt-8  md:px-16 lg:px-20 xl:px-32 bg-surface">

    // </div>
  );
};

export default Footer;
