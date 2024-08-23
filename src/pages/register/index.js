import Header from "@/components/Header";
import styles from "./checkboxCustom.module.css";
import { useState } from "react";
import Footer from "@/components/Footer";

const Register = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className=" pt-[7vh]">
      <Header />
      <div className="flex justify-center items-center pt-[100px] bg-white ">
        <div className="w-full max-w-md p-8 space-y-6">
          <h2 className="text-[45px] font-bold text-center text-[#0565bb]">
            JOIN US
          </h2>
          <hr className="my-2 bg-black h-[2px] border-0" />
          <form className="space-y-4">
            <div className="pb-4">
              <div className="pb-2">
                <span className="font-semibold">아이디(이메일) *</span>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="example@email.com)"
                  className="w-full px-4 py-2 border focus:outline-none"
                />
              </div>
            </div>
            <div className="pb-4">
              <div className="pb-2">
                <span className="font-semibold">비밀번호 *</span>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="영문, 숫자, 특수문자를 포함한 8~12자리"
                  className="w-full px-4 py-2 border focus:outline-none"
                />
              </div>
            </div>
            <div className="pb-4">
              <div className="pb-2">
                <span className="font-semibold">비밀번호 확인 *</span>
              </div>
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-2 border focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col pb-4">
              <div className="pb-2">
                <span className="font-semibold">주소</span>
              </div>
              <div className="pb-4">
                <input
                  type="text"
                  className="w-full px-4 py-2 border focus:outline-none"
                />
              </div>
              <div className="pb-4">
                <input
                  type="text"
                  placeholder="추가 주소"
                  className="w-full px-4 py-2 border focus:outline-none"
                />
              </div>
            </div>
            <div className="pb-4">
              <div className="pb-2">
                <span className="font-semibold">연락처</span>
              </div>
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-2 border focus:outline-none"
                />
              </div>
            </div>

            <hr className="my-2 bg-black h-[2px] border-0" />

            <div className="flex flex-col space-y-2">
              <label
                className={`flex items-center space-x-[1.6vw] space-y-[1vh] ${styles.container}`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={handleChange}
                  className=""
                />
                <span className={` ${styles.checkmark}`}></span>
                <span className="text-sm">
                  <a href="#" className="text-blue-600">
                    이용약관
                  </a>{" "}
                  및{" "}
                  <a href="#" className="text-blue-600">
                    개인정보 처리 방침
                  </a>
                  에 동의합니다. (필수)
                </span>
              </label>
              <label
                className={`flex items-center space-x-[8vw] space-y-[1vh] ${styles.container}`}
              >
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
                <span className="text-sm">
                  광고 및 메일 수신에 동의합니다. (선택)
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-2 text-white bg-[#0565bb] hover:bg-blue-700"
            >
              가입하기
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
