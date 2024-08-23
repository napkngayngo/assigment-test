import Header from "@/components/Header";
import styles from "./checkboxCustom.module.css";
import { useState } from "react";
import Footer from "@/components/Footer";

const Register = () => {
  const [checked, setChecked] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    address2: "",
    contact: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleReset = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!formData.email) {
      formIsValid = false;
      errors["email"] = "Email is required";
    }

    if (!formData.password) {
      formIsValid = false;
      errors["password"] = "Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      formIsValid = false;
      errors["confirmPassword"] = "Passwords do not match";
    }

    if (!formData.address) {
      formIsValid = false;
      errors["address"] = "Address is required";
    }

    if (!formData.address2) {
      formIsValid = false;
      errors["address2"] = "Address is required";
    }

    if (!formData.contact) {
      formIsValid = false;
      errors["contact"] = "Contact is required";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data is valid:", formData);

      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        address2: "",
        contact: "",
      });
    } else {
      console.log("Form data is invalid");
    }
  };
  return (
    <div className=" pt-[80px]">
      <Header />
      <div className="flex justify-center items-center pt-[100px] bg-white ">
        <div className="w-full max-w-md p-8 space-y-6">
          <h2 className="text-[45px] font-bold text-center text-[#0565bb]">
            JOIN US
          </h2>
          <hr className="my-2 bg-black h-[2px] border-0" />
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="pb-4">
              <div className="pb-2">
                <span className="font-semibold">아이디(이메일) *</span>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com)"
                  value={formData.email}
                  onChange={handleReset}
                  className="w-full px-4 py-2 border focus:outline-none"
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email}</span>
                )}
              </div>
            </div>
            <div className="pb-4">
              <div className="pb-2">
                <span className="font-semibold">비밀번호 *</span>
              </div>
              <div>
                <input
                  type="text"
                  name="password"
                  placeholder="영문, 숫자, 특수문자를 포함한 8~12자리"
                  value={formData.password}
                  onChange={handleReset}
                  className="w-full px-4 py-2 border focus:outline-none"
                />
                {errors.password && (
                  <span className="text-red-600">{errors.password}</span>
                )}
              </div>
            </div>
            <div className="pb-4">
              <div className="pb-2">
                <span className="font-semibold">비밀번호 확인 *</span>
              </div>
              <div>
                <input
                  type="text"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleReset}
                  className="w-full px-4 py-2 border focus:outline-none"
                />
                {errors.confirmPassword && (
                  <span className="text-red-600">{errors.confirmPassword}</span>
                )}
              </div>
            </div>
            <div className="flex flex-col pb-4">
              <div className="pb-2">
                <span className="font-semibold">주소</span>
              </div>
              <div className="pb-4">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleReset}
                  className="w-full px-4 py-2 border focus:outline-none"
                />
                {errors.address && (
                  <span className="text-red-600">{errors.address}</span>
                )}
              </div>
              <div className="pb-4">
                <input
                  type="text"
                  name="address2"
                  placeholder="추가 주소"
                  value={formData.address2}
                  onChange={handleReset}
                  className="w-full px-4 py-2 border focus:outline-none"
                />
                {errors.address2 && (
                  <span className="text-red-600">{errors.address2}</span>
                )}
              </div>
            </div>
            <div className="pb-4">
              <div className="pb-2">
                <span className="font-semibold">연락처</span>
              </div>
              <div>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleReset}
                  className="w-full px-4 py-2 border focus:outline-none"
                />
                {errors.contact && (
                  <span className="text-red-600">{errors.contact}</span>
                )}
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
