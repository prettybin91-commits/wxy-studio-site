---
name: wxy-conversion-design
description: "This skill should be used when the user explicitly says 'WXY style', 'WXY design', '/wxy-conversion-design', or directly asks to use/apply the WXY design system. NEVER trigger automatically for generic UI or design tasks."
version: 2.0.0
allowed-tools: [Read, Write, Edit, Glob, Grep]
---

# WXY Kinetic Atelier
WXY의 화면은 장식물이 아니라 움직이는 진단서다. 모든 섹션은 문제(W), 선택(X), 결과(Y) 중 하나의 역할을 맡는다. 검정과 아이보리의 교차는 논리 장면 전환이며, 청록은 구매 결정을 움직이는 단 한 번의 개입이다.

## 원칙
1. **문제부터 보여준다.** 해결책 전에 방문자가 자기 상황을 발견하게 한다.
2. **한 화면에는 한 변수만 둔다.** 경쟁하는 CTA나 강조색을 만들지 않는다.
3. **타입이 이미지를 대신한다.** 대형 한글 산세리프와 한 덩어리의 표현형 서체가 주인공이다.
4. **증거는 반복으로 만든다.** 경력, 작업물, 후기는 일정한 레일과 숫자로 보여준다.
5. **움직임은 상태를 설명한다.** 기능 UI는 150–220ms, 내러티브는 600–900ms를 사용한다.
6. **모바일에서 논리가 먼저다.** 효과 없이도 DOM 순서로 설득이 완성되어야 한다.

## 조합 규칙
| 계층 | 표현 |
|---|---|
| 1 | 38–84px 한글 Display, 흰색/검정 최고 대비 |
| 2 | 11px 모노 섹션 좌표와 단계 번호 |
| 3 | 16–18px 본문, 최대 폭 680px |
| 4 | 1px 선과 배경 면 변화 |

- 글꼴 역할은 한글 산세리프, 한 덩어리의 표현형 서체, 영문 모노로 제한한다.
- 섹션 여백은 모바일 96px, 데스크톱 140px.
- Signal Cyan은 CTA, 핵심 단어, 활성 탭 중 하나에만 쓴다.
- 카드보다 선형 목록을 먼저 고려한다. 카드 반경은 8px 이하, 그림자는 없다.
- 눈을 가늘게 떴을 때 큰 카피 → 활성 선택 → CTA 순서로 보여야 한다.

## 금지
- No 장식용 네온 그라디언트와 빛 리본.
- No 둥근 직사각형 안에 모든 콘텐츠 넣기.
- No 카드 반경 8px 초과.
- No 의미 없는 3D 구·유리 오브젝트.
- No 한 섹션의 CTA 두 개 이상.
- No `transition: all`.
- No 300ms를 넘는 기능 UI 전환.
- No hover만으로 접근 가능한 정보.
- No 감소 모션 대체 상태가 없는 자동 이동.
- No 저대비 회색 본문.

## 구현
토큰과 컴포넌트는 `design-model.yaml`과 `../wxy-studio/MASTER.md`를 단일 기준으로 사용한다. 새 화면은 먼저 W/X/Y 역할을 표시한 뒤 375/768/1024/1440px에서 확인한다.
