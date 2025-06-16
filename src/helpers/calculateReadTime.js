
function calculateReadTime(content) {
    const words = content.length / 100
    const readTime = words * 0.3
    return readTime;
}

export default calculateReadTime;