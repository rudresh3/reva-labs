
export default async function sitemap() {
    return [
      {
        url: 'https://revastudio.in',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://revastudio.in',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://revastudio.in',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
    ];
  }