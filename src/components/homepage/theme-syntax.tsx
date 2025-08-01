import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export function ThemeSyntax({ displayedCode, light, dark, theme } :{
        displayedCode: string,
        dark: { [key: string]: React.CSSProperties; },
        light: { [key: string]: React.CSSProperties; },
        theme: string,
    }) {
    return (
        <>
        <div className="relative hidden dark:block">
            <SyntaxHighlighter
                language="javascript"
                style= {dark}
                customStyle={{
                    background: 'transparent',
                    padding: '1.5rem',
                    margin: 0,
                    fontSize: '0.875rem',
                    lineHeight: '1.6',
                    fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                    minHeight: '16rem',
                    border: 'none',
                    borderRadius: 0,
                }}
                showLineNumbers={true}
                lineNumberStyle={{
                    minWidth: '4em',
                    paddingRight: '2em',
                    color: 'hsl(var(--muted-foreground))',
                    opacity: 0.5,
                    fontSize: '0.75rem',
                    userSelect: 'none',
                }}
                wrapLines={true}
                wrapLongLines={true}
            >
                {displayedCode + "|"}
            </SyntaxHighlighter>
        </div>
        <div className="relative dark:hidden">
        <SyntaxHighlighter
            language="javascript"
            style= {light}
            customStyle={{
                background: 'transparent',
                padding: '1.5rem',
                margin: 0,
                fontSize: '0.875rem',
                lineHeight: '1.6',
                fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                minHeight: '16rem',
                border: 'none',
                borderRadius: 0,
            }}
            showLineNumbers={true}
            lineNumberStyle={{
                minWidth: '4em',
                paddingRight: '2em',
                color: 'hsl(var(--muted-foreground))',
                opacity: 0.5,
                fontSize: '0.75rem',
                userSelect: 'none',
            }}
            wrapLines={true}
            wrapLongLines={true}
        >
            {displayedCode + "|"}
        </SyntaxHighlighter>
    </div>
    </>
    )
}