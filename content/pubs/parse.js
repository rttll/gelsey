const log = console.log;

const strip = (node) => {
  if (node.nodeValue) {
    return node.nodeValue
      .replace(/\n/g, '')
      .replace(/\s{2}/g, '')
      .replace(/“|”/g, '')
      .replace(/^,\s/, '');
  }
  return '';
};

(function parse() {
  let out = [];
  let nodes = document.querySelectorAll('p');
  let i = 1;
  for (let node of nodes) {
    let pub = {
      _id: `publication_${i++}`,
      _type: 'publication',
      belongsTo: 'scholar',
    };
    let j = -1;
    for (let child of node.childNodes) {
      j++;
      if (j === 0) {
        if (child.nodeName === '#text') {
          pub.title = strip(child);
          continue;
        }
      }
      if (j === 1) {
        pub.publication = child.textContent.trim();
        continue;
      }

      pub.volume = strip(child);
    }
    out.push(pub);
  }

  let obj = {
    _id: 'scholar',
    _type: 'scholar',
    title: 'Scholar',
  };
  console.log(obj);
  console.log(out);
})();
