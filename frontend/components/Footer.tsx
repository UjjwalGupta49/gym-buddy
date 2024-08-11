import React from "react";
import { Card, CardBody, Link, Avatar } from "@nextui-org/react";

const Footer: React.FC = () => {
  return (
    <div className="relative bg-softWhite py-8 px-4 md:py-16 md:px-12 lg:px-24 w-full">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-1/2 h-[50%] bg-gradient-to-t from-coralRed/30 via-coralRed/10 to-transparent"></div>
        {/* Right Bottom Gradient */}
        <div className="absolute bottom-0 right-0 w-1/2 h-[50%] bg-gradient-to-t from-coralRed/30 via-coralRed/10 to-transparent"></div>
      </div>

      <Card className="bg-transparent shadow-none">
        <CardBody className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <div>
              <p className="text-lg font-semibold text-midnightBlack">Made with ❤️ by</p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-col items-center">
              <Avatar src="https://www.ujjwal49.xyz/intro/profile_picture.svg" />
              <Link href="https://www.ujjwal49.xyz/" target="_blank" className="text-azureBlue font-semibold hover:text-coralRed">
                Ujjwal
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <Avatar src="/face/naval.svg" />
              <Link href="https://www.linkedin.com/in/navalbihani15/" className="text-azureBlue font-semibold hover:text-coralRed">
                Naval
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <Avatar src="/face/Adi.svg" />
              <Link href="https://www.linkedin.com/in/aditya-maurya-31457b281/" className="text-azureBlue font-semibold hover:text-coralRed">
                Aditya
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <Avatar src="/face/arjav.svg" />
              <Link href="https://www.linkedin.com/in/arjavjain014/" className="text-azureBlue font-semibold hover:text-coralRed">
                Arjav
              </Link>
            </div>
          </nav>

          <div className="text-center md:text-right">
            <p className="text-sm text-midnightBlack/70">© 2024 Gym Buddy. All rights reserved.</p>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/gym-buddy"
              className="text-sm text-royalBlue hover:text-coralRed"
            >
              Visit us on GitHub
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Footer;
