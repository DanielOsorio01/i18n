import React from "react";
import ReactDOM from "react-dom";

import JobsList from "./components/jobslist";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const userLang = navigator.language.substring(0, 2);

ReactDOM.render(
    <IntlProvider locale={userLang} messages= {localeMessages(userLang)}>
        <JobsList />
    </IntlProvider>, document.getElementById("root")
);

function localeMessages(lang) {
    if (lang === "es") {
        return localeEsMessages;
    }
    else if (lang === "en") {
        return localeEnMessages;
    }
}