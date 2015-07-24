String.prototype.toAscii85 = function() {
  var str = '';

  for(var i = 0, len = this.length; i < len; i+=4) {
    var bin = '';
    var zeroes = 0;
    for(var j = 0; j < 4; j++) {
      var char = this[i+j];
 
      bin += to8bit(char ? char.charCodeAt(0) : (zeroes++, 0));
    }

    var n = parseInt(bin, 2);
    
    for(var j = 4; j >= 0; j--) {
      var c = Math.floor(n / Math.pow(85, j));
      n -= c*Math.pow(85, j);
      str += String.fromCharCode(c + 33);
    }

    str = str.slice(0, zeroes > 0 ? -zeroes : undefined);
  }
  
  return '<~' + str.replace(/!{5}/g, 'z') + '~>'
}

String.prototype.fromAscii85 = function() {
  var str = this.slice(2, -2).replace(/z/g, '!!!!!').replace(/\s/g, '');
  var decoded = '';
  
  
  for(var i = 0, len = str.length; i < len; i+=5) {
    var n = 0;
    var us = 0;
    for(var j = 4; j >= 0; j--) {
      var c = str[j+i] || (us++, 'u'),
          code = c.charCodeAt(0) - 33;

      n += code * Math.pow(85, Math.abs(j-4));
    }
    
    var bin = stretch(n.toString(2), 32);
    
    for(var j = 0; j < 32; j+=8) {
      var char = parseInt(bin.slice(j, j+8), 2);
      decoded += String.fromCharCode(char);
    }
    decoded = decoded.slice(0, us > 0 ? -us : undefined);
  }
  
  return decoded;
}

function to8bit(n) {
  var bin = stretch(n.toString(2), 8);
  
  return bin;
}

function stretch(s, n) {
  var r = s;
  while(r.length < n) {
    r = '0' + r;
  }
  
  return r;
}