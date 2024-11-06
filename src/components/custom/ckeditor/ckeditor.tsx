import React, { useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
  Heading,
  FontColor
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';
import styled from 'styled-components';

interface CKEditorWrapperProps {
  getRichTextData?: (data: string) => void,
  value?: string
}

export default function CKEditorWrapper({ getRichTextData, value }: CKEditorWrapperProps) {
  const editorRef = useRef<any>(null);

  const handleChange = (info: any, data: any) => {
    getRichTextData && getRichTextData(data.data.get());
  }

  useEffect(() => {
    if (editorRef.current && value !== undefined) {
      const editorInstance = editorRef.current.editor;
      if (editorInstance.getData() !== value) {
        editorInstance.setData(value);
      }
    }
  }, [value]);

  return (
    <CKEditorWrapperContainer>
      <p>Ergebnisse des Audits</p>
      <CKEditor
        editor={ClassicEditor}
        config={{
          plugins: [
            Bold, Essentials, Italic, Mention, Paragraph, Undo, Heading, FontColor
          ],
          toolbar: {
            items: ['undo', 'redo', '|', 'heading', 'bold', 'italic', 'fontColor'],
          },
          heading: {
            options: [
              { model: 'paragraph', title: 'Paragraph', class: '.paragraph' },
              { model: 'heading1', view: 'h1', title: 'Heading 1', class: '.heading1' },
              { model: 'heading2', view: 'h2', title: 'Heading 2', class: '.heading2' }
            ]
          },
          fontColor: {
            colorPicker: {
              format: 'hex'
            }
          },
          mention: {
            // Mention configuration
          }
        } as any}
        onReady={(editor) => {
          editorRef.current = { editor };
          editor.setData(value || '');
        }}
        onBlur={(info, data) => handleChange(info, data)}
      />
    </CKEditorWrapperContainer>
  );
}

const CKEditorWrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .ck-editor {
    border: 1px solid black;
  }
  .ck-editor__editable_inline {
    min-height: 400px;
  }
`;
