require('./sourcemap-register.js');(()=>{var e={421:e=>{var r={utf8:{stringToBytes:function(e){return r.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(r.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var r=[],t=0;t<e.length;t++)r.push(e.charCodeAt(t)&255);return r},bytesToString:function(e){for(var r=[],t=0;t<e.length;t++)r.push(String.fromCharCode(e[t]));return r.join("")}}};e.exports=r},935:e=>{(function(){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t={rotl:function(e,r){return e<<r|e>>>32-r},rotr:function(e,r){return e<<32-r|e>>>r},endian:function(e){if(e.constructor==Number){return t.rotl(e,8)&16711935|t.rotl(e,24)&4278255360}for(var r=0;r<e.length;r++)e[r]=t.endian(e[r]);return e},randomBytes:function(e){for(var r=[];e>0;e--)r.push(Math.floor(Math.random()*256));return r},bytesToWords:function(e){for(var r=[],t=0,n=0;t<e.length;t++,n+=8)r[n>>>5]|=e[t]<<24-n%32;return r},wordsToBytes:function(e){for(var r=[],t=0;t<e.length*32;t+=8)r.push(e[t>>>5]>>>24-t%32&255);return r},bytesToHex:function(e){for(var r=[],t=0;t<e.length;t++){r.push((e[t]>>>4).toString(16));r.push((e[t]&15).toString(16))}return r.join("")},hexToBytes:function(e){for(var r=[],t=0;t<e.length;t+=2)r.push(parseInt(e.substr(t,2),16));return r},bytesToBase64:function(e){for(var t=[],n=0;n<e.length;n+=3){var s=e[n]<<16|e[n+1]<<8|e[n+2];for(var i=0;i<4;i++)if(n*8+i*6<=e.length*8)t.push(r.charAt(s>>>6*(3-i)&63));else t.push("=")}return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],n=0,s=0;n<e.length;s=++n%4){if(s==0)continue;t.push((r.indexOf(e.charAt(n-1))&Math.pow(2,-2*s+8)-1)<<s*2|r.indexOf(e.charAt(n))>>>6-s*2)}return t}};e.exports=t})()},525:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.promisify=promisify;var t="__ES6-PROMISIFY--CUSTOM-ARGUMENTS__";function promisify(e){if("function"!=typeof e)throw new TypeError("Argument to promisify must be a function");var r=e[t],n=promisify.Promise||Promise;if("function"!=typeof n)throw new Error("No Promise implementation found; do you need a polyfill?");return function(){for(var t=this,s=arguments.length,i=Array(s),o=0;o<s;o++)i[o]=arguments[o];return new n((function(n,s){i.push((function(e){if(e)return s(e);for(var t=arguments.length,i=Array(1<t?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];if(1===i.length||!r)return n(i[0]);var a={};i.forEach((function(e,t){var n=r[t];n&&(a[n]=e)})),n(a)})),e.apply(t,i)}))}}promisify.argumentNames="__ES6-PROMISIFY--CUSTOM-ARGUMENTS__",promisify.Promise=void 0},625:e=>{
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return e!=null&&(isBuffer(e)||isSlowBuffer(e)||!!e._isBuffer)};function isBuffer(e){return!!e.constructor&&typeof e.constructor.isBuffer==="function"&&e.constructor.isBuffer(e)}function isSlowBuffer(e){return typeof e.readFloatLE==="function"&&typeof e.slice==="function"&&isBuffer(e.slice(0,0))}},126:(e,r,t)=>{var n=t(147);var s;if(process.platform==="win32"||global.TESTING_WINDOWS){s=t(1)}else{s=t(728)}e.exports=isexe;isexe.sync=sync;function isexe(e,r,t){if(typeof r==="function"){t=r;r={}}if(!t){if(typeof Promise!=="function"){throw new TypeError("callback not provided")}return new Promise((function(t,n){isexe(e,r||{},(function(e,r){if(e){n(e)}else{t(r)}}))}))}s(e,r||{},(function(e,n){if(e){if(e.code==="EACCES"||r&&r.ignoreErrors){e=null;n=false}}t(e,n)}))}function sync(e,r){try{return s.sync(e,r||{})}catch(e){if(r&&r.ignoreErrors||e.code==="EACCES"){return false}else{throw e}}}},728:(e,r,t)=>{e.exports=isexe;isexe.sync=sync;var n=t(147);function isexe(e,r,t){n.stat(e,(function(e,n){t(e,e?false:checkStat(n,r))}))}function sync(e,r){return checkStat(n.statSync(e),r)}function checkStat(e,r){return e.isFile()&&checkMode(e,r)}function checkMode(e,r){var t=e.mode;var n=e.uid;var s=e.gid;var i=r.uid!==undefined?r.uid:process.getuid&&process.getuid();var o=r.gid!==undefined?r.gid:process.getgid&&process.getgid();var a=parseInt("100",8);var c=parseInt("010",8);var u=parseInt("001",8);var f=a|c;var p=t&u||t&c&&s===o||t&a&&n===i||t&f&&i===0;return p}},1:(e,r,t)=>{e.exports=isexe;isexe.sync=sync;var n=t(147);function checkPathExt(e,r){var t=r.pathExt!==undefined?r.pathExt:process.env.PATHEXT;if(!t){return true}t=t.split(";");if(t.indexOf("")!==-1){return true}for(var n=0;n<t.length;n++){var s=t[n].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s){return true}}return false}function checkStat(e,r,t){if(!e.isSymbolicLink()&&!e.isFile()){return false}return checkPathExt(r,t)}function isexe(e,r,t){n.stat(e,(function(n,s){t(n,n?false:checkStat(s,e,r))}))}function sync(e,r){return checkStat(n.statSync(e),e,r)}},711:(e,r,t)=>{(function(){var r=t(935),n=t(421).utf8,s=t(625),i=t(421).bin,md5=function(e,t){if(e.constructor==String)if(t&&t.encoding==="binary")e=i.stringToBytes(e);else e=n.stringToBytes(e);else if(s(e))e=Array.prototype.slice.call(e,0);else if(!Array.isArray(e)&&e.constructor!==Uint8Array)e=e.toString();var o=r.bytesToWords(e),a=e.length*8,c=1732584193,u=-271733879,f=-1732584194,p=271733878;for(var l=0;l<o.length;l++){o[l]=(o[l]<<8|o[l]>>>24)&16711935|(o[l]<<24|o[l]>>>8)&4278255360}o[a>>>5]|=128<<a%32;o[(a+64>>>9<<4)+14]=a;var h=md5._ff,d=md5._gg,g=md5._hh,v=md5._ii;for(var l=0;l<o.length;l+=16){var m=c,y=u,E=f,P=p;c=h(c,u,f,p,o[l+0],7,-680876936);p=h(p,c,u,f,o[l+1],12,-389564586);f=h(f,p,c,u,o[l+2],17,606105819);u=h(u,f,p,c,o[l+3],22,-1044525330);c=h(c,u,f,p,o[l+4],7,-176418897);p=h(p,c,u,f,o[l+5],12,1200080426);f=h(f,p,c,u,o[l+6],17,-1473231341);u=h(u,f,p,c,o[l+7],22,-45705983);c=h(c,u,f,p,o[l+8],7,1770035416);p=h(p,c,u,f,o[l+9],12,-1958414417);f=h(f,p,c,u,o[l+10],17,-42063);u=h(u,f,p,c,o[l+11],22,-1990404162);c=h(c,u,f,p,o[l+12],7,1804603682);p=h(p,c,u,f,o[l+13],12,-40341101);f=h(f,p,c,u,o[l+14],17,-1502002290);u=h(u,f,p,c,o[l+15],22,1236535329);c=d(c,u,f,p,o[l+1],5,-165796510);p=d(p,c,u,f,o[l+6],9,-1069501632);f=d(f,p,c,u,o[l+11],14,643717713);u=d(u,f,p,c,o[l+0],20,-373897302);c=d(c,u,f,p,o[l+5],5,-701558691);p=d(p,c,u,f,o[l+10],9,38016083);f=d(f,p,c,u,o[l+15],14,-660478335);u=d(u,f,p,c,o[l+4],20,-405537848);c=d(c,u,f,p,o[l+9],5,568446438);p=d(p,c,u,f,o[l+14],9,-1019803690);f=d(f,p,c,u,o[l+3],14,-187363961);u=d(u,f,p,c,o[l+8],20,1163531501);c=d(c,u,f,p,o[l+13],5,-1444681467);p=d(p,c,u,f,o[l+2],9,-51403784);f=d(f,p,c,u,o[l+7],14,1735328473);u=d(u,f,p,c,o[l+12],20,-1926607734);c=g(c,u,f,p,o[l+5],4,-378558);p=g(p,c,u,f,o[l+8],11,-2022574463);f=g(f,p,c,u,o[l+11],16,1839030562);u=g(u,f,p,c,o[l+14],23,-35309556);c=g(c,u,f,p,o[l+1],4,-1530992060);p=g(p,c,u,f,o[l+4],11,1272893353);f=g(f,p,c,u,o[l+7],16,-155497632);u=g(u,f,p,c,o[l+10],23,-1094730640);c=g(c,u,f,p,o[l+13],4,681279174);p=g(p,c,u,f,o[l+0],11,-358537222);f=g(f,p,c,u,o[l+3],16,-722521979);u=g(u,f,p,c,o[l+6],23,76029189);c=g(c,u,f,p,o[l+9],4,-640364487);p=g(p,c,u,f,o[l+12],11,-421815835);f=g(f,p,c,u,o[l+15],16,530742520);u=g(u,f,p,c,o[l+2],23,-995338651);c=v(c,u,f,p,o[l+0],6,-198630844);p=v(p,c,u,f,o[l+7],10,1126891415);f=v(f,p,c,u,o[l+14],15,-1416354905);u=v(u,f,p,c,o[l+5],21,-57434055);c=v(c,u,f,p,o[l+12],6,1700485571);p=v(p,c,u,f,o[l+3],10,-1894986606);f=v(f,p,c,u,o[l+10],15,-1051523);u=v(u,f,p,c,o[l+1],21,-2054922799);c=v(c,u,f,p,o[l+8],6,1873313359);p=v(p,c,u,f,o[l+15],10,-30611744);f=v(f,p,c,u,o[l+6],15,-1560198380);u=v(u,f,p,c,o[l+13],21,1309151649);c=v(c,u,f,p,o[l+4],6,-145523070);p=v(p,c,u,f,o[l+11],10,-1120210379);f=v(f,p,c,u,o[l+2],15,718787259);u=v(u,f,p,c,o[l+9],21,-343485551);c=c+m>>>0;u=u+y>>>0;f=f+E>>>0;p=p+P>>>0}return r.endian([c,u,f,p])};md5._ff=function(e,r,t,n,s,i,o){var a=e+(r&t|~r&n)+(s>>>0)+o;return(a<<i|a>>>32-i)+r};md5._gg=function(e,r,t,n,s,i,o){var a=e+(r&n|t&~n)+(s>>>0)+o;return(a<<i|a>>>32-i)+r};md5._hh=function(e,r,t,n,s,i,o){var a=e+(r^t^n)+(s>>>0)+o;return(a<<i|a>>>32-i)+r};md5._ii=function(e,r,t,n,s,i,o){var a=e+(t^(r|~n))+(s>>>0)+o;return(a<<i|a>>>32-i)+r};md5._blocksize=16;md5._digestsize=16;e.exports=function(e,t){if(e===undefined||e===null)throw new Error("Illegal argument "+e);var n=r.wordsToBytes(md5(e,t));return t&&t.asBytes?n:t&&t.asString?i.bytesToString(n):r.bytesToHex(n)}})()},284:e=>{"use strict";var r=process.platform==="win32";var t=r?/[^:]\\$/:/.\/$/;e.exports=function(){var e;if(r){e=process.env.TEMP||process.env.TMP||(process.env.SystemRoot||process.env.windir)+"\\temp"}else{e=process.env.TMPDIR||process.env.TMP||process.env.TEMP||"/tmp"}if(t.test(e)){e=e.slice(0,-1)}return e}},207:(e,r,t)=>{const n=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys";const s=t(17);const i=n?";":":";const o=t(126);const getNotFoundError=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"});const getPathInfo=(e,r)=>{const t=r.colon||i;const s=e.match(/\//)||n&&e.match(/\\/)?[""]:[...n?[process.cwd()]:[],...(r.path||process.env.PATH||"").split(t)];const o=n?r.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"";const a=n?o.split(t):[""];if(n){if(e.indexOf(".")!==-1&&a[0]!=="")a.unshift("")}return{pathEnv:s,pathExt:a,pathExtExe:o}};const which=(e,r,t)=>{if(typeof r==="function"){t=r;r={}}if(!r)r={};const{pathEnv:n,pathExt:i,pathExtExe:a}=getPathInfo(e,r);const c=[];const step=t=>new Promise(((i,o)=>{if(t===n.length)return r.all&&c.length?i(c):o(getNotFoundError(e));const a=n[t];const u=/^".*"$/.test(a)?a.slice(1,-1):a;const f=s.join(u,e);const p=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+f:f;i(subStep(p,t,0))}));const subStep=(e,t,n)=>new Promise(((s,u)=>{if(n===i.length)return s(step(t+1));const f=i[n];o(e+f,{pathExt:a},((i,o)=>{if(!i&&o){if(r.all)c.push(e+f);else return s(e+f)}return s(subStep(e,t,n+1))}))}));return t?step(0).then((e=>t(null,e)),t):step(0)};const whichSync=(e,r)=>{r=r||{};const{pathEnv:t,pathExt:n,pathExtExe:i}=getPathInfo(e,r);const a=[];for(let c=0;c<t.length;c++){const u=t[c];const f=/^".*"$/.test(u)?u.slice(1,-1):u;const p=s.join(f,e);const l=!f&&/^\.[\\\/]/.test(e)?e.slice(0,2)+p:p;for(let e=0;e<n.length;e++){const t=l+n[e];try{const e=o.sync(t,{pathExt:i});if(e){if(r.all)a.push(t);else return t}}catch(e){}}}if(r.all&&a.length)return a;if(r.nothrow)return null;throw getNotFoundError(e)};e.exports=which;which.sync=whichSync},81:e=>{"use strict";e.exports=require("child_process")},113:e=>{"use strict";e.exports=require("crypto")},147:e=>{"use strict";e.exports=require("fs")},808:e=>{"use strict";e.exports=require("net")},17:e=>{"use strict";e.exports=require("path")},254:(e,r,t)=>{"use strict";var n=t(702);var s=t(649);var{debug:i}=t(762);e.exports.PEM2DER=function(e,r,t,s){if(!s&&typeof t==="function"){s=t;t="x509"}var i=[t,"-outform","der","-in",e,"-out",r];n.spawnWrapper(i,false,(function(e,r){if(e){s(e)}else{s(null,r===0)}}))};e.exports.DER2PEM=function(e,r,t,s){if(!s&&typeof t==="function"){s=t;t="x509"}var i=[t,"-inform","der","-in",e,"-out",r];n.spawnWrapper(i,false,(function(e,r){if(e){s(e)}else{s(null,r===0)}}))};e.exports.PEM2P7B=function(e,r,t){var s=["crl2pkcs7","-nocrl","-certfile",e.cert,"-out",r];if(e.ca){if(!Array.isArray(e.ca)){e.ca=[e.ca]}e.ca.forEach((function(e){s.push("-certfile");s.push(e)}))}n.spawnWrapper(s,false,(function(e,r){if(e){t(e)}else{t(null,r===0)}}))};e.exports.P7B2PEM=function(e,r,t){var s=["pkcs7","-print_certs","-in",e,"-out",r];n.spawnWrapper(s,false,(function(e,r){if(e){t(e)}else{t(null,r===0)}}))};e.exports.PEM2PFX=function(e,r,t,i){var o=["pkcs12","-export","-out",r,"-inkey",e.key,"-in",e.cert];if(e.ca){if(!Array.isArray(e.ca)){e.ca=[e.ca]}e.ca.forEach((function(e){o.push("-certfile");o.push(e)}))}var a=[];s.createPasswordFile({cipher:"",password:t,passType:"in"},o,a);s.createPasswordFile({cipher:"",password:t,passType:"out"},o,a);n.spawnWrapper(o,false,(function(e,r){function done(e){if(e){i(e)}else{i(null,r===0)}}s.deleteTempFiles(a,(function(r){done(e||r)}))}))};e.exports.PFX2PEM=function(e,r,t,i){var o=["pkcs12","-in",e,"-out",r,"-nodes"];var a=[];s.createPasswordFile({cipher:"",password:t,passType:"in"},o,a);s.createPasswordFile({cipher:"",password:t,passType:"out"},o,a);n.spawnWrapper(o,false,(function(e,r){function done(e){if(e){i(e)}else{i(null,r===0)}}s.deleteTempFiles(a,(function(r){done(e||r)}))}))};e.exports.P7B2PFX=function(e,r,t,o){var a=e.cert.replace(/\.[^.]+$/,".cer");var c=["pkcs7","-print_certs","-in",e.cert,"-out",a];n.spawnWrapper(c,false,(function(c,u){i("P7B2PFX",{error:c,code:u});if(c){o(c)}else{var f=["pkcs12","-export","-in",a,"-inkey",e.key,"-out",r];if(e.ca){if(!Array.isArray(e.ca)){e.ca=[e.ca]}e.ca.forEach((function(e){f.push("-certfile");f.push(e)}))}var p=[a];s.createPasswordFile({cipher:"",password:t,passType:"in"},f,p);s.createPasswordFile({cipher:"",password:t,passType:"out"},f,p);n.spawnWrapper(f,false,(function(e,r){function done(e){if(e){o(e)}else{o(null,r===0)}}s.deleteTempFiles(p,(function(r){done(e||r)}))}))}}))}},762:e=>{function debug(e,r){if(process.env.CI==="true"){console.log(`::group::${e}`);console.log(JSON.stringify(r,null,3));console.log("::endgroup::")}}e.exports={debug:debug}},649:(e,r,t)=>{"use strict";var n=t(17);var s=t(147);var i=t(113);var o=t(284);var a=process.env.PEMJS_TMPDIR||o();e.exports.isNumber=function(e){if(Array.isArray(e)){return false}return/^\d+$/g.test(e)};e.exports.isHex=function isHex(e){return/^(0x){0,1}([0-9A-F]{1,40}|[0-9A-F]{1,40})$/gi.test(e)};e.exports.toHex=function toHex(e){var r="";for(var t=0;t<e.length;t++){r+=""+e.charCodeAt(t).toString(16)}return r};e.exports.ciphers=["aes128","aes192","aes256","camellia128","camellia192","camellia256","des","des3","idea"];var c=e.exports.ciphers;e.exports.createPasswordFile=function(e,r,t){if(!e||!Object.prototype.hasOwnProperty.call(e,"password")||!Object.prototype.hasOwnProperty.call(e,"passType")||!/^(word|in|out)$/.test(e.passType)){return false}var o=n.join(a,i.randomBytes(20).toString("hex"));t.push(o);e.password=e.password.trim();if(e.password===""){e.mustPass=true}if(e.cipher&&c.indexOf(e.cipher)!==-1){r.push("-"+e.cipher)}r.push("-pass"+e.passType);if(e.mustPass){r.push("pass:"+e.password)}else{s.writeFileSync(o,e.password);r.push("file:"+o)}return true};e.exports.deleteTempFiles=function(e,r){var t=[];if(typeof e==="string"){t.push(e)}else if(Array.isArray(e)){t=e}else{return r(new Error("Unexcepted files parameter type; only string or array supported"))}var deleteSeries=function(e,r){if(e.length){var t=e.shift();var myCallback=function(t){if(t&&t.code==="ENOENT"){return deleteSeries(e,r)}else if(t){return r(t)}else{return deleteSeries(e,r)}};if(t&&typeof t==="string"){s.unlink(t,myCallback)}else{return deleteSeries(e,r)}}else{return r(null)}};deleteSeries(t,r)}},702:(e,r,t)=>{var n=t(649);var{debug:s}=t(762);var i=t(81).spawn;var o=t(17);var a=t(147);var c=t(284);var u=t(113);var f=t(207);var p={};var l=process.env.PEMJS_TMPDIR||c();const h=new RegExp("^(OpenSSL|LibreSSL) (((\\d+).(\\d+)).(\\d+))([a-z]+)?");if("CI"in process.env&&process.env.CI==="true"){if("LIBRARY"in process.env&&"VERSION"in process.env&&process.env.LIBRARY!=""&&process.env.VERSION!=""){const e=`./openssl/${process.env.LIBRARY}_v${process.env.VERSION}/bin/openssl`;if(a.existsSync(e)){process.env.OPENSSL_BIN=e}}}function set(e,r){p[e]=r}function get(e){return p[e]||null}function exec(e,r,t,n){if(!n&&typeof t==="function"){n=t;t=false}spawnWrapper(e,t,(function(e,t,s,i){var o,a;if(e){return n(e)}if(o=s.match(new RegExp("-+BEGIN "+r+"-+$","mu"))){o=o.index}else{o=-1}if(r==="EC PARAMETERS"){r="EC PRIVATE KEY"}if(a=s.match(new RegExp("^\\-+END "+r+"\\-+","m"))){a=a.index+a[0].length}else{a=-1}if(o>=0&&a>=0){return n(null,s.substring(o,a))}else{return n(new Error(r+" not found from openssl output:\n---stdout---\n"+s+"\n---stderr---\n"+i+"\ncode: "+t))}}))}function execBinary(e,r,t){if(!t&&typeof r==="function"){t=r;r=false}spawnWrapper(e,r,true,(function(e,r,n,i){s("execBinary",{err:e,code:r,stdout:n,stderr:i});if(e){return t(e)}return t(null,n)}))}function spawn(e,r,t){var n=get("pathOpenSSL")||process.env.OPENSSL_BIN||"openssl";testOpenSSLPath(n,(function(s){if(s){return t(s)}var o=i(n,e);var a="";var c=r?Buffer.alloc(0):"";o.stdout.on("data",(function(e){if(!r){c+=e.toString("binary")}else{c=Buffer.concat([c,e])}}));o.stderr.on("data",(function(e){a+=e.toString("binary")}));var u=2;var f=-1;var p=false;var done=function(r){if(p){return}if(r){p=true;return t(r)}if(--u<1){p=true;if(f!==0){if(f===2&&(a===""||/depth lookup: unable to/.test(a)||/depth lookup: self(-|\s)signed certificate/.test(a))){return t(null,f,c,a)}return t(new Error("Invalid openssl exit code: "+f+"\n% openssl "+e.join(" ")+"\n"+a),f)}else{return t(null,f,c,a)}}};o.on("error",done);o.on("exit",(function(e){f=e;done()}));o.on("close",(function(){c=r?c:Buffer.from(c,"binary").toString("utf-8");a=Buffer.from(a,"binary").toString("utf-8");done()}))}))}function spawnWrapper(e,r,t,i){if(!i&&typeof t==="function"){i=t;t=false}var c=[];var f=[];if(r){r=[].concat(r);var p,h;for(h=0;h<e.length;h++){if(e[h]==="--TMPFILE--"){p=o.join(l,u.randomBytes(20).toString("hex"));c.push({path:p,contents:r.shift()});e[h]=p;f.push(p)}}}var d;for(h=0;h<c.length;h++){d=c[h];a.writeFileSync(d.path,d.contents)}spawn(e,t,(function(r,t,o,a){n.deleteTempFiles(f,(function(n){s(e[0],{err:r,fsErr:n,code:t,stdout:o,stderr:a});i(r||n,t,o,a)}))}))}function testOpenSSLPath(e,r){f(e,(function(t){if(t){return r(new Error("Could not find openssl on your system on this path: "+e))}r()}))}spawn(["version"],false,(function(e,r,t,n){var s=String(t)+"\n"+String(n)+"\n"+String(e);let i=h.exec(s);if(i===null||i.length<=7)return;set("openSslVersion",i[1].toUpperCase());set("Vendor",i[1].toUpperCase());set("VendorVersion",i[2]);set("VendorVersionMajorMinor",i[3]);set("VendorVersionMajor",i[4]);set("VendorVersionMinor",i[5]);set("VendorVersionPatch",i[6]);set("VendorVersionBuildChar",typeof i[7]==="undefined"?"":i[7])}));e.exports={exec:exec,execBinary:execBinary,spawn:spawn,spawnWrapper:spawnWrapper,settings:p,set:set,get:get}},214:(e,r,t)=>{"use strict";const{debug:n}=t(762);const{promisify:s}=t(525);var i=t(808);var o=t(649);var a=t(702);const c=t(711);e.exports.createPrivateKey=createPrivateKey;e.exports.createDhparam=createDhparam;e.exports.createEcparam=createEcparam;e.exports.createCSR=createCSR;e.exports.createCertificate=createCertificate;e.exports.readCertificateInfo=readCertificateInfo;e.exports.getPublicKey=getPublicKey;e.exports.getFingerprint=getFingerprint;e.exports.getModulus=getModulus;e.exports.getDhparamInfo=getDhparamInfo;e.exports.createPkcs12=createPkcs12;e.exports.readPkcs12=readPkcs12;e.exports.verifySigningChain=verifySigningChain;e.exports.checkCertificate=checkCertificate;e.exports.checkPkcs12=checkPkcs12;e.exports.config=config;e.exports.convert=t(254);var u="-----BEGIN PRIVATE KEY-----";var f="-----END PRIVATE KEY-----";var p="-----BEGIN RSA PRIVATE KEY-----";var l="-----END RSA PRIVATE KEY-----";var h="-----BEGIN ENCRYPTED PRIVATE KEY-----";var d="-----END ENCRYPTED PRIVATE KEY-----";var g="-----BEGIN CERTIFICATE-----";var v="-----END CERTIFICATE-----";function createPrivateKey(e,r,t){if(!t&&!r&&typeof e==="function"){t=e;e=undefined;r={}}else if(!t&&e&&typeof r==="function"){t=r;r={}}e=Number(e)||2048;var s=["genrsa"];var i=[];if(r&&r.cipher&&Number(o.ciphers.indexOf(r.cipher))!==-1&&r.password){o.createPasswordFile({cipher:r.cipher,password:r.password,passType:"out"},s,i)}s.push(e);n("version",a.get("openSslVersion"));a.exec(s,"(RSA |ENCRYPTED |)PRIVATE KEY",(function(e,r){function done(e){if(e){return t(e)}return t(null,{key:r})}o.deleteTempFiles(i,(function(t){n("createPrivateKey",{sslErr:e,fsErr:t,key:r,keyLength:r&&r.length});done(e||t)}))}))}function createDhparam(e,r){if(!r&&typeof e==="function"){r=e;e=undefined}e=Number(e)||512;var t=["dhparam","-outform","PEM",e];a.exec(t,"DH PARAMETERS",(function(e,t){if(e){return r(e)}return r(null,{dhparam:t})}))}function createEcparam(e,r,t,n){if(!n&&typeof t==="undefined"&&!r&&typeof e==="function"){n=e;e=undefined}else if(!n&&typeof t==="undefined"&&e&&typeof r==="function"){n=r;r=undefined}else if(!n&&typeof t==="function"&&e&&r){n=t;t=undefined}e=e||"secp256k1";r=r||"explicit";t=t||false;var s=["ecparam","-name",e,"-genkey","-param_enc",r];var i="EC PARAMETERS";if(t){s.push("-noout");i="EC PRIVATE KEY"}a.exec(s,i,(function(e,r){if(e){return n(e)}return n(null,{ecparam:r})}))}function createCSR(e,r){if(!r&&typeof e==="function"){r=e;e=undefined}e=e||{};if(e.commonName&&(i.isIPv4(e.commonName)||i.isIPv6(e.commonName))){if(!e.altNames){e.altNames=[e.commonName]}else if(e.altNames.indexOf(e.commonName)===-1){e.altNames=e.altNames.concat([e.commonName])}}if(!e.clientKey){createPrivateKey(e.keyBitsize||2048,(function(t,n){if(t){return r(t)}e.clientKey=n.key;createCSR(e,r)}));return}var t=["req","-new","-"+(e.hash||"sha256")];if(e.csrConfigFile){t.push("-config");t.push(e.csrConfigFile)}else{t.push("-subj");t.push(generateCSRSubject(e))}t.push("-key");t.push("--TMPFILE--");var n=[e.clientKey];var s=null;if(e.altNames&&Array.isArray(e.altNames)&&e.altNames.length){t.push("-extensions");t.push("v3_req");t.push("-config");t.push("--TMPFILE--");var c=[];for(var u=0;u<e.altNames.length;u++){c.push((i.isIP(e.altNames[u])?"IP":"DNS")+"."+(u+1)+" = "+e.altNames[u])}n.push(s=["[req]","req_extensions = v3_req","distinguished_name = req_distinguished_name","[v3_req]","subjectAltName = @alt_names","[alt_names]",c.join("\n"),"[req_distinguished_name]","commonName = Common Name","commonName_max = 64"].join("\n"))}else if(e.config){s=e.config}var f=[];if(e.clientKeyPassword){o.createPasswordFile({cipher:"",password:e.clientKeyPassword,passType:"in"},t,f)}a.exec(t,"CERTIFICATE REQUEST",n,(function(t,n){function done(t){if(t){return r(t)}r(null,{csr:n,config:s,clientKey:e.clientKey})}o.deleteTempFiles(f,(function(e){done(t||e)}))}))}function createCertificate(e,r){if(!r&&typeof e==="function"){r=e;e=undefined}e=e||{};if(!e.csr){createCSR(e,(function(t,n){if(t){return r(t)}e.csr=n.csr;e.config=n.config;e.clientKey=n.clientKey;createCertificate(e,r)}));return}if(!e.clientKey){e.clientKey=""}if(!e.serviceKey){if(e.selfSigned){e.serviceKey=e.clientKey}else{createPrivateKey(e.keyBitsize||2048,(function(t,n){if(t){return r(t)}e.serviceKey=n.key;createCertificate(e,r)}));return}}readCertificateInfo(e.csr,(function(t,n){if(t){return r(t)}var s=["x509","-req","-"+(e.hash||"sha256"),"-days",Number(e.days)||"365","-in","--TMPFILE--"];var i=[e.csr];var c=[];if(e.serviceCertificate){s.push("-CA");s.push("--TMPFILE--");s.push("-CAkey");s.push("--TMPFILE--");if(e.serial){s.push("-set_serial");if(o.isNumber(e.serial)){s.push("0x"+("0000000000000000000000000000000000000000"+e.serial.toString(16)).slice(-40))}else{if(o.isHex(e.serial)){if(e.serial.startsWith("0x")){e.serial=e.serial.substring(2,e.serial.length)}s.push("0x"+("0000000000000000000000000000000000000000"+e.serial).slice(-40))}else{s.push("0x"+("0000000000000000000000000000000000000000"+o.toHex(e.serial)).slice(-40))}}}else{s.push("-CAcreateserial");if(e.serialFile){s.push("-CAserial");s.push(e.serialFile+".srl")}}if(e.serviceKeyPassword){o.createPasswordFile({cipher:"",password:e.serviceKeyPassword,passType:"in"},s,c)}i.push(e.serviceCertificate);i.push(e.serviceKey)}else{s.push("-signkey");s.push("--TMPFILE--");if(e.serviceKeyPassword){o.createPasswordFile({cipher:"",password:e.serviceKeyPassword,passType:"in"},s,c)}i.push(e.serviceKey)}if(e.config){s.push("-extensions");s.push("v3_req");s.push("-extfile");s.push("--TMPFILE--");i.push(e.config)}else if(e.extFile){s.push("-extfile");s.push(e.extFile)}else{var u=[];if(n&&n.san){for(var f=0;f<n.san.dns.length;f++){u.push("DNS"+"."+(f+1)+" = "+n.san.dns[f])}for(var p=0;p<n.san.ip.length;p++){u.push("IP"+"."+(p+1)+" = "+n.san.ip[p])}for(var l=0;l<n.san.email.length;l++){u.push("email"+"."+(l+1)+" = "+n.san.email[l])}s.push("-extensions");s.push("v3_req");s.push("-extfile");s.push("--TMPFILE--");i.push(["[v3_req]","subjectAltName = @alt_names","[alt_names]",u.join("\n")].join("\n"))}}if(e.clientKeyPassword){o.createPasswordFile({cipher:"",password:e.clientKeyPassword,passType:"in"},s,c)}a.exec(s,"CERTIFICATE",i,(function(t,n){function done(t){if(t){return r(t)}var s={csr:e.csr,clientKey:e.clientKey,certificate:n,serviceKey:e.serviceKey};return r(null,s)}o.deleteTempFiles(c,(function(e){done(t||e)}))}))}))}function getPublicKey(e,r){if(!r&&typeof e==="function"){r=e;e=undefined}e=(e||"").toString();var t;if(e.match(/BEGIN(\sNEW)? CERTIFICATE REQUEST/)){t=["req","-in","--TMPFILE--","-pubkey","-noout"]}else if(e.match(/BEGIN RSA PRIVATE KEY/)||e.match(/BEGIN PRIVATE KEY/)){t=["rsa","-in","--TMPFILE--","-pubout"]}else{t=["x509","-in","--TMPFILE--","-pubkey","-noout"]}a.exec(t,"PUBLIC KEY",e,(function(e,t){if(e){return r(e)}return r(null,{publicKey:t})}))}function readCertificateInfo(e,r){if(!r&&typeof e==="function"){r=e;e=undefined}e=(e||"").toString();var t=e.match(/BEGIN(\sNEW)? CERTIFICATE REQUEST/);var n=t?"req":"x509";var s=[n,"-noout","-nameopt","RFC2253,sep_multiline,space_eq,-esc_msb,utf8","-text","-in","--TMPFILE--"];a.spawnWrapper(s,e,(function(e,t,n,s){if(e){return r(e)}else if(s){return r(s)}return fetchCertificateData(n,r)}))}function getModulus(e,r,t,n){if(!n&&!t&&typeof r==="function"){n=r;r=undefined;t=false}else if(!n&&t&&typeof t==="function"){n=t;t=false}if(t&&t!=="md5"){t=false}e=Buffer.isBuffer(e)&&e.toString()||e;let s;if(e.match(/BEGIN(\sNEW)? CERTIFICATE REQUEST/)){s="req"}else if(e.match(/BEGIN RSA PRIVATE KEY/)||e.match(/BEGIN PRIVATE KEY/)){s="rsa"}else{s="x509"}let i=[s,"-noout","-modulus","-in","--TMPFILE--"];let u=[];if(r){o.createPasswordFile({cipher:"",password:r,passType:"in"},i,u)}a.spawnWrapper(i,e,(function(e,r,s,i){function done(e){if(e){return n(e)}var r=s.match(/Modulus=([0-9a-fA-F]+)$/m);if(r){if(t==="md5"){return n(null,{modulus:c(r[1])})}return n(null,{modulus:r[1]})}else{return n(new Error("No modulus"))}}o.deleteTempFiles(u,(function(r){done(e||r||i)}))}))}function getDhparamInfo(e,r){e=Buffer.isBuffer(e)&&e.toString()||e;var t=["dhparam","-text","-in","--TMPFILE--"];a.spawnWrapper(t,e,(function(e,t,n,s){if(e){return r(e)}else if(s){return r(s)}var i={};var o=n.match(/Parameters: \((\d+) bit\)/);if(o){i.size=Number(o[1])}var a="";n.split("\n").forEach((function(e){if(/\s+([0-9a-f][0-9a-f]:)+[0-9a-f]?[0-9a-f]?/g.test(e)){a+=e.trim()}}));if(a){i.prime=a}if(!o&&!a){return r(new Error("No DH info found"))}return r(null,i)}))}function config(e){Object.keys(e).forEach((function(r){a.set(r,e[r])}))}function getFingerprint(e,r,t){if(!t&&typeof r==="function"){t=r;r=undefined}r=r||"sha1";var n=["x509","-in","--TMPFILE--","-fingerprint","-noout","-"+r];a.spawnWrapper(n,e,(function(e,r,n,s){if(e){return t(e)}else if(s){return t(s)}var i=n.match(/Fingerprint=([0-9a-fA-F:]+)$/m);if(i){return t(null,{fingerprint:i[1]})}else{return t(new Error("No fingerprint"))}}))}function createPkcs12(e,r,t,n,s){if(!s&&typeof n==="function"){s=n;n={}}var i=["pkcs12","-export"];var c=[];if(n.cipher&&n.clientKeyPassword){o.createPasswordFile({cipher:n.cipher,password:n.clientKeyPassword,passType:"in"},i,c)}o.createPasswordFile({cipher:"",password:t,passType:"word"},i,c);i.push("-in");i.push("--TMPFILE--");i.push("-inkey");i.push("--TMPFILE--");var u=[r,e];if(n.certFiles){u.push(n.certFiles.join(""));i.push("-certfile");i.push("--TMPFILE--")}a.execBinary(i,u,(function(e,r){function done(e){if(e){return s(e)}return s(null,{pkcs12:r})}o.deleteTempFiles(c,(function(r){done(e||r)}))}))}function readPkcs12(e,r,t){if(!t&&typeof r==="function"){t=r;r={}}r.p12Password=r.p12Password||"";var n=[];var s=[];var i=["pkcs12","-in",e];o.createPasswordFile({cipher:"",password:r.p12Password,passType:"in"},i,s);if(Buffer.isBuffer(e)){n=[e];i[2]="--TMPFILE--"}if(r.clientKeyPassword){o.createPasswordFile({cipher:"",password:r.clientKeyPassword,passType:"out"},i,s)}else{i.push("-nodes")}a.execBinary(i,n,(function(e,n){function done(e){var s={};if(e&&e.message.indexOf("No such file or directory")!==-1){e.code="ENOENT"}if(!e){var i=readFromString(n,g,v);s.cert=i.shift();s.ca=i;s.key=readFromString(n,p,l).pop();if(s.key){return a.exec(["rsa","-in","--TMPFILE--"],"(RSA |ENCRYPTED |)PRIVATE KEY",[s.key],(function(e,r){s.key=r;return t(e,s)}))}if(r.clientKeyPassword){s.key=readFromString(n,h,d).pop()}else{s.key=readFromString(n,u,f).pop()}}return t(e,s)}o.deleteTempFiles(s,(function(r){done(e||r)}))}))}function checkCertificate(e,r,t){var n;var s=[];if(!t&&typeof r==="function"){t=r;r=undefined}e=(e||"").toString();if(e.match(/BEGIN(\sNEW)? CERTIFICATE REQUEST/)){n=["req","-text","-noout","-verify","-in","--TMPFILE--"]}else if(e.match(/BEGIN RSA PRIVATE KEY/)||e.match(/BEGIN PRIVATE KEY/)){n=["rsa","-noout","-check","-in","--TMPFILE--"]}else{n=["x509","-text","-noout","-in","--TMPFILE--"]}if(r){o.createPasswordFile({cipher:"",password:r,passType:"in"},n,s)}a.spawnWrapper(n,e,(function(e,r,i,c){function done(e){i=i&&i.trim();var r;switch(n[0]){case"rsa":r=/^Rsa key ok$/i.test(i);break;default:r=/Signature Algorithm/im.test(i);break}if(!r){if(a.get("Vendor")==="OPENSSL"&&a.get("VendorVersionMajor")>=3){if(!(c&&c.toString().trim().endsWith("verify OK"))){return t(new Error(c.toString()))}}if(e&&e.toString().trim()!=="verify OK"){return t(e)}}t(null,r)}o.deleteTempFiles(s,(function(r){done(e||r||c)}))}))}function checkPkcs12(e,r,t){if(!t&&typeof r==="function"){t=r;r=""}var s=[];var i=[];var c=["pkcs12","-info","-in",e,"-noout","-maciter","-nodes"];o.createPasswordFile({cipher:"",password:r,passType:"in"},c,i);if(Buffer.isBuffer(e)){s=[e];c[3]="--TMPFILE--"}if(a.get("Vendor")==="OPENSSL"&&a.get("VendorVersionMajor")>=3){c.splice(2,0,"-legacy")}a.spawnWrapper(c,s,(function(e,r,s,a){n("checkPkcs12 error",{err:e,code:r,stdout:s,stdoutResult:/MAC verified OK/im.test(a)||!/MAC verified OK/im.test(a)&&!/Mac verify error/im.test(a),stderr:a});function done(e){if(e){return t(e)}t(null,/MAC verified OK/im.test(a)||!/MAC verified OK/im.test(a)&&!/Mac verify error/im.test(a))}o.deleteTempFiles(i,(function(t){n("checkPkcs12 clean-up error",{sslErr:e,fsErr:t,code:r,stdout:s,stdoutResult:/MAC verified OK/im.test(a)||!/MAC verified OK/im.test(a)&&!/Mac verify error/im.test(a),stderr:a});done(e||t)}))}))}function verifySigningChain(e,r,t){if(!t&&typeof r==="function"){t=r;r=undefined}if(!Array.isArray(e)){e=readFromString(e,g,v)}if(!Array.isArray(r)&&r!==undefined){if(r!==""){r=[r]}}var s=["verify"];var i=[];if(r!==undefined){s.push("-CAfile");s.push("--TMPFILE--");i.push(r.join("\n"))}var o=e.shift();if(e.length>0){s.push("-untrusted");s.push("--TMPFILE--");i.push(e.join("\n"))}s.push("--TMPFILE--");i.push(o);a.spawnWrapper(s,i,(function(e,r,s,i){n("Vendor",a.get("Vendor"));n("VendorVersionMajor",a.get("VendorVersionMajor"));n("openssl.get('VendorVersionMajor') >= 3",a.get("VendorVersionMajor")>=3);if(a.get("Vendor")==="OPENSSL"&&a.get("VendorVersionMajor")>=3){let o=!!(s&&s.trim().includes(": OK"));if(e){n("verifySigningChain error",{err:e,code:r,stdout:s,stdoutResult:o,stderr:i});return t(e)}n("verifySigningChain error - use stderr",{err:e,code:r,stdout:s.trim(),stdoutResult:o,stderr:i.trim()});return t(null,o)}if(e){n("verifySigningChain error",{err:e,code:r,stdout:s,stdoutResult:s&&s.trim().slice(-4)===": OK",stderr:i});return t(e)}n("verifySigningChain",{err:e,code:r,stdout:s,stdoutResult:s&&s.trim().slice(-4)===": OK",stderr:i});t(null,s&&s.trim().slice(-4)===": OK")}))}function fetchCertificateData(e,r){try{e=(e||"").toString();var t,n,s,i;var o={issuer:{}};var a={};var c;var u,f;if((t=e.match(/\s*Serial Number:\r?\n?\s*([^\r\n]*)\r?\n\s*\b/))&&t.length>1){o.serial=t[1]}if((n=e.match(/\s*Subject:\r?\n(\s*(([a-zA-Z0-9.]+)\s=\s[^\r\n]+\r?\n))*\s*\b/))&&n.length>1){n=n[0];s=matchAll(n,/\s([a-zA-Z0-9.]+)\s=\s([^\r\n].*)/g);if(s){for(f=0;f<s.length;f++){u=s[f][1].trim();if(u.match("(C|ST|L|O|OU|CN|emailAddress|DC)")||u===""){continue}o[u]=s[f][2].trim()}}s=n.match(/\sC\s=\s([^\r\n].*?)[\r\n]/);o.country=s&&s[1]||"";s=n.match(/\sST\s=\s([^\r\n].*?)[\r\n]/);o.state=s&&s[1]||"";s=n.match(/\sL\s=\s([^\r\n].*?)[\r\n]/);o.locality=s&&s[1]||"";s=matchAll(n,/\sO\s=\s([^\r\n].*)/g);o.organization=s?s.length>1?s.sort((function(e,r){var t=e[1].toUpperCase();var n=r[1].toUpperCase();return n>t?-1:t>n?1:0})).sort((function(e,r){return e[1].length-r[1].length})).map((function(e){return e[1]})):s[0][1]:"";s=matchAll(n,/\sOU\s=\s([^\r\n].*)/g);o.organizationUnit=s?s.length>1?s.sort((function(e,r){var t=e[1].toUpperCase();var n=r[1].toUpperCase();return n>t?-1:t>n?1:0})).sort((function(e,r){return e[1].length-r[1].length})).map((function(e){return e[1]})):s[0][1]:"";s=matchAll(n,/\sCN\s=\s([^\r\n].*)/g);o.commonName=s?s.length>1?s.sort((function(e,r){var t=e[1].toUpperCase();var n=r[1].toUpperCase();return n>t?-1:t>n?1:0})).sort((function(e,r){return e[1].length-r[1].length})).map((function(e){return e[1]})):s[0][1]:"";s=matchAll(n,/emailAddress\s=\s([^\r\n].*)/g);o.emailAddress=s?s.length>1?s.sort((function(e,r){var t=e[1].toUpperCase();var n=r[1].toUpperCase();return n>t?-1:t>n?1:0})).sort((function(e,r){return e[1].length-r[1].length})).map((function(e){return e[1]})):s[0][1]:"";s=matchAll(n,/\sDC\s=\s([^\r\n].*)/g);o.dc=s?s.length>1?s.sort((function(e,r){var t=e[1].toUpperCase();var n=r[1].toUpperCase();return n>t?-1:t>n?1:0})).sort((function(e,r){return e[1].length-r[1].length})).map((function(e){return e[1]})):s[0][1]:""}if((i=e.match(/\s*Issuer:\r?\n(\s*([a-zA-Z0-9.]+)\s=\s[^\r\n].*\r?\n)*\s*\b/))&&i.length>1){i=i[0];s=matchAll(i,/\s([a-zA-Z0-9.]+)\s=\s([^\r\n].*)/g);for(f=0;f<s.length;f++){u=s[f][1].toString();if(u.match("(C|ST|L|O|OU|CN|emailAddress|DC)")){continue}o.issuer[u]=s[f][2].toString()}s=i.match(/\sC\s=\s([^\r\n].*?)[\r\n]/);o.issuer.country=s&&s[1]||"";s=i.match(/\sST\s=\s([^\r\n].*?)[\r\n]/);o.issuer.state=s&&s[1]||"";s=i.match(/\sL\s=\s([^\r\n].*?)[\r\n]/);o.issuer.locality=s&&s[1]||"";s=matchAll(i,/\sO\s=\s([^\r\n].*)/g);o.issuer.organization=s?s.length>1?s.sort((function(e,r){var t=e[1].toUpperCase();var n=r[1].toUpperCase();return n>t?-1:t>n?1:0})).sort((function(e,r){return e[1].length-r[1].length})).map((function(e){return e[1]})):s[0][1]:"";s=matchAll(i,/\sOU\s=\s([^\r\n].*)/g);o.issuer.organizationUnit=s?s.length>1?s.sort((function(e,r){var t=e[1].toUpperCase();var n=r[1].toUpperCase();return n>t?-1:t>n?1:0})).sort((function(e,r){return e[1].length-r[1].length})).map((function(e){return e[1]})):s[0][1]:"";s=matchAll(i,/\sCN\s=\s([^\r\n].*)/g);o.issuer.commonName=s?s.length>1?s.sort((function(e,r){var t=e[1].toUpperCase();var n=r[1].toUpperCase();return n>t?-1:t>n?1:0})).sort((function(e,r){return e[1].length-r[1].length})).map((function(e){return e[1]})):s[0][1]:"";s=matchAll(i,/\sDC\s=\s([^\r\n].*)/g);o.issuer.dc=s?s.length>1?s.sort((function(e,r){var t=e[1].toUpperCase();var n=r[1].toUpperCase();return n>t?-1:t>n?1:0})).sort((function(e,r){return e[1].length-r[1].length})).map((function(e){return e[1]})):s[0][1]:""}if((c=e.match(/X509v3 Subject Alternative Name: \r?\n([^\r\n]*)\r?\n/))&&c.length>1){c=c[1].trim()+"\n";o.san={};s=pregMatchAll("DNS:([^,\\r\\n].*?)[,\\r\\n\\s]",c);o.san.dns=s||"";s=pregMatchAll("IP Address:([^,\\r\\n].*?)[,\\r\\n\\s]",c);o.san.ip=s||"";s=pregMatchAll("email:([^,\\r\\n].*?)[,\\r\\n\\s]",c);o.san.email=s||""}if((s=e.match(/Not Before\s?:\s?([^\r\n]*)\r?\n/))&&s.length>1){a.start=Date.parse(s&&s[1]||"")}if((s=e.match(/Not After\s?:\s?([^\r\n]*)\r?\n/))&&s.length>1){a.end=Date.parse(s&&s[1]||"")}if(a.start&&a.end){o.validity=a}if((s=e.match(/Signature Algorithm: ([^\r\n]*)\r?\n/))&&s.length>1){o.signatureAlgorithm=s&&s[1]||""}if((s=e.match(/Public[ -]Key: ([^\r\n]*)\r?\n/))&&s.length>1){o.publicKeySize=(s&&s[1]||"").replace(/[()]/g,"")}if((s=e.match(/Public Key Algorithm: ([^\r\n]*)\r?\n/))&&s.length>1){o.publicKeyAlgorithm=s&&s[1]||""}r(null,o)}catch(e){r(e)}}function matchAll(e,r){var t=[];e.replace(r,(function(){var e=[].slice.call(arguments,0);var r=e.splice(-2);e.index=r[0];e.input=r[1];t.push(e)}));return t.length?t:null}function pregMatchAll(e,r){var t=new RegExp(e,"g");var n=r.match(t)||[];var s=[];var i,o;for(var a=0;a<n.length;a++){i=new RegExp(e);o=n[a].match(i);s.push(o[1])}return s}function generateCSRSubject(e){e=e||{};var r={C:e.country||e.C,ST:e.state||e.ST,L:e.locality||e.L,O:e.organization||e.O,OU:e.organizationUnit||e.OU,CN:e.commonName||e.CN||"localhost",DC:e.dc||e.DC||"",emailAddress:e.emailAddress};var t=Object.keys(r).map((function(e){if(r[e]){if(typeof r[e]==="object"&&r[e].length>=1){var t="";r[e].map((function(r){t+="/"+e+"="+r.replace(/[^\w .*\-,@']+/g," ").trim()}));return t}else{return"/"+e+"="+r[e].replace(/[^\w .*\-,@']+/g," ").trim()}}}));return t.join("")}function readFromString(e,r,t){if(Buffer.isBuffer(e)){e=e.toString("utf8")}var n=[];if(!e){return n}var s=e.indexOf(r);while(s!==-1){e=e.substring(s);var i=e.indexOf(t);if(i===-1){break}i+=t.length;n.push(e.substring(0,i));s=e.indexOf(r,i)}return n}e.exports.promisified={createPrivateKey:s(createPrivateKey),createDhparam:s(createDhparam),createEcparam:s(createEcparam),createCSR:s(createCSR),createCertificate:s(createCertificate),readCertificateInfo:s(readCertificateInfo),getPublicKey:s(getPublicKey),getFingerprint:s(getFingerprint),getModulus:s(getModulus),getDhparamInfo:s(getDhparamInfo),createPkcs12:s(createPkcs12),readPkcs12:s(readPkcs12),verifySigningChain:s(verifySigningChain),checkCertificate:s(checkCertificate),checkPkcs12:s(checkPkcs12)}}};var r={};function __nccwpck_require__(t){var n=r[t];if(n!==undefined){return n.exports}var s=r[t]={exports:{}};var i=true;try{e[t](s,s.exports,__nccwpck_require__);i=false}finally{if(i)delete r[t]}return s.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var t=__nccwpck_require__(214);module.exports=t})();
//# sourceMappingURL=index.js.map