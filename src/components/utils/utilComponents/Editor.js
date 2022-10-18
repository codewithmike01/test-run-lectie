import React from 'react';
import 'quill/dist/quill.snow.css';
import { useQuill } from 'react-quilljs';
import { EditorContainer } from './styles/Editor.styles';

const Editor = () => {
  const theme = 'snow';
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      ['link', 'image', 'video'],
    ],
  };
  const placeholder = 'Add description';

  const formats = ['bold', 'italic', 'underline', 'link', 'image', 'video'];

  const { quillRef } = useQuill({ theme, modules, formats, placeholder });

  return (
    <EditorContainer>
      <div ref={quillRef} />
    </EditorContainer>
  );
};

export default Editor;
