// blog.js
// Blog-specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Initialize blog-specific functionality
    initBlog();
});

function initBlog() {
    // Initialize any blog-specific features here
    // For example: syntax highlighting, reading time calculation, etc.
    
    // Calculate reading time for posts
    calculateReadingTime();
    
    // Initialize comments if using Giscus or Utterances
    initComments();
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

function initComments() {
    // Initialize Giscus or Utterances comments
    // This would be customized based on which service you choose
    
    // Example for Giscus:
    // const script = document.createElement('script');
    // script.src = "https://giscus.app/client.js";
    // script.setAttribute('data-repo', "[ENTER REPO HERE]");
    // script.setAttribute('data-repo-id', "[ENTER REPO ID HERE]");
    // script.setAttribute('data-category', "[ENTER CATEGORY NAME HERE]");
    // script.setAttribute('data-category-id', "[ENTER CATEGORY ID HERE]");
    // script.setAttribute('data-mapping', "pathname");
    // script.setAttribute('data-strict', "0");
    // script.setAttribute('data-reactions-enabled', "1");
    // script.setAttribute('data-emit-metadata', "0");
    // script.setAttribute('data-input-position', "bottom");
    // script.setAttribute('data-theme', "preferred_color_scheme");
    // script.setAttribute('data-lang', "en");
    // script.crossOrigin = "anonymous";
    // script.async = true;
    // document.body.appendChild(script);
}