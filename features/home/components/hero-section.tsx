import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import TypeIntro from './type-intro';

export default function HeroSection() {
  let delay = 0;

  // 每次调用，增加延时
  const getDelay = () => (delay += 200);
  return (
    <div className="container flex flex-col justify-center gap-4 max-w-screen-md 2xl:max-w-7xl">
      <p
        className="text-2xl md:text-5xl tracking-widest animate-fade-up animate-ease-in-out"
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        您好，我是
      </p>
      <strong
        className={cn(
          `text-5xl md:text-8xl tracking-widest font-black  bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500`,
          'animate-fade-up animate-ease-in-out'
        )}
        style={{
          WebkitTextFillColor: 'transparent',
          animationDelay: `${getDelay()}ms`,
        }}
      >
        YoonaSkye
      </strong>
      <div
        className={cn('animate-fade-up animate-ease-in-out')}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        <TypeIntro />
      </div>
      <p
        className={cn(
          'text-2xl md:text-5xl tracking-widest',
          'animate-fade-up animate-ease-in-out'
        )}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        喜欢
        <span className={`font-semibold text-[#00d8ff]`}>React</span>、
        <span className={`font-semibold text-[#007acc]`}>TypeScript</span>和
        <span className={`font-semibold text-[#00b4e0]`}>Next</span>
        <span className="ml-4">\owo/ ~</span>
      </p>
      <p
        className={cn(
          'text-base md:text-2xl text-muted-foreground tracking-widest',
          'animate-fade-up animate-ease-in-out'
        )}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        我在这个网站记录我的成长，努力 💪 成为一个更好的程序员。
      </p>
      <div
        className={cn('flex space-x-4', 'animate-fade-up animate-ease-in-out')}
        style={{
          animationDelay: `${getDelay()}ms`,
        }}
      >
        <Link
          href="/blog"
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          我的博客
        </Link>
        <Link
          href="/about"
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          关于我
        </Link>
      </div>
    </div>
  );
}
