
// Custom Post type
export const getCustomPost = async (postType) => {
    const res = await fetch(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/${postType}`);
    const data = await res.json();
    return data;
}
