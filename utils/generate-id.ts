export default function generateId() {
  const now = Date.now().toString(36)
  const random = Math.random().toString(36)
  return now + random
}
