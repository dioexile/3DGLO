const validate = () => {
  const calcValidate = () => {
   const inputs = document.querySelectorAll(".calc-block>input");
 
   inputs.forEach((elem) => {
     elem.setAttribute("type", "number");
     elem.addEventListener("input", () => {
       elem.value = elem.value.replace(/\D/g, "");
     });
   });
  };
 
  const formValidate = (form) => {
   form.querySelector("input:first-child").addEventListener("input", () => {
     form.querySelector("input[placeholder='Ваше имя']").value = form.querySelector("input[placeholder='Ваше имя']").value.replace(/[^а-я\s\-]/gi, "");
   });
   form.querySelector("input[type='email']").addEventListener("input", () => {
     form.querySelector("input[type='email']").value = form.querySelector("input[type='email']").value.replace(/[^a-z0-9\-\@\_\.\!\~\*\']/gi, "");
   });
   form.querySelector("input[type='tel']").addEventListener("input", () => {
     form.querySelector("input[type='tel']").value = form.querySelector("input[type='tel']").value.replace(/[^\d\(\)\-]/gi, "");
   });
  };

 
  calcValidate();
  formValidate(document.querySelector(".main-form"));
  formValidate(document.querySelector(".footer-form"));
  formValidate(document.querySelector(".popup"));
 };
 
 export default validate;