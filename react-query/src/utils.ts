export function toTitle(text: String) {
  return text
    .split(' ')
    .map((subText) => subText[0].toUpperCase() + subText.slice(1))
    .join(' ')
}
