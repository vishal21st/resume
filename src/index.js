import "./css/style.scss"
import { Companies, Projects, PersonalDetails, Skills, Languages } from './js/store'
const CompaniesTpl = require("./js/templates/CompanyList.hbs")
const ProjectsTpl = require("./js/templates/Projects.hbs")
const QualificationTpl = require("./js/templates/Qualification.hbs")
const AsideSectionTpl = require("./js/templates/AsideSection.hbs")
const PersonalDetailTpl = require("./js/templates/PersonalDetail.hbs")
const PageHeadingTpl = require("./js/templates/PageHeading.hbs")
document.getElementById('company-section').innerHTML = CompaniesTpl({items: Companies});
// document.getElementById('project-section').innerHTML = ProjectsTpl({items: Projects});
document.getElementById('qualification-section').innerHTML = QualificationTpl();
document.getElementById('skill-section').innerHTML = AsideSectionTpl(Skills);
document.getElementById('language-section').innerHTML = AsideSectionTpl(Languages);
document.getElementById('personal-detail-section').innerHTML = PersonalDetailTpl(PersonalDetails);
document.getElementById('personal-detail-section-mb').innerHTML = PersonalDetailTpl(PersonalDetails);

document.getElementById('page-heading').innerHTML = PageHeadingTpl(PersonalDetails)
