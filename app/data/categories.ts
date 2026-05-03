export type Category = {
  id: string;
  title: string;
  label: string;
  description: string[];
  works: string[];
  symbol: "spiral" | "face" | "bomb" | "horse" | "pointer";
};

export const categories: Category[] = [
  {
    id: "customer-language",
    title: "고객의 말",
    label: "Customer Language",
    description: [
      "고객의 후기는 칭찬보다 방향에 가깝습니다.",
      "반복되는 표현 안에서 제품이 더 잘 말해야 할 지점을 찾습니다.",
    ],
    works: [
      "리뷰 댓글 자동응답 프롬프트",
      "트쌤일지 후기 언어 분석",
      "필라노트 CTA 개선",
      "상세페이지 고객 언어 반영",
    ],
    symbol: "spiral",
  },
  {
    id: "bx-writing",
    title: "제품의 말투",
    label: "BX Writing",
    description: [
      "제품이 친절하게 쓰이려면, 기능보다 먼저 사용자의 상황을 이해해야 합니다.",
      "문장 하나가 사용 흐름을 바꾼다고 믿습니다.",
    ],
    works: [
      "비즈노션 모듈 카피",
      "노션 템플릿 사용 TIP",
      "고객 가이드 문구",
      "제품 설명 구조화",
    ],
    symbol: "face",
  },
  {
    id: "seo-content",
    title: "검색어의 구조",
    label: "SEO Content",
    description: [
      "검색어는 단순한 키워드가 아니라 사용자가 막힌 순간의 언어입니다.",
      "불안을 공감하고, 원인을 설명하고, 다음 행동으로 이어지게 만듭니다.",
    ],
    works: [
      "노션 사무실 SEO 콘텐츠",
      "검색 의도 기반 콘텐츠 구조",
      "공감 → 정보 → 해결 → 제안 흐름",
      "상황형 키워드 콘텐츠",
    ],
    symbol: "bomb",
  },
  {
    id: "community",
    title: "작은 판",
    label: "Masil / Community",
    description: [
      "실패와 회복, 커리어의 애매한 감정들을 혼자 두지 않기 위해 작은 판을 만들었습니다.",
      "콘텐츠가 모임이 되고, 모임이 다시 기록이 되는 구조를 실험합니다.",
    ],
    works: ["마실 커뮤니티", "마케터 세미나", "인터뷰 프로젝트", "스레드 콘텐츠 실험"],
    symbol: "horse",
  },
  {
    id: "personal-archive",
    title: "생각의 로그",
    label: "Personal Archive",
    description: [
      "효율만으로 설명되지 않는 것들을 기록합니다.",
      "일, 사람, 감정, 선택의 기준을 오래 들여다보고 나만의 언어로 남깁니다.",
    ],
    works: ["스레드 기록", "일의 맥락 메모", "실패와 회복의 글", "효율 바깥의 기록"],
    symbol: "pointer",
  },
];
