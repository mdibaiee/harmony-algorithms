function brainLuck(code, input) {
  var output = '',
      data = [],
      pointer = 0,
      input = input.split('');
  
  for(var i = 0, len = code.length; i < len; i++) {
    var cmd = code[i];
    
    if(cmd === '>') ++pointer;
    else if(cmd === '<') --pointer;
    else if(cmd === '+') data[pointer] = ((data[pointer] || 0) + 1) % 256;
    else if(cmd === '-') data[pointer] = ((data[pointer] || 0) + 255) % 256;
    else if(cmd === '.') output += String.fromCharCode(data[pointer] || 0);
    else if(cmd === ',') data[pointer] = (input.shift() || '').charCodeAt(0);
    else if((cmd === '[' && !data[pointer]) ||
            (cmd === ']' && data[pointer])) i = matchBracket(code, i);
  }
  
  return output;
}

function matchBracket(x, index) {
  var dir = x[index] === ']' ? -1 : 1,
      seek = 0;

  if(dir === -1) {
    for(var i = index; i >= 0; i--) {
      var char = x[i];
      if (char === ']') seek++;
      else if (char === '[') seek--;

      if(seek === 0) return i;
    }
  } else {
    for(var i = index, len = x.length; i < len; i++) {
      var char = x[i];
      if (char === '[') seek++;
      else if (char === ']') seek--;

      if(seek === 0) return i;
    }
  }
}

var result = brainLuck('\
,>+>>>>++++++++++++++++++++++++++++++++++++++++++++>++++++++++++++++++++++++++++++++<<<<<<[>[>>>>>>+>+<<<<<<<-]>>>>>>>[<<<<<<<+>>>>>>>-]<[>++++++++++[-<-[>>+>+<<<-]>>>[<<<+>>>-]+<[>[-]<[-]]>[<<[>>>+<<<-]>>[-]]<<]>>>[>>+>+<<<-]>>>[<<<+>>>-]+<[>[-]<[-]]>[<<+>>[-]]<<<<<<<]>>>>>[++++++++++++++++++++++++++++++++++++++++++++++++.[-]]++++++++++<[->-<]>++++++++++++++++++++++++++++++++++++++++++++++++.[-]<<<<<<<<<<<<[>>>+>+<<<<-]>>>>[<<<<+>>>>-]<-[>>.>.<<<[-]]<<[>>+>+<<<-]>>>[<<<+>>>-]<<[<+>-]>[<+>-]<<<-]', '\n');
console.log(result);

