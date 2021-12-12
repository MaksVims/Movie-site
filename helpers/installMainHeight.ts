export default function installMainHeight(length: number): string {
  return length < 10 ? 'h-full' : 'min-h-full'
}