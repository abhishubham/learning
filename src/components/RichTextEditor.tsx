import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type RichTextEditorProps = {
  register: any;
};

export default function RichTextEditor({ register }: RichTextEditorProps) {
  const [content, setContent] = useState('');

  useEffect(() => {
    register('description', { required: true });
  }, [register]);

  const handleEditorChange = (value: string) => {
    setContent(value);
  };

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={handleEditorChange}
      />
    </div>
  );
}
