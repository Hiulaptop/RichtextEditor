import React, { useEffect, useState } from "react";
import ColorPicker from "../components/ColorPicker";
import { Type, PaintBucket } from "lucide-react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection, BaseSelection, SELECTION_CHANGE_COMMAND } from "lexical";
import { $getSelectionStyleValueForProperty, $patchStyleText } from "@lexical/selection";
import { mergeRegister } from '@lexical/utils';


export default function ColorPlugin() {
    const [editor] = useLexicalComposerContext();
    const [{ color, background }, setColor] = useState({ color: 'black', background: 'white' });

    const updateColor = ({property, color}: {property: "background" | "color", color: string}) => {
        editor.update(() => {
            const selection = $getSelection();
            if (selection) {
                $patchStyleText(selection, {[property]: color});
            }
        })
    }

    const $updateToolbar = () => {
        const select = $getSelection();
        if ($isRangeSelection(select)) {
            const color = $getSelectionStyleValueForProperty(select, "color", "#000000");
            const background = $getSelectionStyleValueForProperty(select, "background", "#ffffff");
            setColor({color, background});
        }
    }

    useEffect(() => {
            return mergeRegister(
                editor.registerUpdateListener(({ editorState }) => {
                    editorState.read(() => {
                        $updateToolbar();
                    });
                }),
                editor.registerCommand(
                    SELECTION_CHANGE_COMMAND,
                    (_payload, _newEditor) => {
                        $updateToolbar();
                        return false;
                    },
                    1,
                ),
            );
        }, [editor]);

    return (
        <>
        <ColorPicker 
        color={color} 
        onChange={(color: string) => {
            updateColor({property: "color", color });
        }} 
        Icon = {
            <Type color="#ff0000" className="mx-auto"/>
        }
        />

        <ColorPicker 
        color={background}
        onChange={(color: string) => {
            updateColor({property: "background", color});
        }} 
        Icon = {
            <PaintBucket className="mx-auto"/>
        }
        />
        </>
    );
} 
