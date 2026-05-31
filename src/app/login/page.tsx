import GoogleLoginButton from "@/app/components/GoogleLoginButton";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f5] text-[#17201a]">
      <section className="mx-auto grid min-h-screen w-full max-w-6xl grid-cols-1 lg:grid-cols-[1fr_430px]">
        <div className="flex flex-col justify-between px-6 py-8 sm:px-10 lg:px-12">
          <Link
            href="/"
            className="w-fit text-xl font-semibold tracking-[0.02em] text-[#17201a]"
          >
            baroread
          </Link>

          <div className="max-w-2xl py-16 lg:py-20">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#2e6b57]">
              바로 읽는 기록
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-[#17201a] sm:text-5xl">
              필요한 글을 빠르게 모으고, 다시 읽기 쉽게 정리하세요.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#536158] sm:text-lg">
              저장한 자료와 메모를 한곳에서 관리하고, 읽을 흐름을 끊지 않도록
              바로 이어서 확인할 수 있습니다.
            </p>
          </div>

          <div className="grid max-w-xl grid-cols-3 gap-4 border-t border-[#dfe6dd] pt-6 text-sm text-[#536158]">
            <div>
              <strong className="block text-2xl font-semibold text-[#17201a]">
                3초
              </strong>
              저장 완료
            </div>
            <div>
              <strong className="block text-2xl font-semibold text-[#17201a]">
                태그
              </strong>
              자동 정리
            </div>
            <div>
              <strong className="block text-2xl font-semibold text-[#17201a]">
                메모
              </strong>
              함께 보관
            </div>
          </div>
        </div>

        <div className="flex items-center px-6 pb-10 sm:px-10 lg:px-0 lg:py-12">
          <div className="w-full rounded-lg border border-[#dfe6dd] bg-white p-6 shadow-[0_20px_70px_rgba(23,32,26,0.12)] sm:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#17201a]">로그인</h2>
              <p className="mt-2 text-sm leading-6 text-[#647168]">
                Google 계정으로 로그인하고 읽기 목록으로 이동합니다.
              </p>
            </div>

            <GoogleLoginButton />
          </div>
        </div>
      </section>
    </main>
  );
}
