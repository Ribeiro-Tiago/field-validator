/**
 * @author Tiago Ribeiro - www.tiago-ribeiro.com
 * @version 1.0.0
 */ 
(function(){"use strict";if(!window.util)throw new Error("You need utilities-js for this to work (fix coming soon). Head over to https://www.github.com/ribeiro-tiago/utilities/");const b=function(d){c();let e=function(f,g){if(!f.classList.contains("has-error")){let h=document.createElement("span");f.classList.add("has-error"),h.innerHTML=g,f.appendChild(h)}};Array.prototype.forEach.call(d,function(f){let h=j=>{return util.isDOM(j)?j.parentElement:j[0].parentElement};util.isArray(f.input)?Array.prototype.forEach.call(f.input,function(j){e(h(j),f.error)}):e(h(f.input),f.error)})},c=function(){let d=document.getElementsByClassName("error-span");for(let e=d.length-1;0<=e;e--)d[e].parentElement.classList.remove("has-error"),d[e].remove()};window.validateInputs=function(d,e){if(util.isEmpty(d))throw new Error("Invalid arguments!");let g=[];const h=function(k,l,m,n,o){let p=k.tagName?k.value:k[0].value;if(o&&util.isEmpty(p))return!0;if("required"===l)util.isEmpty(p)&&g.push({error:m||"Required field!",input:k});else if("number"===l)util.isNumber(util.inputValue)||g.push({error:m||"Numeric field!",input:k});else if("even"===l)util.isEven(p)||g.push({error:m||"Value must be even!",input:k});else if("maxvalue"===l){if(!util.isNumber(util.ruleValue))throw new Error("Error validating maxvalue: value isn't number!");parseInt(p)>parseInt(n)&&g.push({error:m||"Value must be below "+n+"!",input:k})}else if("minvalue"===l){if(!util.isNumber(util.ruleValue))throw new Error("Error validating maxvalue: value isn't number!");parseInt(p)<parseInt(n)&&g.push({error:m||"Value must be above "+n+"!",input:k})}else if("positive"===l)util.isPositive(p)||g.push({error:m||"Field must be positive!",input:k});else if("equal"===l){let q=function(s){return parseInt(p)!==parseInt(s)},r=util.isObject(n)?n.every(q):q(n);r&&g.push({error:m||"Value must be one of the following: "+n+"!",input:k})}else if("maxlen"===l)p.length>n&&g.push({error:m||"Maximum value length: "+n+"!",input:k});else if("minlen"===l)p.length<n&&g.push({error:m||"Minimum value length: "+n+"!",input:k});else if("email"===l){let q=new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);q.test(p)||g.push({error:m||"Invalid email!",input:k})}else if("phone"===l){let q=!1;for(let r in n){let s=n[r];if(q)break;for(let t=0;t<s.length;t++)if(s[t]!==p[t]){q=!0,g.push({error:m||"Values don't match!",input:k});break}}}else throw new Error("Invalid rule: !\n\tInput: "+k.name+"\n\tRule: "+l)},j=function(k){console.log(k);let l=k.rule,m=k.input;if(!util.isDOM(m)&&!util.isDOM(m[0]))throw new Error("Invalid input. Supplied DOM / JQuery object is empty!");const n=function(o){util.isArray(l)?Array.prototype.forEach.call(l,function(p){h(o,p.rule,p.message,p.ruleValue,p.optional)}):util.isObject(l)?h(o,l.rule,l.message,l.value,l.optional):h(o,l,k.message,k.value,k.optional)};util.isArray(m)?Array.prototype.forEach.call(m,function(o){n(o)}):n(m)};return(util.isArray(d)?Array.prototype.forEach.call(d,function(k){j(k)}):j(d),e||!0)?util.isEmpty(g)?(c(),!0):(b(g),!1):util.isEmpty(g)}})();