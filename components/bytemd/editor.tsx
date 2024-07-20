'use client';

import { Editor, type EditorProps } from '@bytemd/react';

type BytemdEditorProps = {
  body?: string;
  setContent: (body: string) => void;
  editorProps?: Partial<EditorProps>;
};
export const BytemdEditor = ({
  body,
  setContent,
  editorProps,
}: BytemdEditorProps) => {
  return (
    <Editor
      value={body ?? ''}
      placeholder="请输入内容"
      onChange={(v) => setContent(v)}
    />
  );
};
