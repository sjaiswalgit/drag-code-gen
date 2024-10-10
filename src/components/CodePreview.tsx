import React from 'react';
import { Button, message ,Typography} from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import ReactDOMServer from 'react-dom/server';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
const {Text}=Typography

interface CodeGen {
  components: any;
}

// Helper function to format prop values like objects, arrays, booleans, strings
const formatPropValue = (value: any): string => {
  if (typeof value === 'boolean') {
    return value ? '{true}' : '{false}';
  } else if (typeof value === 'object') {
    return `{${JSON.stringify(value)}}`; // Handle objects/arrays
  } else if (typeof value === 'string') {
    return `"${value}"`;
  } else {
    return `{${value}}`; // Handle numbers and other cases
  }
};

const CodePreview: React.FC<CodeGen> = ({ components }) => {
  const generateImports = () => {
    const imports = new Set();
    function compImport(comp:any){
      comp.forEach((component: any) => {
        if(component.name==='Text'){
          imports.add("Typography")
        }
        else{
          imports.add(component.name)
        }

      if(Array.isArray(component.children)){
        compImport(component.children)
      }
    });
  }

  compImport(components)
    return `import React from 'react';\nimport { ${Array.from(imports).join(', ')} } from 'antd';\n${imports.has("Typography")?'const {Text}=Typography':''}`;
  };

  const generateComponentJSX = (component: any, level: number = 1): string => {
    const { defaultProps, defaultStyle, children } = component;
    const ComponentName = component.name;
    const indent = '  '.repeat(level); // Add indentation for each level
    const propsString = Object.entries(defaultProps)
      .map(([key, value]) => `${key}=${formatPropValue(value)}`)
      .join(' ');

    const styleString = Object.entries(defaultStyle)
      .map(([key, value]) => `${key}: "${value}"`)
      .join(', ');

    // Handle children with indentation
    if (children) {
      return `${indent}<${ComponentName} ${propsString} style={{ ${styleString} }}>
      ${Array.isArray(children)
          ? children.map((child: any) => generateComponentJSX(child, level + 1)).join('\n') // Add indentation to children
          : typeof children === 'object'
            ? `${indent}<Text style={{ ${styleString} }}> ${children.text}</Text >`
            : children
        }${indent}
      </${ComponentName}>`;
    } else {
      return `${indent}<${ComponentName} ${propsString} style={{ ${styleString} }} />`;
    }
  };

  const generateCode = () => {
    const imports = generateImports();
    const jsx = components.map(generateComponentJSX).join('\n');

    return `${imports}

function GeneratedComponent() {
  return (
    <div>
      ${jsx}
    </div>
  );
}

export default GeneratedComponent;`;
  };

  const handleCopyCode = () => {
    const code = generateCode();
    navigator.clipboard.writeText(code).then(
      () => {
        message.success('Code copied to clipboard');
      },
      (err) => {
        message.error('Failed to copy code');
        console.error('Could not copy text: ', err);
      }
    );
  };

  return (
    <div>
      <h3>Code Preview</h3>
      <SyntaxHighlighter language="jsx" style={tomorrow}>
        {generateCode()}
      </SyntaxHighlighter>
      <Button icon={<CopyOutlined />} onClick={handleCopyCode}>
        Copy Code
      </Button>
    </div>
  );
};

export default CodePreview;
