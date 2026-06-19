export function calculateReadingTime(content: string): string {
  // Remove markdown syntax
  const plainText = content
    .replace(/!\[.*\]\(.*\)/g, "") // remove images
    .replace(/\[.*\]\(.*\)/g, "") // remove links
    .replace(/#+\s/g, "") // remove headers
    .replace(/\*\*/g, "") // remove bold
    .replace(/\*/g, "") // remove italics
    .replace(/>\s/g, "") // remove blockquotes
    .replace(/`{1,3}.*`{1,3}/g, "") // remove code blocks

  const words = plainText.trim().split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return `${minutes} min`
}
