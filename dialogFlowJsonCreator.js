const util = require('util')

const recipeOptions = ['brownie cookie','Apple Butter','Barbecue chicken', 'Bear claw', 'Beef',
'Biscuit', 'Blue cheese dpoop', 'cookei pizza', 'Breakfast burrito', 'Buffalo wing'];

const updated = '12222';

  const exampleJsonOutput =  {
    "id": "66846245-b845-45c4-8909-64f617c36346",
    "data": [
      {
        "text": "pizza recipe",
        "userDefined": false
      }
    ],
    "isTemplate": false,
    "count": 0,
    "updated": 1533813444
  }

  function createJson(list) {
        let lastId = 0;
    const returnArray = list.map((item) => {
            const currentId = lastId += 1;
            return {
                   "id": currentId,
                   "data": [
                    {
                    "text": item,
                    "userDefined": false
                    }
                   ],
                   "isTemplate": false,
                   "count": 0,
                   "updated": updated
                    }
            })

            console.log('logging returnArray');
            //console.log(returnArray);
            console.log(util.inspect(returnArray, false, null))
  }

  createJson(recipeOptions);
