function truthCheck(collection, pre) {
  console.log(Boolean(collection[1]["isBot"]))
  for(let i = 0; i < collection.length; i++)
  {
    if(!Boolean(collection[i][pre]))
    {
      return false;
    }
    
  }
  return true;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");