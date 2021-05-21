const log = console.log;

let text = (node) => {
  return node.textContent.trim();
};

(function parse() {
  let out = [];
  let container = document.querySelector('#entry-content');
  let year = null;
  let i = 0;
  for (let node of container.children) {
    if (node.nodeName === 'H2') {
      year = parseInt(node.textContent);
      continue;
    }
    let parts = [];
    for (let child of node.childNodes) {
      if (child.nodeName === '#text') {
        parts.push(text(child));
        continue;
      }
      if (child.nodeName === 'BR') {
        parts = parts
          .join(' ')
          .replace(' ,', ',')
          .replace('\n', '')
          .replace(/\s/, '');
        i++;
        out.push({
          _id: `event_archive_${i}`,
          _type: 'event_archive',
          text: parts,
          year: year,
        });
        parts = [];
        continue;
      }
      let el = child.nodeName
        .split('')
        .map((ch) => ch.toLowerCase())
        .join('');
      parts.push(`<${el}>${text(child)}</${el}>`);
    }
  }
  // console.log(JSON.stringify(out));
  console.log(out[0].text);
  window.out = out;
})();
