import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const ContactInfo = () => {
  return (
    <>
      <div className="p-10 mx-4">
        <h1 className="text-5xl text-white font-bold">Contact Directory</h1>
        <div className="mt-4 mx-3">
          <ul className="flex gap-2 items-center">
            <MdEmail className="text-lg text-white" />

            <a href="mailto:info@kpcybers.com" target="_blank">
              <li className="text-white text-lg">info@kpcybers.com</li>
            </a>
          </ul>
        </div>
        <div className="mt-1 mx-3">
          <ul className="flex gap-2 items-center">
            <RiWhatsappFill className="text-lg text-white" />
            <li className="text-white text-lg">+92 333 5806268</li>
          </ul>
        </div>
        <div className="mt-1 mx-3">
          <ul className="flex gap-1 items-center">
            <FaFacebook className="text-lg text-white" />
            <BsTwitterX className="text-lg text-white" />
            <AiFillInstagram className="text-lg text-white" />
            <li className="text-white text-lg"> - KPCybers</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
