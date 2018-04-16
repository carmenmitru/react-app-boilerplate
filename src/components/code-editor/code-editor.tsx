import * as React from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/xcode';
import "./code-editor.css";


class CodeEditor extends React.Component<any,any>{
    constructor(props: any){
        super(props);
        this.state = {
            showGutter: true,
            fontSize : 18,
            highlightActiveLine : true
        }
    }
    
    public render(){
        return(
            <div>
               <AceEditor
                    mode = "html"
                    theme = "xcode"
                    name = "codeEdit"
                    width = "1000px"
                    showGutter = {this.state.showGutter}
                    fontSize = {this.state.fontSize}
                    highlightActiveLine = {this.state.highlightActiveLine}
                    editorProps={{$blockScrolling: true}}
                />
            </div>
        )
    }
}
export default CodeEditor;