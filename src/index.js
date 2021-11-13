import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import tabs from "./modules/tabs"
import validate from "./modules/validate";
import slider from "./modules/slider";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

timer("30 november 2021");
menu()
calc()
validate();
tabs()
modal()
slider({ulSlides: "portfolio-content", ulDots: "portfolio-dots", dots: "dot", slides: "portfolio-item", arrows: "portfolio-btn", arrowLeft: "prev", arrowRight: "next", slideActive: "portfolio-item-active", dotActive: "dot-active"});
sendForm('form1')
