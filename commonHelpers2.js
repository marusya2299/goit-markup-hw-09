import"./assets/modulepreload-polyfill-3cfb730f.js";const o=document.querySelector(".feedback-form"),t=o.querySelector("input"),a=o.querySelector("textarea");o.querySelector("button");function r(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(t.value=e.email||"",a.value=e.message||"")}r();function m(){const e={email:t.value.trim(),message:a.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(e))}o.addEventListener("input",m);o.addEventListener("submit",e=>{if(e.preventDefault(),t.value.trim()&&a.value.trim()){const l={email:t.value.trim(),message:a.value.trim()};console.log(l),localStorage.removeItem("feedback-form-state"),t.value="",a.value=""}else alert("Please fill in all fields.")});
//# sourceMappingURL=commonHelpers2.js.map
