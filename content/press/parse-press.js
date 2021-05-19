(function parse() {
  let projects = document.querySelectorAll('p');
  let output = [];
  let i = 0;
  for (let node of projects) {
    let isRoot = node.childNodes[0].nodeValue.trim() !== '';
    if (isRoot) {
      i++;
      var data = {
        _id: `press_${i}`,
        _type: 'press',
        order: i,
        title: node.childNodes[0].nodeValue.trim(),
        articles: [],
      };
      var target = data.articles;
    } else {
      var target = output[output.length - 1].articles;
    }
    let links = node.querySelectorAll('a');
    for (let link of links) {
      target.push({
        text: link.textContent,
        href: link.href,
      });
    }
    if (isRoot) output.push(data);
  }
  console.log(JSON.stringify(output));
})();
