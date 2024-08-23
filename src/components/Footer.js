import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-white">
      <hr />
      <div className="flex flex-col md:flex-row justify-between p-4">
        <div>
          <span className="font-bold">what happened</span>
          <div className="flex flex-col pt-3 text-xs text-xs text-gray-400">
            <span>[공지] 개인 정보 처리 방침 변경 사전 안내</span>
            <span>[공지] 29CM 강남 스토어 영업 종료</span>
            <span> [공지] 개인 정보 처리 방침 변경 사전 안내</span>
            <span> [공지] iOS 10 이하 버전 지원 중단 안내 </span>
            <span>[공지] 개인 정보 처리 방침 변경 사전 안내</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div>
            <span className="font-bold">about us</span>
            <div className="flex flex-col pt-3 text-xs text-xs text-gray-400">
              <span>회사 소개</span>
              <span>인재 채용</span>
              <span> 상시 할인 혜택</span>
            </div>
          </div>
          <div>
            <span className="font-bold">my oder</span>
            <div className="flex flex-col pt-3 text-xs text-xs text-gray-400">
              <span>내 주문</span>
              <span>주문 배송</span>
              <span>취소 / 교환 / 반품 내역</span>
              <span>상품 리뷰 내역</span>
              <span>증빙 서류 발급</span>
            </div>
          </div>
          <div>
            <span className="font-bold">my account</span>
            <div className="flex flex-col pt-3 text-xs text-xs text-gray-400">
              <span>회원 정보 수정</span>
              <span>회원 등급</span>
              <span> 마일리지 현황</span>
              <span>쿠폰</span>
            </div>
          </div>
          <div>
            <span className="font-bold">help</span>
            <div className="flex flex-col pt-3 text-xs text-xs text-gray-400">
              <span>1 : 1 상담 내역</span>
              <span>상품 Q & A 내역</span>
              <span> 공지 사항</span>
              <span>자주하는 질문</span>
              <span>고객의 소리</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row justify-between p-4">
        <div className="flex-1">
          <span className="text-xs text-gray-400">
            © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
            사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr{" "}
            <br />
            서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
            이용약관 l 개인정보처리방침
          </span>
        </div>
        <div className="flex flex-row gap-4">
          <button>
            <Image src="/images/naver-icon.jpg" width={15} height={15} alt="" />
          </button>
          <button>
            <Image
              src="/images/facebook-icon.jpg"
              width={15}
              height={15}
              alt=""
            />
          </button>
          <button>
            <Image
              src="/images/snsicon-03@2x.png"
              width={15}
              height={15}
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
