"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Event.css';

const PastEvents = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      let marqueeSpeed = 2;
      const animateMarquee = () => {
        marquee.scrollLeft += marqueeSpeed;
        if (marquee.scrollLeft >= marquee.scrollWidth - marquee.clientWidth) {
          marquee.scrollLeft = 0;
        }
      };
      const interval = setInterval(animateMarquee, 20);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section id="past-events" className="overflow-hidden">
      <div className="relative w-full h-[400px] bg-gray-200 flex items-center justify-start pl-10">
        <Image
          src="/images/addedImg/Event-page-banner.jpg"
          alt="Past Events Banner"
          layout="fill"
          objectFit="cover"
          priority
          className="absolute inset-0 w-full h-full"
        />
        <div className="relative z-10 text-left">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-5xl">
            NEWS
          </h1>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="container">
        <div className="w-10/12 mx-auto border-b">
          <div className="px-4">
            <div className="mb-9 pt-9">
              <h3 className="mb-3 text-2xl font-bold text-blue-900 dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                UPCOMING EVENTS
              </h3>
              <h3 className="mb-3 text-2xl font-bold text-Green dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                MEET US AT THESE UPCOMING EVENTS
              </h3>
              <div className="marquee-container" ref={marqueeRef}>
                <div className="marquee-content mt-4 relative mx-auto mb-12 max-w-[500px] text-center lg:m-0" data-wow-delay=".15s">
                  <Image
                    src="/images/addedImg/adipeclogo.png"
                    alt="Upcoming Event"
                    height={300}
                    width={320}
                    className="drop-shadow-three dark:hidden dark:drop-shadow-none object-contain"
                  />
                  <p className="mt-4 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    4-7 November 2024, Abu Dhabi, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-10/12 mx-auto flex flex-wrap items-center mt-12">
          <div className="w-full px-4 lg:w-1/2">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              loop={true}
              modules={[Autoplay, Pagination, Navigation]}  // Add modules here
              className="relative mx-auto mb-12 aspect-[25/20] max-w-[500px] text-center"
            >
              <SwiperSlide>
                <Image
                  src="/images/addedImg/event.jpeg"
                  alt="Past Event 1"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/addedImg/event1.jpg"
                  alt="Past Event 2"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/addedImg/event2.jpeg"
                  alt="Past Event 3"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/addedImg/event3.jpeg"
                  alt="Past Event 4"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/addedImg/event4.jpeg"
                  alt="Past Event 5"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/addedImg/event5.jpeg"
                  alt="Past Event 6"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/addedImg/event6.jpeg"
                  alt="Past Event 7"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/addedImg/event7.jpeg"
                  alt="Past Event 8"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/addedImg/event8.jpg"
                  alt="Past Event 9"
                  fill
                  className="drop-shadow-three object-contain"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-3 text-2xl font-bold text-blue-900 dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  PAST EVENTS
                </h3>
                <h3 className="mb-3 text-2xl font-bold text-Green dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  OUR GLOBAL PRESENCE
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We’ve had the opportunity to attend various conferences in the past:
                </p>
                <br />
                <ul className="list-disc pl-5 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  <li>Oil and Gas 2023 – Kuala Lumpur – September 2023</li>
                  <li>Gastech Event – Singapore – September 2023</li>
                  <li>GPA Midstream Convention – San Antonio, TX – September 2022</li>
                  <li>Gastech Exhibition & Conference – Milan, Italy – 5-8 September 2022</li>
                  <li>TradeWinds 2022 – Abu Dhabi, U.A.E. – March 2022</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
