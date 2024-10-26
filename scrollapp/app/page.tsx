"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Modal } from "@/components/ui/Modal";
import gsap from "gsap";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const id1 = useRef<HTMLDivElement>(null);
  const id4 = useRef<HTMLDivElement>(null);

  const id2 = useRef<HTMLDivElement>(null);
  const id3 = useRef<HTMLDivElement>(null);

  const [pageLoaded, setPageLoaded] = useState(false);

  const textRef = useRef<HTMLParagraphElement>(null);

  const animate = () => {
    if (containerRef.current) {
      const tl = gsap.timeline({
        defaults: {
          repeat: 0,
          ease: "power3.inOut",
          duration: 2,
          repeatDelay: 1,
        },
      });

      tl.to(containerRef.current, {
        rotateZ: 360,

        // speed: 2,
        // duration: 4,
        ease: "power2.inOut",
      })

        .to(id1.current, {
          scale: 1.4,
          // duration: 4,
          x: "-10vw",
        })
        .to(
          id4.current,
          {
            x: "10vw",
          },
          "<"
        )
        .to(
          id2.current,
          {
            scale: 1.4,
            // duration: 4,
            y: "-10vw",
          },
          "<"
        )
        .to(
          id3.current,
          {
            y: "10vw",
          },
          "<"
        )

        .to([id1.current, id4.current, id2.current, id3.current], {
          scale: 1,
          duration: 1,
          height: "200px",
          width: "200px",
          x: 0,
          y: 0,
        })
        .to(textRef.current, {
          css: {
            visibility: "flex",
          },
        });
    }
  };

  useEffect(() => {
    console.log("Page started Loading, state", pageLoaded);
    animate();
  }, []);

  //Handle Modal

  const handleModal = () => {
    setIsVisible(true);
  };

  const handleModalClose = () => {
    setIsVisible(false);
  };

  return (
    <section className="flex flex-col h-screen w-screen overflow-hidden  text-white items-center justify-center">
      <div className="flex items-center justify-center h-screen w-screen">
        <div
          ref={containerRef}
          className="grid grid-cols-2 gap-0 justify-center"
        >
          <div
            ref={id1}
            onClick={handleModal}
            id="1"
            className="h-80 w-80 bg-sky-400 grid grid-cols-3"
          ></div>
          <div ref={id2} id="2" className="h-80 w-80 bg-sky-900">
            2
          </div>
          <div ref={id3} id="3" className="h-80 w-80 bg-sky-200">
            3
          </div>
          <div
            ref={id4}
            id="4"
            className="h-80 w-80  grid grid-cols-3 bg-sky-500 items-center justify-center"
          ></div>
        </div>
        <p className=" text-black text-5xl hidden">Text company</p>
      </div>
      {/* {isVisible && (
        <div
          onClick={handleModalClose}
          className="absolute flex items-center justify-center h-screen w-screen bg-black bg-opacity-35"
        ></div>
      )} */}

      <Modal onClick={handleModalClose} isVisible={isVisible} id="modal">
        <div className="h-[500px] w-[500px] gap-10 bg-white flex flex-col items-center justify-center text-black">
          <p>Hello</p>
          <div className="flex gap-5">
            <button className="bg-red-500 h-10 w-48">close</button>
            <button className="bg-red-500 h-10 w-48" onClick={animate}>
              confirm
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
