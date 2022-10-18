import styled from 'styled-components';
export const EditorContainer = styled.div`
  width: 80%;
  max-width: 320px;
  height: calc(100% + 3px);

  .ql-toolbar {
    .ql-formats {
      svg {
        width: 1.1rem;
        height: 1.1rem;
      }
    }
  }

  .ql-container {
    .ql-editor {
      font-size: 0.9rem;
      padding-bottom: 7px;
      p {
        font-size: 0.9rem;

        padding-bottom: 0;
        margin-top: -6px;
        margin-left: -9px;
        width: 100% !important;
      }
    }

    .ql-editor::before {
      font-size: 0.9rem;
    }
  }
`;
