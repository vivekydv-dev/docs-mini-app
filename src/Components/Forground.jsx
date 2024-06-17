import { useRef } from "react";
import Card from "./Card";

export default function Forground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "  Lorem ipsum dolor sit amet.",
      fileSize: ".4mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-green-600" },
    },
    {
      desc: "  Lorem ipsum dolor sit amet.",
      fileSize: ".4mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "bg-blue-600" },
    },
    {
      desc: "  Lorem ipsum dolor sit amet.",
      fileSize: ".4mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "bg-purple-600",
      },
    },
  ];
  return (
    <div>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
        {data.map((item, index) => (
          <Card key={index} data={item} reference={ref} />
        ))}
      </div>
    </div>
  );
}
