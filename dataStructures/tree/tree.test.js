
const Tree = require('./Tree');

describe('Tree article test', () => {
  const documentTree = new Tree();

  documentTree.addNode('document', 'root');
  documentTree.addNode('section1', 'document');
  documentTree.addNode('section2', 'document');
  documentTree.addNode('section3', 'document');

  documentTree.addNode('article1-1', 'section1');
  documentTree.addNode('article1-2', 'section1');
  documentTree.addNode('article2-1', 'section2');
  documentTree.addNode('article3-1', 'section3');

  xtest('documentTree is made correctly', () => {
    const result = documentTree;
    const someMockAnswer = {};
    expect(result).toEqual(someMockAnswer);
  });

  test('search for existing article', () => {
    const article11Node = {
      value: 'article1-1',
      children: [],
    };
    const result = documentTree.search('article1-1');
    expect(result).toEqual(article11Node);
  });

  test('search for non-existing article', () => {
    const missingNodeValue = 'Not Found';
    const result = documentTree.search('article77');
    expect(result).toBe(missingNodeValue);
  });

  /* keeping turned off to declutter console */
  xtest('traverse node', () => {
    documentTree.traverse((node) => {
      console.log(node); /* eslint-disable-line no-console */
    });
  });

  /* keep this test case last because it mututes tree */
  test('remove node', () => {
    const missingNodeValue = 'Not Found';
    documentTree.removeNode('section2');
    const result = documentTree.search('section2');
    expect(result).toBe(missingNodeValue);
  });
});

describe('Tree products test', () => {
  const productTree = new Tree();

  productTree.addNode('Computers & Electronics');
  productTree.addNode('Notebooks', 'Computers & Electronics');
  productTree.addNode('Routers', 'Computers & Electronics');
  productTree.addNode('Desktop Computers', 'Computers & Electronics');

  productTree.addNode('Macbooks', 'Notebooks');
  productTree.addNode('Asus', 'Notebooks');

  productTree.addNode('Macbook Pro', 'Macbooks');
  productTree.addNode('Macbook Air', 'Macbooks');

  xtest('productTree is made Correctly', () => {
    const result = productTree;
    const someMockAnswer = {};
    expect(result).toEqual(someMockAnswer);
  });

  test('search for existing product', () => {
    const macbookProNode = {
      value: 'Macbook Pro',
      children: [],
    };
    const result = productTree.search('Macbook Pro');
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
    const result = productTree.search('Notebooks');
    expect(result).toEqual(macbookProNode);
  });

  test('search for non-existing product', () => {
    const missingNodeValue = 'Not Found';
    const result = productTree.search('derailleur');
    expect(result).toBe(missingNodeValue);
  });

  test('showLeafs Notebooks', () => {
    const notebooksLeaves = [
      { value: 'Macbook Pro', children: [] },
      { value: 'Macbook Air', children: [] },
      { value: 'Asus', children: [] },
    ];
    const result = productTree.showLeafs('Notebooks');
    expect(result).toEqual(notebooksLeaves);
  });

  /* keeping turned off to declutter console */
  xtest('traverse node', () => {
    productTree.traverse((node) => {
      console.log(node); /* eslint-disable-line no-console */
    });
  });

  /* keep this test case last because it mututes tree */
  test('remove node', () => {
    const missingNodeValue = 'Not Found';
    productTree.removeNode('Notebooks');
    const result = productTree.search('Notebooks');
    expect(result).toBe(missingNodeValue);
  });
});
