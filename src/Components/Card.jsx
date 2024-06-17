/* eslint-disable react/prop-types */
import { FaFileLines } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="relative flex-shrink-0 w-56 h-64 rounded-[40px] bg-zinc-900/90 text-white py-6 px-4 overflow-hidden"
    >
      <FaFileLines />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-6 py-3 mb-2">
          <h5>{data.fileSize}</h5>
          <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose />
            ) : (
              <MdOutlineFileDownload size={".8em"} color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full p-4 ${data.tag.tagColor} flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}
