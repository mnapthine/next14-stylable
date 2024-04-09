"use client";
import React, { useState } from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import scope from "./ReactLiveScope";
import { st, classes } from "./reactLiveBlock.st.css";
import { Text } from "@actionishope/shelley/Text";

interface ReactLiveProps {
  twoColumn?: boolean;
  editable?: boolean;
  rawCode: string;
}

export function ReactLiveBlock({
  editable,
  rawCode,
  twoColumn,
  ...rest
}: ReactLiveProps) {
  const code = rawCode.trim().replace("// prettier-ignore", "");
  const [editorCode, setEditorCode] = useState(code.trim());
  const onChange = (newCode: string) => setEditorCode(newCode.trim());
  const liveProviderProps = {
    code: editorCode,
    scope,
    ...rest,
  };
  return (
    <div
      className={st(classes.root, {
        twoColumn,
        editable,
      })}
    >
      <LiveProvider {...liveProviderProps}>
        <LivePreview className={classes.preview} />
        {editable && (
          <Text elementType="div" vol={1} className={classes.codeBlock}>
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <div className={classes.editableNotice}>/*= Editable =*/</div>
            <LiveEditor onChange={onChange} tabMode="focus" />
          </Text>
        )}
        {editable && <LiveError />}
      </LiveProvider>
    </div>
  );
}

// export default ReactLiveBlock;
