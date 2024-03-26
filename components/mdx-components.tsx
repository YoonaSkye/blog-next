import * as runtime from 'react/jsx-runtime';
import Image from 'next/image';
import Callout from './callout';

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
};

interface MDXProps {
  code: string;
}

export default function MDXContent({ code }: MDXProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
