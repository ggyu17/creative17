# ykwimk archive

Apple Macintosh 40th anniversary 레퍼런스 무드를 바탕으로 만든 개인 아카이브형 홈페이지입니다.

## 기술 스택

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4

## 실행 방법 (개발자가 아니어도 가능)

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 열면 확인할 수 있습니다.

## 수정 포인트

- 카드 데이터는 `app/data/categories.ts`에서 관리합니다.
- 카드 UI와 인터랙션은 `app/components/archive-cards.tsx`에서 관리합니다.
- 히어로 문구는 `app/page.tsx`에서 관리합니다.
