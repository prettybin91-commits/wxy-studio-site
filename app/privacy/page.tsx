import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "개인정보처리방침 | WXY studio" };

export default function PrivacyPage(){
  return <main className="legalPage">
    <header className="legalHeader"><Link className="logo" href="/" aria-label="WXY studio 홈">WXY studio</Link><Link href="/">홈으로</Link></header>
    <article className="legalDocument">
      <p className="legalEyebrow">WXY STUDIO · POLICY</p>
      <h1>개인정보처리방침</h1>
      <p className="legalLead">WXY studio(이하 “스튜디오”)는 개인정보 보호법 등 관계 법령을 준수하며, 견적 및 상담 과정에서 제공받는 개인정보를 다음과 같이 처리합니다.</p>

      <section><h2>1. 처리하는 개인정보와 이용 목적</h2><div className="legalTable"><div><b>필수 항목</b><span>이름 또는 업체명, 연락처</span></div><div><b>선택 항목</b><span>예산 범위, 참고 레퍼런스 URL, 홈페이지 목적·제작 방식·페이지 수·기획 및 이미지 준비 상태 등 견적 선택 정보</span></div><div><b>이용 목적</b><span>예상 견적 산출, 상담 접수 및 회신, 프로젝트 검토와 진행 의사 확인</span></div></div><p>필수 항목에 동의하지 않을 수 있으나, 동의하지 않으면 견적 확인 및 상담 접수가 제한됩니다.</p></section>

      <section><h2>2. 개인정보의 처리 및 보유 기간</h2><p>개인정보는 견적 및 상담 목적이 달성된 날부터 3개월까지 보관한 뒤 지체 없이 파기합니다. 다만 계약이 체결된 경우에는 계약 이행과 분쟁 대응에 필요한 범위에서 관계 법령이 정한 기간 동안 보관할 수 있습니다.</p></section>

      <section><h2>3. 개인정보의 제3자 제공</h2><p>스튜디오는 정보주체의 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 다만 법령에 특별한 규정이 있거나 법적 의무를 이행하기 위해 필요한 경우는 예외로 합니다.</p></section>

      <section><h2>4. 개인정보 처리위탁 및 국외 이전</h2><div className="legalTable"><div><b>수탁자</b><span>Formspree, Inc.</span></div><div><b>이전 국가</b><span>미국</span></div><div><b>이전 항목</b><span>견적·상담 양식에 입력하거나 선택한 정보</span></div><div><b>이전 시점과 방법</b><span>견적 확인 버튼을 누를 때 암호화된 네트워크 통신으로 전송</span></div><div><b>이용 목적</b><span>양식 제출 처리, 제출 기록 보관 및 스튜디오 담당 이메일 알림</span></div><div><b>보유 기간</b><span>스튜디오의 처리 목적 달성 시까지. Formspree 내 제출 기록은 이용 요금제의 보관 정책에 따라 저장될 수 있으며, 스튜디오가 관리 화면에서 삭제할 수 있습니다.</span></div></div><p>Formspree를 통한 국외 이전에 동의하지 않으면 견적·상담 양식을 이용할 수 없습니다. 이 경우 서비스 이용을 중단하여 이전을 거부할 수 있습니다.</p></section>

      <section><h2>5. 개인정보의 파기</h2><p>보유 기간이 끝나거나 처리 목적이 달성된 개인정보는 복구 또는 재생되지 않도록 지체 없이 삭제합니다. 전자 파일은 복구가 어려운 방식으로 삭제하고, 출력물이 있는 경우 분쇄하거나 소각합니다.</p></section>

      <section><h2>6. 정보주체의 권리와 행사 방법</h2><p>정보주체는 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지 또는 동의 철회를 요청할 수 있습니다. 요청은 홈페이지의 견적·상담 접수 채널을 통해 할 수 있으며, 스튜디오는 본인 확인 후 관계 법령이 정한 절차에 따라 처리합니다.</p></section>

      <section><h2>7. 개인정보의 안전성 확보 조치</h2><p>스튜디오는 개인정보 접근 권한을 필요한 담당자로 제한하고, 전송 구간 암호화와 비밀번호 보호 등 개인정보의 분실·도난·유출·변조 또는 훼손을 막기 위한 합리적인 기술적·관리적 조치를 적용합니다.</p></section>

      <section><h2>8. 자동 수집 장치</h2><p>현재 스튜디오 홈페이지는 맞춤형 광고나 행동 추적을 위한 쿠키를 직접 운영하지 않습니다. 향후 분석 도구 등 자동 수집 장치를 도입할 경우 본 방침을 개정하여 목적과 거부 방법을 안내합니다.</p></section>

      <section><h2>9. 개인정보 보호책임자 및 문의</h2><p>개인정보 보호 관련 문의와 권리 행사는 WXY studio 개인정보 보호책임자에게 요청할 수 있습니다.</p><div className="legalTable"><div><b>개인정보 보호책임자</b><span>WXY studio 운영자(대표)</span></div><div><b>접수 방법</b><span>홈페이지 견적·상담 접수 채널</span></div></div></section>

      <section><h2>10. 방침의 변경</h2><p>본 방침은 2026년 8월 19일부터 시행합니다. 내용이 변경되는 경우 시행 전에 홈페이지를 통해 알립니다.</p></section>
    </article>
  </main>
}
