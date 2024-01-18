export async function get(url) {
  let promise = await fetch(url);
  return await promise.json();
}
