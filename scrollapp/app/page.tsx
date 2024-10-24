"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const id1 = useRef<HTMLDivElement>(null);
  const id4 = useRef<HTMLDivElement>(null);

  const id2 = useRef<HTMLDivElement>(null);
  const id3 = useRef<HTMLDivElement>(null);

  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
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
        .to(textRef, {
          css: {
            visibility: "flex",
          },
        });
    }
  }, []);
  return (
    <section className="flex flex-col h-screen w-screen bg-white text-white items-center justify-center">
      <div ref={containerRef} className="grid grid-cols-2 gap-0 justify-center">
        <div ref={id1} id="1" className="h-80 w-80 bg-sky-400 grid grid-cols-3">
          {/* <div ref={id3} id="1" className="h-10 w-10 bg-sky-600">
            1
          </div>
          <div id="1" className="h-10 w-10 bg-sky-400">
            2
          </div>
          <div id="1" className="h-10 w-10 bg-sky-200">
            3
          </div>
          <div id="1" className="h-10 w-10 bg-sky-900">
            4
          </div>
          <div id="1" className="h-10 w-10 bg-sky-600">
            5
          </div>
          <div id="1" className="h-10 w-10 bg-sky-600">
            6
          </div>
          <div id="1" className="h-10 w-10 bg-sky-600">
            6
          </div>
          <div id="1" className="h-10 w-10 bg-sky-600">
            6
          </div>
          <div id="1" className="h-10 w-10 bg-sky-600">
            6
          </div> */}
        </div>
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
        >
          {/* <div ref={id3} id="1" className="h-10 w-10 bg-sky-600">
            1
          </div>
          <div id="1" className="h-10 w-10 bg-sky-400">
            2
          </div>
          <div id="1" className="h-10 w-10 bg-sky-200">
            3
          </div>
          <div id="1" className="h-10 w-10 bg-sky-900">
            4
          </div>
          <div id="1" className="h-10 w-10 bg-sky-600">
            5
          </div>
          <div id="1" className="h-10 w-10 bg-sky-600">
            6
          </div>
          <div id="1" className="h-10 w-10 bg-sky-600">
            6
          </div>
          <div id="1" className="h-10 w-10 bg-sky-600">
            6
          </div>
          <div id="1" className="h-10 w-10 bg-sky-600">
            6
          </div> */}
        </div>
      </div>
      <p className=" text-black text-5xl hidden">Text company</p>
    </section>
  );
}
