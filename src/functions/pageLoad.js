import createHeader from "./header";
import homeTab from "../pages/homeTab";
import createFooter from "./footer";

const pageLoad = function () {
    createHeader();
    homeTab();
    createFooter();
};

export default pageLoad;
