// Helper function  for loading JSON files
// [Called from start]
async function jsonLoader(fileName) {
  return await (await fetch('data/' + fileName)).json();
}