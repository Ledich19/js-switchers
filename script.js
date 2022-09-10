

  const deep = (arr) => { 
    let result = 0;
    for(e of arr) {
     typeof e === 'object' ? result = 1 + deep(e) : result = 0
    }
      return result
    }



 
    const deep = (arr) => { 
      let result = [];
      for(e of arr) {
        typeof e === 'object' ? result.concat(deep(e)) : result.concat(e)
      }
        return result
      }
    return deep(a)
  
  console.log(deepCount([1, 2, [3, 4, [5]]]))