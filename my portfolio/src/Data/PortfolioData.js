import ppth1 from './property-pro/Thumbnail1.png'
import ppth2 from './property-pro/Thumbnail2.png'
import pp1 from './property-pro/Img1.png'
import pp2 from './property-pro/Img2.png'
import pp3 from './property-pro/Img3.png'
import pp4 from './property-pro/Img4.png'
import pp5 from './property-pro/Img5.png'
import pp6 from './property-pro/Img6.png'
import pp7 from './property-pro/Img7.png'
import pp8 from './property-pro/Img8.png'
import rm1 from './Ramah Mesra FSKTM/img1.png'
import rm2 from './Ramah Mesra FSKTM/img2.png'
import rm3 from './Ramah Mesra FSKTM/img3.png'
import rm4 from './Ramah Mesra FSKTM/img4.png'
import rm5 from './Ramah Mesra FSKTM/img5.png'
import rm6 from './Ramah Mesra FSKTM/img6.png'
import rm7 from './Ramah Mesra FSKTM/img7.png'
import rm8 from './Ramah Mesra FSKTM/img8.png'
import az1 from './AZ Printing/img1.png'
import az2 from './AZ Printing/img2.png'
import az3 from './AZ Printing/tb1.png'
import az4 from './AZ Printing/tb2.png'
import fd1 from './FectDO/tb1.png'
import fd2 from './FectDO/tb2.png'
import fd3 from './FectDO/img1.png'
import fd4 from './FectDO/img2.png'
import fd5 from './FectDO/img3.png'
import fd6 from './FectDO/img4.png'
import fd7 from './FectDO/img5.png'
import fd8 from './FectDO/img6.png'
import fd9 from './FectDO/img7.png'

const propertyProImg = [pp1, pp2, pp3, pp4, pp5, pp6, pp7, pp8];
const propertyProThb = [ppth1, ppth2];
const propertyProLink = [
    {span: 'Website Link: ', link: 'https://property-pro.vercel.app/'},
    {span: 'Figma Prototype: ', link: 'https://www.figma.com/file/qptZk8SiHykhhCV6RDPuO9/Property-Pro-Prototype?type=design&mode=design&t=CtitaKuzBqYmtLuf-1'},
    {span: 'Source Code: ', link: 'https://github.com/ImAzimm/property-pro'}
];

const rmImg = [rm1, rm2, rm3, rm4, rm5, rm6, rm7, rm8]
const rmThb = [rm2, rm5]
const rmLink = [{span: 'Drive Link: ', link: 'https://drive.google.com/drive/folders/1b-z-Hwt1wxrH1vdFh7oSvQWjkDvC121j?usp=drive_link'}]

const azImg = [az1, az2]
const azThb = [az3, az4]
const azLink = [{span: 'Figma Prototype: ', link: 'https://www.figma.com/file/MFMaWG9Eam2GQ5APlcGaee/AZ-PRINTING-WEB?type=design&node-id=65%3A2&mode=design&t=eDlcA0m3ALS4J0yD-1'}]

const fdImg = [fd3, fd4, fd5, fd6, fd7, fd8, fd9]
const fdThb =[fd1, fd2]
const fdLink = [
    {span: 'Figma Prototype: ', link: 'https://www.figma.com/design/YwIlQtsop201qn1oa1xC4w/FectDo?node-id=0%3A1&t=g1ZfCv4oIZHASNoH-1'},
    {span: 'Github Source Code: ', link: 'https://github.com/ImAzimm/Fect-DO'}
]

export const portfolioDatas = [{
    id: 0,
    title: 'PropertyPro', 
    desc: 'A website for people to buy / sell property including homes, lands & vehicles including modules such as authentification module, property module, transaction module, forum module, social module & broker module. Developing the full stack website with the SRS documentation.', 
    type: 'Course Project',
    thumbnail: propertyProThb,
    image: propertyProImg,
    link: propertyProLink
}, {
    id: 1,
    title: 'AZ Printing', 
    desc: 'A website for my printing services.', 
    type: 'Hobby',
    thumbnail: azThb,
    image: azImg,
    link: azLink
}, {
    id: 3, 
    title: 'FectDO',
    desc: 'An education mobile app developed using Android Studio (Java) & FireStore with modules like authentification module, course module, forum module, social module & notification module. The app is aligned with Sustainable Development Goal (SDG) 4: Quality Education, aiming to provide quality education to students regardless of their background.',
    type: 'Course Project',
    thumbnail: fdThb,
    image: fdImg,
    link: fdLink
}, {
    id: 2,
    title: 'Ramah Mesra FSKTM', 
    desc: 'A dinner events held in my faculty organized by Persatuan Komputer Universiti Malaya (PEKOM). I am participating as multimedia committee member. ', 
    type: 'PEKOM Events',
    thumbnail: rmThb,
    image: rmImg,
    link: rmLink
}];