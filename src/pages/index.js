/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  const bestProducts = [
    {
      id: 1,
      imageSrc: "/images/best-image-01.jpg",
      iconSrc: "/images/producticon-01.png",
      title: "Happier Soap",
      description: "How to create mobile-optimized",
    },
    {
      id: 2,
      imageSrc: "/images/best-image-02.jpg",
      iconSrc: "/images/producticon-02.png",
      title: "Product Bag",
      description: "How to create mobile-optimized",
    },
    {
      id: 3,
      imageSrc: "/images/best-image-03.jpg",
      iconSrc: "/images/producticon-03.png",
      title: "Product Boxes",
      description: "How to create mobile-optimized",
    },
  ];

  const products = [
    {
      id: 1,
      imageSrc: "/images/img-01.png",
      title: "product01",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 2,
      imageSrc: "/images/img-02.png",
      title: "product02",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 3,
      imageSrc: "/images/img-03.png",
      title: "product03",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 4,
      imageSrc: "/images/img-04.png",
      title: "product04",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 5,
      imageSrc: "/images/img-05.png",
      title: "product05",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 6,
      imageSrc: "/images/img-06.png",
      title: "product06",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 7,
      imageSrc: "/images/img-07.png",
      title: "product07",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 8,
      imageSrc: "/images/img-08.png",
      title: "product08",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 9,
      imageSrc: "/images/img-09.png",
      title: "product09",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 10,
      imageSrc: "/images/img-10.png",
      title: "product10",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 11,
      imageSrc: "/images/img-11.png",
      title: "product11",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 12,
      imageSrc: "/images/img-12.png",
      title: "product12",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 13,
      imageSrc: "/images/img-13.png",
      title: "product13",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 14,
      imageSrc: "/images/img-14.png",
      title: "product14",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 15,
      imageSrc: "/images/img-15.png",
      title: "product15",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 16,
      imageSrc: "/images/img-16.png",
      title: "product16",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 17,
      imageSrc: "/images/img-17.png",
      title: "product17",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 18,
      imageSrc: "/images/img-18.png",
      title: "product18",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 19,
      imageSrc: "/images/img-19.png",
      title: "product19",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 20,
      imageSrc: "/images/img-20.png",
      title: "product20",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 21,
      imageSrc: "/images/img-21.png",
      title: "product21",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 22,
      imageSrc: "/images/img-22.png",
      title: "product22",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 23,
      imageSrc: "/images/img-23.png",
      title: "product23",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 24,
      imageSrc: "/images/img-24.png",
      title: "product24",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
    {
      id: 25,
      imageSrc: "/images/img-25.png",
      title: "product25",
      description: "[what happen] How to create",
      price: "2,500 won",
      interact: "256",
    },
  ];

  const brandIssue = [
    {
      id: 1,
      imageSrc: "/images/best-image-01.jpg",
      iconSrc: "/images/producticon-01.png",
      title: "issue1",
      description: "How to create mobile-optimized",
    },
    {
      id: 2,
      imageSrc: "/images/best-image-02.jpg",
      iconSrc: "/images/producticon-02.png",
      title: "issue2",
      description: "How to create mobile-optimized",
    },
    {
      id: 3,
      imageSrc: "/images/best-image-03.jpg",
      iconSrc: "/images/producticon-03.png",
      title: "issue3",
      description: "How to create mobile-optimized",
    },
    {
      id: 4,
      imageSrc: "/images/best-image-03.jpg",
      iconSrc: "/images/producticon-03.png",
      title: "issue3",
      description: "How to create mobile-optimized",
    },
  ];

  return (
    <main className="flex min-h-dvh flex-col items-center pt-[80px]">
      <Header />
      <div className="flex flex-col w-full">
        <div className="relative w-full h-[200px] md:h-[600px]">
          <Image src="/images/main-banner.jpg" alt="" fill={true} />
        </div>
        <div className="relative w-full h-[150px] md:h-[450px]">
          <Image src="/images/introduction-bg.webp" alt="" fill={true} />
          <div className="absolute inset-0 flex flex-col md:top-[8vh] md:left-[8vw] left-2 items-start text-wrap text-white">
            <div className="md:pb-3">
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold">
                WHAT HAPPENED!
              </h1>
            </div>
            <div className="md:w-[45vw]">
              <p className="md:mt-4 max-w-xs md:max-w-md">
                How to create mobile-optimized videos in minutes. Not a
                designer, every team makes a lot of videos Can be trimmed. Take
                the first step to your brand's success. How to create
                mobile-optimized videos in minutes.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col pb-5 bg-[#fccb05] w-full h-auto">
          <div className="top-[-8vh] md:top-[-25vh] justify-center items-center flex flex-col pt-[4vh]">
            <div>
              <h3 className="text-center text-xl sm:text-2xl lg:text-4xl font-bold text-[#f96400]">
                BEST PRODUCT
              </h3>
            </div>
            <div className="">
              <p className="md:mt-4 text-[#f96400] text-center">
                How to create mobile-optimized videos in minutes. Not a
                designer, every team makes a lot of videos Can be trimmed. Take
                the first
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center pt-[4vh]">
            {bestProducts.map((product) => (
              <div key={product.id} className="text-center">
                <div className="relative">
                  <Image
                    src={product.imageSrc}
                    alt={product.title}
                    className="w-full h-auto object-cover"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                  <div className="absolute top-[-2vh] left-[1vh]">
                    <Image
                      src={product.iconSrc}
                      alt={`Icon ${product.id}`}
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div className="relative bg-white w-full md:w-[15vw] top-[-3vh] md:top-[-3.5vh] md:left-[5vw] border border-solid border-black border-[2px] flex justify-between items-center">
                  <div className="text-wrap md:w-[9vw] text-start">
                    <p className="font-bold text-[14px] text-black pl-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="justify-center items-center">
                    <button className="bg-black text-sm text-white rounded-full font-bold m-2 p-2">
                      GO
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-white h-auto pb-[3vh]">
          <div className=" p-[4vw] grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-3 w-full">
            {products.map((product) => (
              <div key={product.id}>
                <div className="flex flex-col">
                  <div>
                    <Image
                      src={product.imageSrc}
                      alt={product.title}
                      className="w-full h-[300px] object-cover"
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <span className="font-bold pt-1 text-sm">
                    {product.description}
                  </span>
                  <div className="flex justify-between pt-2">
                    <span className="text-sm">{product.price}</span>
                    <div className="flex">
                      <Image
                        src="/images/heart.png"
                        alt={product.title}
                        className="w-full h-auto object-cover pr-2"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                      <span className="text-gray-600 text-sm">
                        {product.interact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full justify-center pt-[6vh]">
            <button className="border border-solid border-black border-[3px] p-2 font-bold hover:bg-black hover:text-white">
              SEE MORE
            </button>
          </div>
        </div>
        <div className="relative flex flex-col justify-center items-center bg-[url('/images/banner-1.jpg')] sm:max-h-dvh md:h-dvh bg-cover bg-center">
          <div className="flex flex-col pt-1 md:pt-[2vh]">
            <div>
              <h3 className="text-center text-xl sm:text-2xl lg:text-4xl font-bold text-[#fcd32a]">
                BRAND STORY
              </h3>
            </div>
            <div className=" md:w-[100%] pb-3">
              <p className="md:mt-4 text-[#fcd32a] max-w-xs md:max-w-md text-center hidden lg:block">
                모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요.
                디자이너가 아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의
                성공을 위한 첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에
                제작해보세요.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/window.png"
              className="w-full h-auto p-[5%] object-cover"
              width={830}
              height={200}
              alt=""
            />
            <div className="absolute inset-0 flex flex-col w-[40%] top-[20%] left-[54%] ">
              <h4 className="font-bold pb-[3vh] text-sm md:text-xl">
                What Happened’s Brand story
              </h4>
              <span className="hidden lg:block">
                청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
                풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
                살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다.
                내는 이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은
                끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고
                고행을 끝에 설산에서 황금시대를 이상을 운다.
              </span>
              <div className="pt-[2px]">
                <button className="font-bold border border-solid border-black border-[2px] p-1">
                  SEE MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-[#fccb05] pt-14 h-[1000px] w-full">
          <Image
            src="/images/news-object-03.png"
            sizes="100vw"
            width={0}
            height={0}
            alt=""
            className="absolute inset-0 h-[80px] w-[80px] p-3 left-[95vw] hidden md:block"
          />
          <Image
            src="/images/news-object-02.png"
            sizes="100vw"
            width={0}
            height={0}
            alt=""
            className="absolute inset-0 h-[80px] w-[80px] p-3 top-[8vh] left-[95vw] hidden md:block"
          />
          <Image
            src="/images/news-object-07.png"
            sizes="100vw"
            width={0}
            height={0}
            alt=""
            className="absolute inset-0 h-[150px] w-[150px] p-3 top-[68vh] left-[15vw] hidden md:block"
          />
          <Image
            src="/images/news-object-05.png"
            sizes="100vw"
            width={0}
            height={0}
            alt=""
            className="absolute inset-0 h-[140px] w-[140px] p-3 top-[68vh] left-[75vw] hidden md:block"
          />
          <Image
            src="/images/news-object-04.png"
            sizes="100vw"
            width={0}
            height={0}
            alt=""
            className="absolute inset-0 h-[100px] w-[130px] p-3 top-[26vh] left-[20vw] hidden md:block"
          />
          <div className="flex flex-col justify-center items-center w-full text-wrap pb-[50px]">
            <div>
              <h3 className="text-center text-xl sm:text-2xl lg:text-4xl font-bold text-black">
                Happened’s issue
              </h3>
            </div>
            <div>
              <p className="md:mt-4 text-black  text-center w-[80vw]">
                모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요.
                디자이너가 아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의
                성공을 위한 첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에
                제작해보세요.
              </p>
            </div>
            <div className="flex w-full justify-center pt-[6vh]">
              <button className="border border-solid border-black border-[3px] p-2 font-bold hover:bg-black hover:text-white">
                SEE MORE
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 h-[200px]">
            <div className="flex flex-col items-center justify-between bg-[#ff5500] p-[100px]">
              <span className="text-[24px] font-bold">WHPN ISSUE</span>
              <Image
                src="/images/news-img-01.png"
                sizes="100vw"
                width={0}
                height={0}
                alt=""
                className="h-[148px] w-[148px]"
              />
            </div>
            <div>
              <div className="border border-solid border-black border-[2px] flex justify-center text-white font-extrabold bg-black">
                <p>B BRAND</p>
              </div>
              <div>
                <Image
                  src="/images/news-img-03.png"
                  sizes="100vw"
                  width={0}
                  height={0}
                  alt=""
                  className="h-auto w-full"
                />
              </div>
            </div>
            <div>
              <div className="border border-solid border-black border-[2px] flex justify-center text-white font-extrabold bg-black">
                <p>C BRAND</p>
              </div>
              <div>
                <Image
                  src="/images/news-img-03.png"
                  sizes="100vw"
                  width={0}
                  height={0}
                  alt=""
                  className="h-auto w-full"
                />
              </div>
            </div>
            <div>
              <div className="border border-solid border-black border-[2px] flex justify-center text-white font-extrabold bg-[#ff5500]">
                <p>D BRAND</p>
              </div>
              <div>
                <Image
                  src="/images/news-img-04.png"
                  sizes="100vw"
                  width={0}
                  height={0}
                  alt=""
                  className="h-auto w-full"
                />
              </div>
            </div>
            <div>
              <div className="border border-solid border-black border-[2px] flex justify-center text-white font-extrabold bg-black">
                <p>E BRAND</p>
              </div>
              <div>
                <Image
                  src="/images/news-img-05.png"
                  sizes="100vw"
                  width={0}
                  height={0}
                  alt=""
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <Image
            src="/images/banner-4.jpg"
            className="w-full "
            alt=""
            sizes="100vw"
            width={0}
            height={0}
          />
          <div className="flex flex-col absolute inset-0 justify-center items-center w-full text-wrap top-[-250px] md:top-[-150vh]">
            <div>
              <h3 className="text-center text-xl sm:text-2xl lg:text-4xl font-bold text-black">
                WHAT HAPPENED
              </h3>
            </div>
            <div>
              <p className="md:mt-4 text-black hidden lg:block md:text-lg text-xs  text-center w-[80vw]">
                How to create mobile-optimized videos in minutes. Not a
                designer, every team makes a lot of videos Can be trimmed. Take
                the first
              </p>
            </div>
            <div className="flex w-full justify-center md:pt-[6vh]">
              <button className="border border-solid border-black border-[3px] p-2 font-bold hover:bg-black hover:text-white">
                SEE MORE
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
