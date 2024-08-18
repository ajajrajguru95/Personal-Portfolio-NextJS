'use client';

import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

const ContentRenderer = ({ children }) => {
    const sanitizedContent = DOMPurify.sanitize(children);
    return parse(sanitizedContent);
};

export default ContentRenderer;
