import { ArchiveCards } from '@/app/components/archive-cards';
import { categories } from '@/app/data/categories';

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1280px] px-5 pb-16 pt-14 md:px-10 md:pt-20">
      <section className="mx-auto max-w-3xl text-center">
        <p className="text-xs tracking-[0.18em] text-zinc-500">ykwimk archive</p>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
          오래 쓰이는 말과 구조를 만듭니다.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl whitespace-pre-line text-sm leading-relaxed text-zinc-600 md:text-base">
          고객의 말, 검색어, 후기, 일의 맥락을 읽고{`\n`}다시 꺼내 쓸 수 있는 콘텐츠와 문장으로 정리합니다.
        </p>
      </section>

      <ArchiveCards categories={categories} />
    </main>
  );
}
