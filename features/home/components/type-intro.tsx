'use client';

import { TypeAnimation } from 'react-type-animation';

export function TypeIntro() {
  return (
    <TypeAnimation
      className="text-2xl md:text-5xl tracking-widest"
      sequence={[
        500,
        '一名前端开发工程师 。',
        1000,
        'A Web <Developer /> .',
        1000,
      ]}
      speed={10}
      repeat={Infinity}
    />
  );
}
