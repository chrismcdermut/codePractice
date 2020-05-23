
const Tree = require('./Tree');

describe('Tree article test', () => {
  const documentTree1 = new Tree();

  documentTree1.addNode('document', 'root');
  documentTree1.addNode('section1', 'document');
  documentTree1.addNode('section2', 'document');
  documentTree1.addNode('section3', 'document');

  documentTree1.addNode('article1-1', 'section1');
  documentTree1.addNode('article1-2', 'section1');
  documentTree1.addNode('article2-1', 'section2');
  documentTree1.addNode('article3-1', 'section3');

  xtest('article tree is made', () => {
    const result = documentTree1;
    console.log('result');
    console.log(result);
    // expect(result).toEqual(macbookProNode);
  });

  test('search for existing article', () => {
    const article11Node = {
      value: 'article1-1',
      children: [],
    };
    const result = documentTree1.search('article1-1');
    expect(result).toEqual(article11Node);
  });

  test('search for non-existing article', () => {
    const missingNodeValue = 'Not Found';
    const result = documentTree1.search('article77');
    expect(result).toBe(missingNodeValue);
  });

  // keeping turned off to declutter console
  xtest('traverse node', () => {
    documentTree1.traverse((node) => {
      console.log(node);
    });
  });

  // keep this test case last because it mututes tree
  test('remove node', () => {
    const missingNodeValue = 'Not Found';
    documentTree1.removeNode('section2');
    const result = documentTree1.search('section2');
    expect(result).toBe(missingNodeValue);
  });
});

describe('Tree products test', () => {
  const documentTree2 = new Tree();

  documentTree2.addNode('Computers & Electronics');
  documentTree2.addNode('Notebooks', 'Computers & Electronics');
  documentTree2.addNode('Routers', 'Computers & Electronics');
  documentTree2.addNode('Desktop Computers', 'Computers & Electronics');

  documentTree2.addNode('Macbooks', 'Notebooks');
  documentTree2.addNode('Asus', 'Notebooks');

  documentTree2.addNode('Macbook Pro', 'Macbooks');
  documentTree2.addNode('Macbook Air', 'Macbooks');

  xtest('product tree is made', () => {
    const result = documentTree2;
    console.log('result');
    console.log(result);
    // expect(result).toEqual(macbookProNode);
  });

  test('search for existing product', () => {
    const macbookProNode = {
      value: 'Macbook Pro',
      children: [],
    };
    const result = documentTree2.search('Macbook Pro');
    expect(result).toEqual(macbookProNode);
  });

  test('search for existing category', () => {
    const macbookProNode = {
      children: [
        {
          children: [
            {
              children: [],
              value: 'Macbook Pro',
            },
            {
              children: [],
              value: 'Macbook Air',
            },
          ],
          value: 'Macbooks',
        },
        {
          children: [],
          value: 'Asus',
        },
      ],
      value: 'Notebooks',
    };
    const result = documentTree2.search('Notebooks');
    expect(result).toEqual(macbookProNode);
  });

  test('search for non-existing product', () => {
    const missingNodeValue = 'Not Found';
    const result = documentTree2.search('derailleur');
    expect(result).toBe(missingNodeValue);
  });

  test('showLeafs Notebooks', () => {
    const notebooksLeaves = [
      { value: 'Macbook Pro', children: [] },
      { value: 'Macbook Air', children: [] },
      { value: 'Asus', children: [] },
    ];
    const result = documentTree2.showLeafs('Notebooks');
    expect(result).toEqual(notebooksLeaves);
  });

  // keeping turned off to declutter console
  xtest('traverse node', () => {
    documentTree2.traverse((node) => {
      console.log(node);
    });
  });

  // keep this test case last because it mututes tree
  test('remove node', () => {
    const missingNodeValue = 'Not Found';
    documentTree2.removeNode('Notebooks');
    const result = documentTree2.search('Notebooks');
    expect(result).toBe(missingNodeValue);
  });
});
