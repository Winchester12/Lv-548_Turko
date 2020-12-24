//personalmodule.js
const date = require("../node_modules/date-and-time");
let info = "__filename";

exports.moduleFunc = function(sysUserName) {
    const now = new Date();
    const pattern = date.compile('ddd MMM DD YYYY hh:mm:ss [GMT]Z');
    const GMT = date.format(now, date.compile('[GMT]Z')).toString();
    const GMTnew = insert(GMT, ":", 6);
    const str = `${date.format(now, pattern)}(${GMTnew})`;
    return str;
  }

function insert(main_string, ins_string, pos) {
  return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
}