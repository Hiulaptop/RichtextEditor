import React from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND } from "@lexical/list";
import { List, ListOrdered } from "lucide-react";


export default function ListPlugin() {
    const [editor] = useLexicalComposerContext();
    const [blocktype, setBlocktype] = React.useState('none');

    return (
        <>
            <button
                onClick={() => {
                    if (blocktype === 'ordered-list') {
                        editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
                    }
                    else{
                        editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
                    }
                }}
                className={`w-10 h-10 rounded-xl hover:bg-gray-300 disabled:cursor-not-allowed`}
            >
                <ListOrdered className="mx-auto"/>
            </button>
            <button
                onClick={() => {
                    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
                }}
                className={`w-10 h-10 rounded-xl hover:bg-gray-300 disabled:cursor-not-allowed`}
            >
                <List className="mx-auto"/>
            </button>
        </>
    );
} 
