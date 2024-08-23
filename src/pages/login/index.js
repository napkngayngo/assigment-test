import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
const Login = () => {
  return (
    <div className=" pt-[7vh]">
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-white ">
        <div className="w-full max-w-md p-8 space-y-6">
          <h2 className="text-[46px] font-bold text-center text-[#0565bb]">
            Welcome!
          </h2>
          <hr className="my-2 bg-black h-[2px] border-0" />
          <form className="space-y-4">
            <input
              type="email"
              placeholder="아이디 (이메일)"
              className="w-full px-4 py-2 border focus:outline-none"
            />
            <input
              type="password"
              placeholder="비밀번호"
              className="w-full px-4 py-2 border focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-2 text-white bg-[#0565bb] hover:bg-blue-700"
            >
              로그인하기
            </button>
          </form>
          <div className="flex items-center font-semibold justify-center pt-8">
            <span>SNS 계정으로 로그인</span>
          </div>
          <div className="flex justify-between space-x-4 pt-4">
            <button>
              <Image
                src="/images/naver-icon.jpg"
                alt=""
                width={50}
                height={50}
              />
            </button>
            <button>
              <Image
                src="/images/kakao-icon.jpg"
                alt=""
                width={50}
                height={50}
              />
            </button>
            <button>
              <Image
                src="/images/facebook-icon.jpg"
                alt=""
                width={50}
                height={50}
              />
            </button>
            <button>
              <Image
                src="/images/google-icon.jpg"
                alt=""
                width={50}
                height={50}
              />
            </button>
          </div>

          <button className="text-center font-bold w-full py-2 border border-solid border-black hover:bg-black hover:text-white">
            <a href="../register">계정이 없으신가요? 간편가입하기</a>
          </button>
          <div className="flex justify-between text-center p-6">
            <div>
              <a href="#" className="text-blue-600 hover:underline">
                아이디(이메일)찾기
              </a>
            </div>
            <div>
              <a href="#" className="text-blue-600 hover:underline">
                비밀번호 찾기
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
