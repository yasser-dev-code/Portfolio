// blog.js
// Blog-specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Initialize blog-specific functionality
    initBlog();
});

function initBlog() {
    // Calculate reading time for posts
    calculateReadingTime();
    
    // Initialize syntax highlighting
    initBlogSyntaxHighlighting();
    
    // Initialize comments if using Giscus or Utterances
    // initComments();
}

function calculateReadingTime() {
    const article = document.querySelector('.post-content');
    if (!article) return;
    
    const text = article.textContent;
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200); // 200 words per minute
    
    const readingTimeElement = document.getElementById('readingTime');
    if (readingTimeElement) {
        readingTimeElement.textContent = `${readingTime} min read`;
    }
}

function initBlogSyntaxHighlighting() {
    // Enhanced syntax highlighting for blog posts
    const codeBlocks = document.querySelectorAll('.post-content pre code');
    
    codeBlocks.forEach(block => {
        // Add language class if not present
        if (!block.className) {
            block.className = 'language-javascript';
        }
        
        // Apply basic syntax highlighting
        const code = block.textContent;
        const language = block.className.replace('language-', '');
        
        let highlighted = code;
        
        if (language === 'javascript' || language === 'js') {
            highlighted = highlightJavaScript(code);
        } else if (language === 'html') {
            highlighted = highlightHTML(code);
        } else if (language === 'css') {
            highlighted = highlightCSS(code);
        }
        
        block.innerHTML = highlighted;
    });
}

function highlightJavaScript(code) {
    return code
        .replace(/\b(const|let|var|function|return|if|else|for|while|switch|case|break|continue|default|import|export|from|as|class|extends|super|new|this|typeof|instanceof|try|catch|finally|throw|await|async|yield)\b/g, '<span class="keyword">$1</span>')
        .replace(/\b(true|false|null|undefined|NaN|Infinity)\b/g, '<span class="literal">$1</span>')
        .replace(/\b(console|Math|Date|String|Number|Boolean|Array|Object|Promise|JSON|RegExp|Error|Map|Set|Symbol)\b/g, '<span class="builtin">$1</span>')
        .replace(/\b(\d+\.?\d*|0x[\da-f]+)\b/g, '<span class="number">$1</span>')
        .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="string">$&</span>')
        .replace(/(\/\/.*)/g, '<span class="comment">$1</span>')
        .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="comment">$1</span>');
}

function highlightHTML(code) {
    return code
        .replace(/&lt;\/?(\w+)([^>]*)&gt;/g, '<span class="tag">&lt;$1$2&gt;</span>')
        .replace(/(\w+)=/g, '<span class="attribute">$1=</span>')
        .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="string">$&</span>')
        .replace(/&lt;!--[\s\S]*?--&gt;/g, '<span class="comment">$&</span>');
}

function highlightCSS(code) {
    return code
        .replace(/([^{}]+)\{/g, '<span class="selector">$1</span>{')
        .replace(/\b([\w-]+):/g, '<span class="property">$1</span>:')
        .replace(/\b(\d+\.?\d*)(px|em|rem|%|vh|vw|vmin|vmax)?\b/g, '<span class="number">$1$2</span>')
        .replace(/#([\da-f]{3,6})\b/gi, '<span class="hex">#$1</span>')
        .replace(/\b(rgb|rgba|hsl|hsla)\([^)]+\)/g, '<span class="color">$&</span>')
        .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="string">$&</span>')
        .replace(/\/\*[\s\S]*?\*\//g, '<span class="comment">$&</span>');
}

// Uncomment and configure if you want to use Giscus comments
/*
function initComments() {
    const script = document.createElement('script');
    script.src = "https://giscus.app/client.js";
    script.setAttribute('data-repo', "yourusername/your-repo");
    script.setAttribute('data-repo-id', "your_repo_id");
    script.setAttribute('data-category', "Comments");
    script.setAttribute('data-category-id', "your_category_id");
    script.setAttribute('data-mapping', "pathname");
    script.setAttribute('data-strict', "0");
    script.setAttribute('data-reactions-enabled', "1");
    script.setAttribute('data-emit-metadata', "0");
    script.setAttribute('data-input-position', "bottom");
    script.setAttribute('data-theme', "preferred_color_scheme");
    script.setAttribute('data-lang', "en");
    script.crossOrigin = "anonymous";
    script.async = true;
    
    const commentsContainer = document.getElementById('comments');
    if (commentsContainer) {
        commentsContainer.appendChild(script);
    }
}
*/

// Add enhanced syntax highlighting styles
const blogStyle = document.createElement('style');
blogStyle.textContent = `
    /* Enhanced syntax highlighting */
    .keyword { color: #d73a49; font-weight: 600; }
    .builtin { color: #6f42c1; }
    .string { color: #032f62; }
    .number { color: #005cc5; }
    .literal { color: #005cc5; font-weight: 600; }
    .comment { color: #6a737d; font-style: italic; }
    .selector { color: #22863a; }
    .property { color: #6f42c1; }
    .hex, .color { color: #005cc5; }
    .tag { color: #22863a; }
    .attribute { color: #6f42c1; }
    
    [data-theme="dark"] .keyword { color: #ff7b72; }
    [data-theme="dark"] .builtin { color: #d2a8ff; }
    [data-theme="dark"] .string { color: #a5d6ff; }
    [data-theme="dark"] .number { color: #79c0ff; }
    [data-theme="dark"] .literal { color: #79c0ff; }
    [data-theme="dark"] .comment { color: #8b949e; }
    [data-theme="dark"] .selector { color: #7ee787; }
    [data-theme="dark"] .property { color: #d2a8ff; }
    [data-theme="dark"] .hex, .color { color: #79c0ff; }
    [data-theme="dark"] .tag { color: #7ee787; }
    [data-theme="dark"] .attribute { color: #d2a8ff; }
`;
document.head.appendChild(blogStyle);